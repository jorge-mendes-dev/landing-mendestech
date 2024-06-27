import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const CreateQRCode = () => {
  const [url, setUrl] = useState('')
  const [link, setLink] = useState('')

  const handleUrl = (event) => setUrl(event.target.value)
  const generateLink = () => setLink(`https://${url}`)

  const handleSubmit = (event) => {
    event.preventDefault()
    generateLink()
  }

  const setDefault = () => {
    setUrl('')
    setLink('')
  }

  const download = () => {
    const svg = document.getElementById('QRCode')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = 'QRCode'
      downloadLink.href = `${pngFile}`
      downloadLink.click()
    }
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
  }

  return (
    <div className={`container max-w-5xl mx-auto`}>
      <div className="p-2">
        <h3
          className={`text-3xl text-gray-800 font-bold leading-none mb-6 text-green-500`}
        >
          Gere QR Codes com links
        </h3>
        <p
          className={`mb-6 text-gray-600 subpixel-antialiased font-light tracking-light leading-9 align-baseline leading-relaxed`}
        >
          Gere QR Codes baseado em qualquer link.
        </p>

        <div className="w-full">
          <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            {link ? (
              <div className="p-8 mt-4 flex flex-wrap flex-col sm:flex-col items-center justify-between">
                <div
                  style={{ height: '250px', width: '250px' }}
                  className="rounded-xl border p-4 mb-4 bg-white rounded-xl"
                >
                  <QRCode
                    id="QRCode"
                    value={link}
                    size={256}
                    // fgColor={''}
                    title={link}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => download()}
                  >
                    Baixar QR Code
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="url"
                >
                  Link
                </label>
                <input
                  className="mb-2 shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="url"
                  name="url"
                  type="text"
                  value={url}
                  onChange={handleUrl}
                  disabled={link ? true : false}
                  placeholder="www.jorgemendes.com.br"
                  required
                />
                <div className="flex items-center justify-end">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Gerar QR Code
                  </button>
                </div>
              </form>
            )}

            <div className="flex items-center justify-end">
              {link && (
                <button
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setDefault()}
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateQRCode
