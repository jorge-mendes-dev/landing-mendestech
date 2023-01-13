import React from "react";
import jorge from "assets/images/jorge.png";

import info from "info";

const MainHeroImage = () => {
  const { mainHero } = info;

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={jorge}
        alt={mainHero.title}
      />
    </div>
  );
};

export default MainHeroImage;
