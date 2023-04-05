import React from 'react'

const Analytics = () => {
  const GA_ID = import.meta.env.VITE_APP_GTAG
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <script async src={GA_ID} crossOrigin="anonymous" />
    </>
  )
}

export default Analytics
