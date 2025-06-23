export default function Schedule() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Programação</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="space-y-4">
            {/* Timeline Item */}
            <div
              className="timeline-item flex items-start p-3 rounded-lg transition-all cursor-pointer"
              data-schedule-item={1}
            >
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">09:00</span>
              </div>
              <div className="flex-grow bg-blue-100 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mr-3">
                    <i className="ri-user-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Abertura do Evento</h3>
                    <p className="text-sm text-gray-600">
                      Boas-vindas e apresentação
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="scheduleModal"
              className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50"
            >
              <div className="bg-white rounded-lg w-full max-w-2xl mx-4 relative">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3
                      className="text-xl font-bold text-gray-800"
                      id="scheduleModalTitle"
                    />
                    <button
                      id="closeScheduleModal"
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                    >
                      <i className="ri-close-line text-xl" />
                    </button>
                  </div>
                  <div id="scheduleModalContent" className="space-y-4" />
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="timeline-item flex items-start p-3 rounded-lg transition-all">
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">10:00</span>
              </div>
              <div className="flex-grow bg-blue-100 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mr-3">
                    <i className="ri-user-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Palestra Principal</h3>
                    <p className="text-sm text-gray-600">
                      Tendências em Acessibilidade Digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="timeline-item flex items-start p-3 rounded-lg transition-all">
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">11:00</span>
              </div>
              <div className="flex-grow bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full mr-3">
                    <i className="ri-group-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mesa Redonda: WCAG 3.0</h3>
                    <p className="text-sm text-gray-600">
                      Discussão sobre as novas diretrizes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="timeline-item flex items-start p-3 rounded-lg transition-all">
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">12:00</span>
              </div>
              <div className="flex-grow bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full mr-3">
                    <i className="ri-restaurant-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Almoço Networking</h3>
                    <p className="text-sm text-gray-600">
                      Intervalo para refeição e networking
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="timeline-item flex items-start p-3 rounded-lg transition-all">
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">13:30</span>
              </div>
              <div className="flex-grow bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full mr-3">
                    <i className="ri-code-s-slash-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Workshop: Testes de Acessibilidade
                    </h3>
                    <p className="text-sm text-gray-600">
                      Práticas para testar acessibilidade em websites
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="timeline-item flex items-start p-3 rounded-lg transition-all">
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">15:00</span>
              </div>
              <div className="flex-grow bg-blue-100 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mr-3">
                    <i className="ri-user-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Palestra: IA e Acessibilidade
                    </h3>
                    <p className="text-sm text-gray-600">
                      Como a IA está transformando a acessibilidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="timeline-item flex items-start p-3 rounded-lg transition-all">
              <div className="w-20 flex-shrink-0">
                <span className="text-gray-700 font-medium">16:30</span>
              </div>
              <div className="flex-grow bg-blue-100 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mr-3">
                    <i className="ri-user-line text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Painel: Inclusão Digital</h3>
                    <p className="text-sm text-gray-600">
                      Experiências e desafios na inclusão digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
