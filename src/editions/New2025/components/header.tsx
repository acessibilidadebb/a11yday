export default function Header() {
  return (
    <header className="tw-relative gradient-bg tw-text-white tw-overflow-hidden">
      <nav className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bg-white tw-shadow-md tw-z-50">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-flex tw-items-center tw-justify-between tw-h-16">
            <div className="tw-flex tw-items-center tw-space-x-2">
              <span className="tw-font-['Pacifico'] tw-text-2xl tw-text-primary">
                logo
              </span>
            </div>
            <div className="tw-hidden md:tw-flex tw-items-center tw-space-x-6 tw-text-sm">
              <a href="#" className="tw-text-gray-700 hover:tw-text-primary">
                Início
              </a>
              <a href="#" className="tw-text-gray-700 hover:tw-text-primary">
                Programação
              </a>
              <a href="#" className="tw-text-gray-700 hover:tw-text-primary">
                Palestrantes
              </a>
              <a href="#" className="tw-text-gray-700 hover:tw-text-primary">
                Contato
              </a>
              <a href="#" className="tw-text-gray-700 hover:tw-text-primary">
                FAQ
              </a>
              <button className="tw-bg-primary tw-text-white tw-px-4 tw-py-2 tw-rounded-button tw-font-medium hover:tw-bg-opacity-90 tw-transition tw-whitespace-nowrap">
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-16 md:tw-py-24 tw-relative tw-z-10 tw-mt-16">
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-items-center tw-space-x-2">
            <span className="tw-font-['Pacifico'] tw-text-2xl">logo</span>
            <div className="tw-flex tw-items-center tw-space-x-1 tw-text-xs">
              <span className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full">
                <i className="ri-eye-line tw-text-white" />
              </span>
              <span className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full">
                <i className="ri-volume-up-line tw-text-white" />
              </span>
              <span className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full">
                <i className="ri-contrast-2-line tw-text-white" />
              </span>
            </div>
          </div>
          <div className="tw-hidden md:tw-flex tw-items-center tw-space-x-6 tw-text-sm">
            <a href="#" className="hover:tw-underline">
              Início
            </a>
            <a href="#" className="hover:tw-underline">
              Programação
            </a>
            <a href="#" className="hover:tw-underline">
              Palestrantes
            </a>
            <a href="#" className="hover:tw-underline">
              Contato
            </a>
            <a href="#" className="hover:tw-underline">
              FAQ
            </a>
          </div>
          <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-yellow-300 tw-text-blue-900 tw-rounded-full">
            <i className="ri-sun-line" />
          </div>
        </div>
        <div className="tw-mt-16 md:tw-mt-20 tw-flex tw-flex-col md:tw-flex-row tw-items-center">
          <div className="md:tw-w-1/2 tw-mb-10 md:tw-mb-0">
            <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6">
              Acessibilidade Digital: A gente se importa!
            </h1>
            <p className="tw-text-lg md:tw-text-xl tw-mb-8 tw-opacity-90">
              O Sistema de Acessibilidade Digital do Banco do Brasil.
            </p>
            <p className="tw-text-sm tw-mb-8 tw-bg-white tw-bg-opacity-20 tw-inline-block tw-px-3 tw-py-1 tw-rounded-full">
              Programado para 2025
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-4">
              <button className="tw-bg-white tw-text-primary tw-px-6 tw-py-3 tw-rounded-button tw-font-medium hover:tw-bg-opacity-90 tw-transition tw-whitespace-nowrap">
                Inscreva-se
              </button>
              <button className="tw-bg-transparent tw-border-2 tw-border-white tw-px-6 tw-py-3 tw-rounded-button tw-font-medium hover:tw-bg-white hover:tw-bg-opacity-10 tw-transition tw-whitespace-nowrap">
                Saiba mais sobre o evento
              </button>
            </div>
          </div>
          <div className="md:tw-w-1/2 tw-relative">
            <div className="tw-relative tw-z-10 tw-flex tw-justify-center tw-items-center tw-h-full">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20vector%20illustration%20of%20digital%20accessibility%20concept%2C%20floating%20geometric%20shapes%2C%20abstract%20hands%20and%20devices%2C%20minimalist%20design%20with%20gradient%20colors%20matching%20background%2C%20clean%20and%20simple%20style&width=500&height=300&seq=124&orientation=landscape"
                alt="Acessibilidade Digital"
                className="tw-max-w-[90%] tw-h-auto"
              />
            </div>
            <div className="tw-absolute -tw-top-4 tw-right-10 tw-w-16 tw-h-16 accessibility-icon">
              <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-yellow-300 tw-bg-opacity-90 tw-rounded-full tw-shadow-md">
                <i className="ri-braille-line tw-text-blue-900 tw-text-lg" />
              </div>
            </div>
            <div
              className="tw-absolute -tw-bottom-2 tw-left-10 tw-w-16 tw-h-16 accessibility-icon"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-pink-300 tw-bg-opacity-90 tw-rounded-full tw-shadow-md">
                <i className="ri-sign-language-line tw-text-blue-900 tw-text-lg" />
              </div>
            </div>
            <div
              className="tw-absolute tw-top-1/2 tw-left-0 tw-w-16 tw-h-16 accessibility-icon"
              style={{ animationDelay: '1s' }}
            >
              <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-blue-300 tw-bg-opacity-90 tw-rounded-full tw-shadow-md">
                <i className="ri-ear-line tw-text-blue-900 tw-text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating accessibility icons */}
      <div
        className="tw-absolute tw-top-20 tw-right-10 tw-w-16 tw-h-16 accessibility-icon"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-green-300 tw-rounded-full tw-shadow-lg">
          <i className="ri-wheelchair-line tw-text-blue-900 tw-text-xl" />
        </div>
      </div>
      <div
        className="tw-absolute tw-bottom-40 tw-right-20 tw-w-16 tw-h-16 accessibility-icon"
        style={{ animationDelay: '2s' }}
      >
        <div className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-bg-purple-300 tw-rounded-full tw-shadow-lg">
          <i className="ri-eye-line tw-text-blue-900 tw-text-xl" />
        </div>
      </div>
      {/* Wave shape divider */}
      <div className="wave-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </header>
  )
}
