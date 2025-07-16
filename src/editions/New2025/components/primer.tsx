export default function Primer() {
  return (
    <section className="tw-py-8 tw-px-4 tw-bg-yellow-400">
      <div className="tw-container tw-mx-auto">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center">
          <div className="md:tw-w-1/2 tw-mb-8 md:tw-mb-0">
            <h2 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4">
              Cartilha de Atitudes Acessíveis
            </h2>
            <p className="tw-text-gray-800 tw-mb-6">
              Baixe nossa cartilha com dicas práticas para tornar seu conteúdo
              digital mais acessível. Material gratuito e completo!
            </p>
            <button className="tw-bg-gray-800 tw-text-white tw-px-6 tw-py-3 tw-rounded-button tw-font-medium hover:tw-bg-gray-700 tw-transition tw-whitespace-nowrap">
              <i className="ri-download-line tw-mr-2" /> Baixar Cartilha
            </button>
          </div>
          <div className="md:tw-w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=accessibility%20guidebook%20with%20colorful%20design%2C%20open%20book%20showing%20inclusive%20design%20principles%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=123&orientation=landscape"
              alt="Cartilha de Acessibilidade"
              className="tw-rounded-lg tw-shadow-lg tw-max-w-full tw-h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
