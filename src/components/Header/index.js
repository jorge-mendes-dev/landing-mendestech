import React from "react";
import info from "info";
import { Link } from "react-scroll";

const Header = () => {
  const { mainHero } = info;
  const { title, subtitle, description, primaryAction, secondaryAction } =
    mainHero;

  return (
    <main
      className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
      id="header"
    >
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{title}</span>{" "}
          <span className={`block text-primary xl:inline`}>{subtitle}</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              to={primaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:text-offwhite md:py-4 md:text-lg md:px-10"
            >
              {primaryAction.text}
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              target="_blank"
              rel="noreferrer"
              href={secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
