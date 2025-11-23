// Service Worker Configuration
const CACHE_VERSION = 'v1.0.0'
const CACHE_NAME = `mendestech-${CACHE_VERSION}`
const STATIC_CACHE = `static-${CACHE_VERSION}`
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`
const IMAGE_CACHE = `images-${CACHE_VERSION}`

// Cache expiration (in milliseconds)
const CACHE_EXPIRATION = 7 * 24 * 60 * 60 * 1000 // 7 days
const MAX_DYNAMIC_CACHE_SIZE = 50
const MAX_IMAGE_CACHE_SIZE = 60

// Development mode (set to false for production)
const IS_DEV = false

// Critical assets to precache (adjust based on your build output)
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html' // Optional: create an offline fallback page
]

// Utility: Conditional logging
const log = (...args) => {
  if (IS_DEV) console.log('[SW]', ...args)
}

// Utility: Limit cache size
const limitCacheSize = async (cacheName, maxSize) => {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  if (keys.length > maxSize) {
    await cache.delete(keys[0])
    await limitCacheSize(cacheName, maxSize)
  }
}

// Utility: Check if cache entry is expired
const isCacheExpired = (response) => {
  if (!response) return true
  const cachedTime = response.headers.get('sw-cached-time')
  if (!cachedTime) return false
  return Date.now() - parseInt(cachedTime) > CACHE_EXPIRATION
}

// Utility: Add timestamp to cached response
const addTimestampToResponse = async (response) => {
  const clonedResponse = response.clone()
  const body = await clonedResponse.blob()
  const headers = new Headers(clonedResponse.headers)
  headers.set('sw-cached-time', Date.now().toString())

  return new Response(body, {
    status: clonedResponse.status,
    statusText: clonedResponse.statusText,
    headers
  })
}

// Install Event - Precache critical assets
self.addEventListener('install', (event) => {
  log('Installing service worker...')

  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(STATIC_CACHE)
        await cache.addAll(PRECACHE_ASSETS)
        log('Precached critical assets')

        // Force the waiting service worker to become the active service worker
        await self.skipWaiting()
      } catch (error) {
        log('Error during install:', error)
      }
    })()
  )
})

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  log('Activating service worker...')

  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys()
        const cachesToDelete = cacheNames.filter((name) => {
          return !name.includes(CACHE_VERSION)
        })

        await Promise.all(
          cachesToDelete.map((cacheName) => {
            log(`Deleting old cache: ${cacheName}`)
            return caches.delete(cacheName)
          })
        )

        // Take control of all pages immediately
        await self.clients.claim()
        log('Service worker activated and claimed clients')
      } catch (error) {
        log('Error during activation:', error)
      }
    })()
  )
})

// Fetch Event - Smart caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle http/https requests
  if (!request.url.startsWith('http:') && !request.url.startsWith('https:')) {
    return
  }

  // Skip caching for browser extensions, chrome, etc.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return
  }

  event.respondWith(handleFetch(request))
})

// Main fetch handler with different strategies
async function handleFetch(request) {
  const url = new URL(request.url)

  try {
    // Strategy 1: Network-first for navigation (HTML pages)
    if (request.mode === 'navigate') {
      return await networkFirst(request, STATIC_CACHE)
    }

    // Strategy 2: Cache-first for images
    if (request.destination === 'image') {
      return await cacheFirst(request, IMAGE_CACHE, MAX_IMAGE_CACHE_SIZE)
    }

    // Strategy 3: Stale-while-revalidate for CSS/JS
    if (
      request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'font'
    ) {
      return await staleWhileRevalidate(request, STATIC_CACHE)
    }

    // Strategy 4: Network-only for API calls
    if (url.pathname.startsWith('/api/') || request.method !== 'GET') {
      return await fetch(request)
    }

    // Default: Network-first with cache fallback
    return await networkFirst(request, DYNAMIC_CACHE)
  } catch (error) {
    log('Fetch error:', error)
    return await getOfflineFallback(request)
  }
}

// Caching Strategy: Network-first
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request)

    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      const responseWithTimestamp =
        await addTimestampToResponse(networkResponse)
      cache.put(request, responseWithTimestamp)
      log(`Cached (network-first): ${request.url}`)
    }

    return networkResponse
  } catch (error) {
    log(`Network failed for ${request.url}, falling back to cache`)
    const cachedResponse = await caches.match(request)

    if (cachedResponse && !isCacheExpired(cachedResponse)) {
      log(`Serving from cache: ${request.url}`)
      return cachedResponse
    }

    throw error
  }
}

// Caching Strategy: Cache-first
async function cacheFirst(request, cacheName, maxSize) {
  const cachedResponse = await caches.match(request)

  if (cachedResponse && !isCacheExpired(cachedResponse)) {
    log(`Serving from cache: ${request.url}`)
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)

    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      const responseWithTimestamp =
        await addTimestampToResponse(networkResponse)
      cache.put(request, responseWithTimestamp)
      log(`Cached (cache-first): ${request.url}`)

      if (maxSize) {
        await limitCacheSize(cacheName, maxSize)
      }
    }

    return networkResponse
  } catch (error) {
    log(`Failed to fetch: ${request.url}`)
    throw error
  }
}

// Caching Strategy: Stale-while-revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request)

  const fetchPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      const responseWithTimestamp =
        await addTimestampToResponse(networkResponse)
      cache.put(request, responseWithTimestamp)
      log(`Updated cache (stale-while-revalidate): ${request.url}`)
    }
    return networkResponse
  })

  // Return cached version immediately, update in background
  if (cachedResponse) {
    log(`Serving stale cache: ${request.url}`)
    return cachedResponse
  }

  // If no cache, wait for network
  return fetchPromise
}

// Offline fallback
async function getOfflineFallback(request) {
  // Try to serve offline page for navigation requests
  if (request.mode === 'navigate') {
    const offlinePage = await caches.match('/offline.html')
    if (offlinePage) {
      return offlinePage
    }
  }

  // Return a simple offline response
  return new Response(
    JSON.stringify({
      error: 'Offline',
      message: 'You are currently offline. Please check your connection.'
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  )
}
