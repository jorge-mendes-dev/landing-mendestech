import React from 'react'

import SocialLinks from 'components/SocialLinks'
import config from 'config'

const Footer = () => {
  const { footer } = config
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <SocialLinks />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            {footer.description} | {footer.title} - {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
