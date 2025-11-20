import PropTypes from 'prop-types'

const ImageCard = ({ title, image = '', width = 'auto', height = 'auto' }) => {
  return (
    <div className="group relative flex items-center justify-center">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
      <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        <img
          src={image}
          className="w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          alt={title}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default ImageCard
