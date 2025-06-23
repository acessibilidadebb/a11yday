export default function CallPapers() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="call4papers-bg rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-2/3">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-3">
                  <i className="ri-megaphone-line text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Call for Papers
                </h2>
              </div>
              <p className="text-white mb-4">
                Compartilhe seu conhecimento e experiência em acessibilidade
                digital! Estamos aceitando propostas para palestras, workshops e
                painéis.
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <p className="text-white font-medium">
                      Data limite para submissão:
                    </p>
                    <p className="text-white text-xl font-bold">
                      30 de Julho de 2025
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <div className="bg-white text-orange-600 rounded-lg px-3 py-1 text-sm font-medium">
                      Restam 61 dias
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://readdy.ai/home/6247e6cc-3bcf-4203-b13b-c1e4ad3619b6/a8ec1120-30d2-48cb-9ffd-a2dad2384ad0"
                  data-readdy="true"
                  className="text-sm text-white underline hover:text-white hover:no-underline"
                >
                  Ver diretrizes para submissão
                </a>
                <a
                  href="#"
                  id="suggestedTopicsBtn"
                  className="text-sm text-white underline hover:text-white hover:no-underline"
                >
                  Temas sugeridos
                </a>
                <div
                  id="topicsModal"
                  className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50"
                >
                  <div className="bg-white rounded-lg w-full max-w-2xl mx-4 relative">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">
                          Temas Sugeridos
                        </h3>
                        <button
                          id="closeTopicsModal"
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                        >
                          <i className="ri-close-line text-xl" />
                        </button>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">
                            Desenvolvimento Web Acessível
                          </h4>
                          <p className="text-sm text-gray-600">
                            Práticas de desenvolvimento, frameworks e
                            ferramentas para criar websites acessíveis.
                            Implementação de ARIA, semântica HTML e testes de
                            acessibilidade.
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">
                            Design Inclusivo
                          </h4>
                          <p className="text-sm text-gray-600">
                            Princípios de design universal, padrões de interface
                            acessível, tipografia inclusiva e contraste.
                            Experiências de usuário para diferentes
                            necessidades.
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">
                            Tecnologias Assistivas
                          </h4>
                          <p className="text-sm text-gray-600">
                            Leitores de tela, navegação por teclado, software de
                            reconhecimento de voz e outras tecnologias que
                            auxiliam pessoas com deficiência.
                          </p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">
                            WCAG 3.0
                          </h4>
                          <p className="text-sm text-gray-600">
                            Novidades e mudanças nas diretrizes de
                            acessibilidade, implementação prática e impacto no
                            desenvolvimento web.
                          </p>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                          <h4 className="font-medium text-cyan-800 mb-2">
                            IA e Acessibilidade
                          </h4>
                          <p className="text-sm text-gray-600">
                            Aplicações de inteligência artificial para melhorar
                            a acessibilidade, automação de testes e
                            personalização de experiências.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm text-white underline hover:text-white hover:no-underline"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-8 md:w-1/3 flex flex-col justify-center items-center">
              <h3 className="text-white text-xl font-bold mb-4 text-center">
                Envie sua proposta
              </h3>
              <p className="text-white text-center mb-6">
                Seja parte do movimento por uma web mais acessível!
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition shadow-lg whitespace-nowrap">
                Submeter Proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
