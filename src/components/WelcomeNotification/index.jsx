import { useEffect } from 'react'
import { useNotifications } from 'hooks/useNotifications'

import config from 'config'

const WelcomeNotification = ({
  delay = 4000,
  storageKey = 'mendestech-welcome-shown',
  title = config.notifications.title,
  message = config.notifications.message,
  icon = config.notifications.icon,
  onNotificationClick
}) => {
  const { sendNotification, isSupported } = useNotifications()

  useEffect(() => {
    const hasShownWelcome = localStorage.getItem(storageKey)

    if (!hasShownWelcome && isSupported()) {
      const notificationTimer = setTimeout(() => {
        sendNotification(title, message, {
          icon,
          tag: 'welcome-notification',
          requireInteraction: false,
          onClick:
            onNotificationClick ||
            (() => {
              console.log('Welcome notification clicked!')
            })
        }).then((success) => {
          if (success) {
            localStorage.setItem(storageKey, 'true')
          }
        })
      }, delay)

      return () => clearTimeout(notificationTimer)
    }
  }, [
    delay,
    storageKey,
    title,
    message,
    icon,
    onNotificationClick,
    sendNotification,
    isSupported
  ])

  return null
}

export default WelcomeNotification
