export default function CallPapers() {
  return (
    <section className="tw-py-8 tw-px-4">
      <div className="tw-container tw-mx-auto">
        <div className="call4papers-bg tw-rounded-lg tw-shadow-lg tw-overflow-hidden">
          <div className="tw-flex tw-flex-col md:tw-flex-row">
            <div className="tw-p-8 md:tw-w-2/3">
              <div className="tw-flex tw-items-center tw-mb-4">
                <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-white tw-rounded-full tw-mr-3">
                  <i className="ri-megaphone-line tw-text-orange-500" />
                </div>
                <h2 className="tw-text-2xl tw-font-bold tw-text-white">
                  Call for Papers
                </h2>
              </div>
              <p className="tw-text-white tw-mb-4">
                Compartilhe seu conhecimento e experiência em acessibilidade
                digital! Estamos aceitando propostas para palestras, workshops e
                painéis.
              </p>
              <div className="tw-bg-white tw-bg-opacity-20 tw-rounded-lg tw-p-4 tw-mb-6">
                <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-center tw-justify-between">
                  <div>
                    <p className="tw-text-white tw-font-medium">
                      Data limite para submissão:
                    </p>
                    <p className="tw-text-white tw-text-xl tw-font-bold">
                      30 de Julho de 2025
                    </p>
                  </div>
                  <div className="tw-mt-4 sm:tw-mt-0">
                    <div className="tw-bg-white tw-text-orange-600 tw-rounded-lg tw-px-3 tw-py-1 tw-text-sm tw-font-medium">
                      Restam 61 dias
                    </div>
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-flex-wrap tw-gap-4">
                <a
                  href="https://readdy.ai/home/6247e6cc-3bcf-4203-b13b-c1e4ad3619b6/a8ec1120-30d2-48cb-9ffd-a2dad2384ad0"
                  data-readdy="true"
                  className="tw-text-sm tw-text-white tw-underline hover:tw-text-white hover:tw-no-underline"
                >
                  Ver diretrizes para submissão
                </a>
                <a
                  href="#"
                  id="suggestedTopicsBtn"
                  className="tw-text-sm tw-text-white tw-underline hover:tw-text-white hover:tw-no-underline"
                >
                  Temas sugeridos
                </a>
                <div
                  id="topicsModal"
                  className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-hidden tw-items-center tw-justify-center tw-z-50"
                >
                  <div className="tw-bg-white tw-rounded-lg tw-w-full tw-max-w-2xl tw-mx-4 tw-relative">
                    <div className="tw-p-6">
                      <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                        <h3 className="tw-text-xl tw-font-bold tw-text-gray-800">
                          Temas Sugeridos
                        </h3>
                        <button
                          id="closeTopicsModal"
                          className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-text-gray-500 hover:tw-text-gray-700"
                        >
                          <i className="ri-close-line tw-text-xl" />
                        </button>
                      </div>
                      <div className="tw-space-y-6">
                        <div className="tw-bg-blue-50 tw-p-4 tw-rounded-lg">
                          <h4 className="tw-font-medium tw-text-blue-800 tw-mb-2">
                            Desenvolvimento Web Acessível
                          </h4>
                          <p className="tw-text-sm tw-text-gray-600">
                            Práticas de desenvolvimento, frameworks e
                            ferramentas para criar websites acessíveis.
                            Implementação de ARIA, semântica HTML e testes de
                            acessibilidade.
                          </p>
                        </div>
                        <div className="tw-bg-green-50 tw-p-4 tw-rounded-lg">
                          <h4 className="tw-font-medium tw-text-green-800 tw-mb-2">
                            Design Inclusivo
                          </h4>
                          <p className="tw-text-sm tw-text-green-600">
                            Princípios de design universal, padrões de interface
                            acessível, tipografia inclusiva e contraste.
                            Experiências de usuário para diferentes
                            necessidades.
                          </p>
                        </div>
                        <div className="tw-bg-purple-50 tw-p-4 tw-rounded-lg">
                          <h4 className="tw-font-medium tw-text-purple-800 tw-mb-2">
                            Tecnologias Assistivas
                          </h4>
                          <p className="tw-text-sm tw-text-purple-600">
                            Leitores de tela, navegação por teclado, software de
                            reconhecimento de voz e outras tecnologias que
                            auxiliam pessoas com deficiência.
                          </p>
                        </div>
                        <div className="tw-bg-orange-50 tw-p-4 tw-rounded-lg">
                          <h4 className="tw-font-medium tw-text-orange-800 tw-mb-2">
                            WCAG 3.0
                          </h4>
                          <p className="tw-text-sm tw-text-orange-600">
                            Novidades e mudanças nas diretrizes de
                            acessibilidade, implementação prática e impacto no
                            desenvolvimento web.
                          </p>
                        </div>
                        <div className="tw-bg-cyan-50 tw-p-4 tw-rounded-lg">
                          <h4 className="tw-font-medium tw-text-cyan-800 tw-mb-2">
                            IA e Acessibilidade
                          </h4>
                          <p className="tw-text-sm tw-text-cyan-600">
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
                  className="tw-text-sm tw-text-white tw-underline hover:tw-text-white hover:tw-no-underline"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div className="tw-bg-gradient-to-r tw-from-orange-400 tw-to-orange-500 tw-p-8 md:tw-w-1/3 tw-flex tw-flex-col tw-justify-center tw-items-center">
              <h3 className="tw-text-white tw-text-xl tw-font-bold tw-mb-4 tw-text-center">
                Envie sua proposta
              </h3>
              <p className="tw-text-white tw-text-center tw-mb-6">
                Seja parte do movimento por uma web mais acessível!
              </p>
              <button className="tw-bg-white tw-text-orange-600 tw-px-6 tw-py-3 tw-rounded-button tw-font-medium hover:tw-bg-opacity-90 tw-transition tw-shadow-lg tw-whitespace-nowrap">
                Submeter Proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
