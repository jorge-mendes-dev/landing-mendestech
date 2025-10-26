import {
  defineConfig,
  defaultClientConditions,
  defaultServerConditions
} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    open: true,
    cors: true,
    hmr: {
      overlay: true
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests.cjs'],
    testMatch: ['./src/**/**/*.test.jsx'],
    globals: true,
    deps: {
      optimizer: {
        web: {
          include: ['vitest-canvas-mock']
        }
      }
    },
    environmentOptions: {
      jsdom: {
        resources: 'usable'
      }
    },
    coverage: {
      provider: 'v8'
    }
  },
  plugins: [
    react()
    /*  ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false
              }
            }
          }
        ]
      },
      png: {
        quality: [0.8, 0.9]
      },
      jpeg: {
        quality: 80
      },
      jpg: {
        quality: 80
      },
      tiff: {
        quality: 80
      },
      gif: {},
      webp: {
        lossless: true
      },
      avif: {
        lossless: true
      }
    }) */
  ],
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      public: path.resolve(__dirname, './public'),
      pages: path.resolve(__dirname, './src/pages'),
      config: path.resolve(__dirname, './src/config'),
      hooks: path.resolve(__dirname, './src/hooks'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './src/utils'),
      routes: path.resolve(__dirname, './src/routes')
    },
    conditions: ['custom', ...defaultClientConditions]
  },
  ssr: {
    resolve: {
      conditions: ['custom', ...defaultServerConditions]
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@heroicons/react', 'framer-motion', 'styled-icons'],
          utils: []
        }
      }
    }
  }
})
