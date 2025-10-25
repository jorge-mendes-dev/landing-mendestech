import config from 'config'

import jorge from 'assets/images/profile.svg'

const MainHeroImage = () => {
  const { mainHero } = config
  const { title } = mainHero

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg transition-all duration-300 hover:scale-[1.15] cursor-pointer dark:bg-zinc-900 dark:hover:scale-[1.00]"
        src={jorge}
        alt={title}
      />
    </div>
  )
}

export default MainHeroImage
