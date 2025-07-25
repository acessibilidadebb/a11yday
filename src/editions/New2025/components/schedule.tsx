const scheduleItems = [
  {
    time: '09:00',
    bg: 'tw-bg-blue-100',
    iconBg: 'tw-bg-blue-500',
    icon: 'ri-user-line',
    title: 'Abertura do Evento',
    description: 'Boas-vindas e apresentação',
  },
  {
    time: '10:00',
    bg: 'tw-bg-blue-100',
    iconBg: 'tw-bg-blue-500',
    icon: 'ri-user-line',
    title: 'Palestra Principal',
    description: 'Tendências em Acessibilidade Digital',
  },
  {
    time: '11:00',
    bg: 'tw-bg-white tw-border tw-border-gray-200',
    iconBg: 'tw-bg-green-500',
    icon: 'ri-group-line',
    title: 'Mesa Redonda: WCAG 3.0',
    description: 'Discussão sobre as novas diretrizes',
  },
  {
    time: '12:00',
    bg: 'tw-bg-white tw-border tw-border-gray-200',
    iconBg: 'tw-bg-orange-500',
    icon: 'ri-restaurant-line',
    title: 'Almoço Networking',
    description: 'Intervalo para refeição e networking',
  },
  {
    time: '13:30',
    bg: 'tw-bg-white tw-border tw-border-gray-200',
    iconBg: 'tw-bg-purple-500',
    icon: 'ri-code-s-slash-line',
    title: 'Workshop: Testes de Acessibilidade',
    description: 'Práticas para testar acessibilidade em websites',
  },
  {
    time: '15:00',
    bg: 'tw-bg-blue-100',
    iconBg: 'tw-bg-blue-500',
    icon: 'ri-user-line',
    title: 'Palestra: IA e Acessibilidade',
    description: 'Como a IA está transformando a acessibilidade',
  },
  {
    time: '16:30',
    bg: 'tw-bg-blue-100',
    iconBg: 'tw-bg-blue-500',
    icon: 'ri-user-line',
    title: 'Painel: Inclusão Digital',
    description: 'Experiências e desafios na inclusão digital',
  },
]

export default function Schedule() {
  return (
    <section className="tw-py-8 tw-px-4">
      <div className="tw-container tw-mx-auto">
        <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-6">Programação</h2>
        <div className="tw-bg-gray-50 tw-rounded-lg tw-p-6">
          <div className="tw-space-y-4">
            {scheduleItems.map((item, idx) => (
              <div
                key={idx}
                className={'timeline-item tw-flex tw-items-start tw-p-3 tw-rounded-lg tw-transition-all'}
              >
                <div className="tw-w-20 tw-flex-shrink-0">
                  <span className="tw-text-gray-700 tw-font-medium">{item.time}</span>
                </div>
                <div className={`tw-flex-grow tw-rounded-lg tw-p-3 ${item.bg}`}>
                  <div className="tw-flex tw-items-center">
                    <div
                      className={`tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center ${item.iconBg} tw-rounded-full tw-mr-3`}
                    >
                      <i className={`${item.icon} tw-text-white`} />
                    </div>
                    <div>
                      <h3 className="tw-font-medium">{item.title}</h3>
                      <p className="tw-text-sm tw-text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
