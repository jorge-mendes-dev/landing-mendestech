export function useNotifications() {
  const verifyAndRegister = () => {
    'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')
  }

  const sendNotification = (title, body, image = '') => {
    Notification.requestPermission().then((result) => {
      result === 'granted' && executeNotification(title, body, image)
    })
  }

  const executeNotification = (notifyTitle, notifyBody, notifyImage = '') => {
    new Notification(notifyTitle, {
      body: notifyBody,
      icon: notifyImage
    })
  }

  return {
    verifyAndRegister,
    sendNotification
  }
}
