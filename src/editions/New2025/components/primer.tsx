export default function Primer() {
  return (
    <section className="py-8 px-4 bg-yellow-400">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Cartilha de Atitudes Acessíveis
            </h2>
            <p className="text-gray-800 mb-6">
              Baixe nossa cartilha com dicas práticas para tornar seu conteúdo
              digital mais acessível. Material gratuito e completo!
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-button font-medium hover:bg-gray-700 transition whitespace-nowrap">
              <i className="ri-download-line mr-2" /> Baixar Cartilha
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=accessibility%20guidebook%20with%20colorful%20design%2C%20open%20book%20showing%20inclusive%20design%20principles%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=123&orientation=landscape"
              alt="Cartilha de Acessibilidade"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
