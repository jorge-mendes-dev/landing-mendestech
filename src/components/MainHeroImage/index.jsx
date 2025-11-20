import config from 'config'

import jorge from 'assets/images/perfil.jpeg'

const MainHeroImage = () => {
  const { mainHero } = config
  const { title } = mainHero

  return (
    <div className="lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 relative mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/10 to-transparent rounded-lg blur-3xl opacity-50 dark:opacity-30 -z-10"></div>
      <div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 shadow-card lg:rounded-l-2xl lg:rounded-r-none">
        <img
          className="h-full w-full object-cover object-center lg:object-right rounded-2xl lg:rounded-l-2xl lg:rounded-r-none transition-all duration-500 hover:scale-105 cursor-pointer"
          src={jorge}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"></div>
      </div>
    </div>
  )
}

export default MainHeroImage
