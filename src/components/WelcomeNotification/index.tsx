import { useNotifications } from 'hooks/useNotifications'
import { useEffect } from 'react'

import { useConfigStore } from 'store/configStore'

interface WelcomeNotificationProps {
  delay?: number
  storageKey?: string
  title?: string
  message?: string
  icon?: string
  onNotificationClick?: () => void
}

const WelcomeNotification: React.FC<WelcomeNotificationProps> = ({
  delay = 4000,
  storageKey = 'mendestech-welcome-shown',
  title,
  message,
  icon,
  onNotificationClick
}) => {
  const { sendNotification, isSupported } = useNotifications()
  const notifications = useConfigStore((state) => state.notifications)
  const resolvedTitle = title ?? notifications.title
  const resolvedMessage = message ?? notifications.message
  const resolvedIcon = icon ?? notifications.icon

  useEffect(() => {
    const hasShownWelcome = localStorage.getItem(storageKey)

    if (!hasShownWelcome && isSupported()) {
      const notificationTimer = setTimeout(() => {
        sendNotification(resolvedTitle, resolvedMessage, {
          icon: resolvedIcon,
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
