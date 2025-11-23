import PropTypes from 'prop-types'

const Divider = ({ width = 'w-64', bgColor = 'bg-primary', ...props }) => {
  return (
    <div className={`w-full mb-6 flex items-center justify-center`} {...props}>
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200/50 dark:border-gray-800/50"></div>
        </div>
        <div className="relative flex items-center">
          <div
            className={`h-1.5 ${bgColor} ${width} rounded-full bg-gradient-to-r from-primary via-primary-light to-primary shadow-sm relative overflow-hidden`}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Divider.propTypes = {
  width: PropTypes.string,
  bgColor: PropTypes.string
}

export default Divider
