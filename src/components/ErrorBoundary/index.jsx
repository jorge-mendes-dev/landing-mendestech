import React from 'react'
import { motion } from 'framer-motion'

/**
 * ErrorBoundary component to catch and handle errors gracefully
 * Provides a better UX when errors occur in the application
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                <span className="text-5xl">⚠️</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              We apologize for the inconvenience. An unexpected error occurred.
            </motion.p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.details
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8 text-left bg-gray-100 dark:bg-zinc-900 rounded-xl p-6"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-600 dark:text-red-400 overflow-auto whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </motion.details>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReset}
                className="px-8 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Go to Home
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Reload Page
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
