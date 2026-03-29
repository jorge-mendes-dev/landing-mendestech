import { Fragment } from 'react'

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link as LinkRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import { random } from 'utils/generic'

import logo from 'assets/images/logo.png'

import config from 'config/index.json'

interface NavbarProps {
  // Future props can be added here
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { navigation, company, socialMedia } = config
  const { name, url } = company

  return (
    <>
      <Popover>
        {({ close }: { close: () => void }) => (
          <>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              {/* Transparent navbar background */}
              <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 backdrop-blur-sm bg-transparent"></div>

              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start z-10"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <LinkRouter to={url} aria-label={name}>
                      <span className="sr-only">{name}</span>
                      <img
                        alt={name}
                        className="h-16 w-auto sm:h-16"
                        src={logo}
                      />
                    </LinkRouter>
                    <div className="mr-2 flex items-center md:hidden">
                      <PopoverButton
                        className={`bg-background dark:bg-background-dark rounded-xl p-2 inline-flex items-center justify-center text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-light hover:bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                      >
                        <span className="sr-only">Open Menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-2 items-center">
                  {navigation.map(({ name, type, href }) => (
                    <Fragment key={random()}>
                      {type === 'internal' ? (
                        <Link
                          spy={true}
                          active="active"
                          smooth={true}
                          duration={1000}
                          key={random()}
                          to={href}
                          className="group relative font-medium text-base text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-light transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer"
                        >
                          {name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      ) : (
                        <LinkRouter
                          key={random()}
                          to={href}
                          aria-label={name}
                          className={`group relative font-medium text-base text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-light transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20`}
                          rel="noreferrer"
                        >
                          {name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </LinkRouter>
                      )}
                    </Fragment>
                  ))}
                  {socialMedia.map(({ label, url }) => (
                    <LinkRouter
                      key={random()}
                      to={url}
                      aria-label={label}
                      className={`font-medium text-base text-primary hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </LinkRouter>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <PopoverPanel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div
                  className={`rounded-xl-lg shadow-xl backdrop-blur-xl bg-surface/95 dark:bg-surface-dark/95 ring-1 ring-border/50 dark:ring-border-dark/50 overflow-hidden border border-border/50 dark:border-border-dark/50`}
                >
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={logo} alt={name} />
                    </div>
                    <div className="-mr-2">
                      <PopoverButton
                        className={`bg-background dark:bg-black rounded-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1" id="top">
                    {navigation.map(({ name, type, href }) => (
                      <div key={random()}>
                        {type === 'internal' ? (
                          <Link
                            spy={true}
                            active="active"
                            smooth={true}
                            duration={1000}
                            key={random()}
                            to={href}
                            onClick={() => close()}
                            className="block px-3 py-2 rounded-xl text-base font-medium text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-light hover:bg-surface dark:hover:bg-surface-dark transition-colors duration-200 cursor-pointer"
                          >
                            {name}
                          </Link>
                        ) : (
                          <LinkRouter
                            key={random()}
                            to={href}
                            aria-label={name}
                            onClick={() => close()}
                            className={`block px-3 py-2 rounded-xl text-base font-medium text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-light hover:bg-surface dark:hover:bg-surface-dark transition-colors duration-200`}
                            rel="noreferrer"
                          >
                            {name}
                          </LinkRouter>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}

export default Navbar
