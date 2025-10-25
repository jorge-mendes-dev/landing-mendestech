import { useState } from 'react'

const OpenLink = () => {
  const [phone, setPhone] = useState('')
  const [link, setLink] = useState('')

  const handlePhone = (event) => setPhone(event.target.value)
  const generateLink = () => setLink(`https://wa.me/55${phone}`)
  const openUrl = () => window.open(`https://wa.me/55${phone}`, '_blank')

  const handleSubmit = (event) => {
    event.preventDefault()
    generateLink()
    openUrl()
  }

  const setDefault = () => {
    setPhone('')
    setLink('')
  }

  return (
    <div className={`container max-w-5xl mx-auto`}>
      <div className="p-2">
        <h3 className={`text-3xl font-bold leading-none mb-6 text-green-500`}>
          Chame um número altomaticamente
        </h3>
        <p
          className={`mb-6 text-gray-600 subpixel-antialiased font-light tracking-light align-baseline leading-relaxed`}
        >
          Chame qualquer número no WhatsApp sem precisar cadastra-lo na agenda.
        </p>

        <div className="w-full">
          <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            {link ? (
              <div className="bg-green-200 rounded-xl p-8 mt-4 flex flex-wrap flex-col">
                <p className="text-gray-400 subpixel-antialiased font-light tracking-light align-baseline leading-relaxed">
                  caso a conversa não abra automaticamente click abaixo:
                </p>
                <a
                  href={link}
                  className={`block py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Conversar com {phone}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Telefone
                </label>
                <input
                  className="mb-2 shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={handlePhone}
                  disabled={link ? true : false}
                  placeholder="Telefone"
                  required
                />
                <div className="flex items-center justify-end">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Conversar
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
                  Voltar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenLink
