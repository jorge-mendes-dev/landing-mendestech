import {
  defineConfig
  // defaultClientConditions,
  // defaultServerConditions
} from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
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
    react(),
    ViteImageOptimizer({
      // options for image optimization
      mozjpeg: {
        quality: 75
      },
      optipng: {
        optimizationLevel: 5
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4
      },
      gifsicle: {
        optimizationLevel: 3
      },
      webp: {
        quality: 75
      }
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  // json: {
  //   stringify: false
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      config: path.resolve(__dirname, './src/config'),
      hooks: path.resolve(__dirname, './src/hooks'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './src/utils'),
      routes: path.resolve(__dirname, './src/routes')
    }
    // conditions: ['custom', ...defaultClientConditions]
  }
  // ssr: {
  //   resolve: {
  //     conditions: ['custom', ...defaultServerConditions]
  //   }
  // }
})
