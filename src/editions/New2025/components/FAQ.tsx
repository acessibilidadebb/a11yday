export default function FAQ() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mr-3">
            <i className="ri-question-line text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800 mb-2">
              Como posso me inscrever no evento?
            </h3>
            <p className="text-gray-600 text-sm">
              Você pode se inscrever através do botão "Inscreva-se" no topo da
              página. O processo é simples e rápido.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800 mb-2">
              O evento terá tradução em Libras?
            </h3>
            <p className="text-gray-600 text-sm">
              Sim, todas as palestras e workshops terão tradução simultânea em
              Libras para garantir acessibilidade.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800 mb-2">
              Haverá certificado de participação?
            </h3>
            <p className="text-gray-600 text-sm">
              Sim, todos os participantes receberão certificado digital após o
              evento, desde que tenham pelo menos 75% de presença.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800 mb-2">
              Como funciona a submissão de trabalhos?
            </h3>
            <p className="text-gray-600 text-sm">
              Acesse a seção "Call for Papers" e clique em "Submeter Proposta".
              Siga as instruções para enviar seu trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
