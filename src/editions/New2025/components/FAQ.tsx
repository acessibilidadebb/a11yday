export default function FAQ() {
  return (
    <section className="tw-py-8 tw-px-4">
      <div className="tw-container tw-mx-auto">
        <div className="tw-flex tw-items-center tw-mb-6">
          <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-purple-100 tw-rounded-full tw-mr-3">
            <i className="ri-question-line tw-text-primary" />
          </div>
          <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
          <div className="tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-p-4 hover:tw-shadow-md tw-transition">
            <h3 className="tw-font-medium tw-text-gray-800 tw-mb-2">
              Como posso me inscrever no evento?
            </h3>
            <p className="tw-text-gray-600 tw-text-sm">
              Você pode se inscrever através do botão "Inscreva-se" no topo da
              página. O processo é simples e rápido.
            </p>
          </div>
          <div className="tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-p-4 hover:tw-shadow-md tw-transition">
            <h3 className="tw-font-medium tw-text-gray-800 tw-mb-2">
              O evento terá tradução em Libras?
            </h3>
            <p className="tw-text-gray-600 tw-text-sm">
              Sim, todas as palestras e workshops terão tradução simultânea em
              Libras para garantir acessibilidade.
            </p>
          </div>
          <div className="tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-p-4 hover:tw-shadow-md tw-transition">
            <h3 className="tw-font-medium tw-text-gray-800 tw-mb-2">
              Haverá certificado de participação?
            </h3>
            <p className="tw-text-gray-600 tw-text-sm">
              Sim, todos os participantes receberão certificado digital após o
              evento, desde que tenham pelo menos 75% de presença.
            </p>
          </div>
          <div className="tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-p-4 hover:tw-shadow-md tw-transition">
            <h3 className="tw-font-medium tw-text-gray-800 tw-mb-2">
              Como funciona a submissão de trabalhos?
            </h3>
            <p className="tw-text-gray-600 tw-text-sm">
              Acesse a seção "Call for Papers" e clique em "Submeter Proposta".
              Siga as instruções para enviar seu trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
