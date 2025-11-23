/**
 * Custom hook for browser notifications with permission handling
 * @returns {Object} Notification utilities
 */
export function useNotifications() {
  /**
   * Check if notifications are supported
   */
  const isSupported = () => {
    return 'Notification' in window
  }

  /**
   * Verify and register service worker
   */
  const verifyAndRegister = () => {
    'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')
  }

  /**
   * Request notification permission from user
   * @returns {Promise<NotificationPermission>}
   */
  const requestPermission = async () => {
    if (!isSupported()) {
      console.warn('Notifications are not supported in this browser')
      return 'denied'
    }

    if (Notification.permission === 'granted') {
      return 'granted'
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission()
      return permission
    }

    return Notification.permission
  }

  /**
   * Send a notification with optional permission request
   * @param {string} title - Notification title
   * @param {string} body - Notification body text
   * @param {Object} options - Additional notification options
   */
  const sendNotification = async (title, body, options = {}) => {
    if (!isSupported()) {
      console.warn('Notifications are not supported')
      return false
    }

    const permission = await requestPermission()

    if (permission === 'granted') {
      executeNotification(title, body, options)
      return true
    }

    return false
  }

  /**
   * Execute the notification
   * @param {string} notifyTitle - Notification title
   * @param {string} notifyBody - Notification body
   * @param {Object} options - Notification options (icon, image, badge, vibrate, etc.)
   */
  const executeNotification = (notifyTitle, notifyBody, options = {}) => {
    const defaultOptions = {
      icon: '/logo.svg',
      badge: '/favicon.ico',
      vibrate: [200, 100, 200],
      tag: 'mendestech-notification',
      requireInteraction: false,
      ...options
    }

    const notification = new Notification(notifyTitle, {
      body: notifyBody,
      ...defaultOptions
    })

    setTimeout(() => {
      notification.close()
    }, 5000)

    notification.onclick = (event) => {
      event.preventDefault()
      window.focus()
      notification.close()
      if (options.onClick) {
        options.onClick()
      }
    }

    return notification
  }

  return {
    isSupported,
    verifyAndRegister,
    requestPermission,
    sendNotification
  }
}
