import { useEffect } from 'react'

import {
  CreateQRCode,
  Footer,
  Navbar,
  OpenLink,
  TalkLink,
  Utilities
} from 'components/index'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { useNotifications } from 'hooks/useNotifications'
import { backToTop } from 'utils/generic'

const Utils: React.FC = () => {
  const { verifyAndRegister, sendNotification } = useNotifications()
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
    verifyAndRegister()
    sendNotification('Jorge Mendes', 'Welcome to my website')
  }, [])

  return (
    <div
      className={`bg-background dark:bg-black grid gap-y-16 overflow-hidden`}
    >
      <div className={`relative bg-background dark:bg-black`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <Utilities />
      <TalkLink />
      <OpenLink />
      <CreateQRCode />
      <Footer />
    </div>
  )
}

export default Utils
