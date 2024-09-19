import React, { Fragment } from 'react'

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition
} from '@headlessui/react'
import { Menu } from '@styled-icons/entypo/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Link as LinkRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import { random } from 'utils/generic'

import logo from 'assets/images/logo.png'

import config from 'config'

const Navbar = () => {
  const { navigation, company, socialMedia } = config
  const { name, url } = company

  return (
    <>
      <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background dark:text-zinc-900 transform translate-x-1/2`}
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <LinkRouter to={url} aria-label={name}>
                  <span className="sr-only">{name}</span>
                  <img alt={name} className="h-16 w-auto sm:h-16" src={logo} />
                </LinkRouter>
                <div className="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    className={`bg-background dark:bg-black rounded-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open Menu</span>
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
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
                      className="font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900"
                    >
                      {name}
                    </Link>
                  ) : (
                    <LinkRouter
                      key={random()}
                      to={href}
                      aria-label={name}
                      className={`font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900`}
                      rel="noreferrer"
                    >
                      {name}
                    </LinkRouter>
                  )}
                </Fragment>
              ))}
              {socialMedia.map(({ label, url }) => (
                <LinkRouter
                  key={random()}
                  to={url}
                  aria-label={label}
                  className={`font-medium text-primary hover:text-secondary`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </LinkRouter>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={() => document.body.classList.toggle('dark')}
                className="block h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="fill-violet-700 block dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  className="fill-yellow-500 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
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
              className={`rounded-xl-lg shadow-md bg-background dark:bg-black ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt={name} />
                </div>
                <div className="-mr-2">
                  <PopoverButton
                    className={`bg-background dark:bg-black rounded-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close menu</span>
                    <CloseOutline className="h-6 w-6" aria-hidden="true" />
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
                        className="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 dark:text-blue-800 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {name}
                      </Link>
                    ) : (
                      <LinkRouter
                        key={random()}
                        to={href}
                        aria-label={name}
                        className={`block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50`}
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
      </Popover>
    </>
  )
}

export default Navbar
