import React from 'react'
import { getImagePath } from 'utils/generic'

import config from 'config'

const MainHeroImage = () => {
  const { mainHero } = config
  const { title, img } = mainHero

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={getImagePath(img)}
        alt={title}
      />
    </div>
  )
}

export default MainHeroImage
