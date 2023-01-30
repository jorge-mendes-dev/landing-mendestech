import React, { useState } from "react";

const TalkLink = () => {
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");

  const handlePhone = (event) => setPhone(event.target.value);
  const generateLink = () => setLink(`https://wa.me/55${phone}`);
  const copyData = (data) => navigator.clipboard.writeText(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    generateLink();
  };

  const setDefault = () => {
    setPhone("");
    setLink("");
    copyData("");
  };

  return (
    <div className={`py-12`}>
      <div className="p-2">
        <h3
          className={`text-3xl text-gray-800 font-bold leading-none mb-6 text-primary`}
        >
          Link de conversa em um clique
        </h3>
        <p
          className={`mb-6 text-gray-600 subpixel-antialiased font-light tracking-light leading-9 align-baseline leading-relaxed`}
        >
          Utilize links rápidos que abrem uma conversa no WhatsApp de maneira
          automática.
        </p>

        <div className="w-full">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {link ? (
              <div className="bg-green-200 rounded p-8 mt-4 flex flex-wrap flex-col sm:flex-row md:items-center md:justify-between">
                <p className="text-gray-400 subpixel-antialiased font-light tracking-light align-baseline leading-relaxed">
                  {link}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => copyData(link)}
                    className="bg-green-100 hover:bg-green-700 hover:text-white text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Copiar
                  </button>
                </div>
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
                  className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Criar Link
                  </button>
                </div>
              </form>
            )}

            <div className="flex items-center justify-end">
              {link && (
                <button
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setDefault()}
                >
                  Limpar link
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkLink;
