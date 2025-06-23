export default function Header() {
  return (
    <header className="relative gradient-bg text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="font-['Pacifico'] text-2xl text-primary">
                logo
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-primary">
                Início
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                Programação
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                Palestrantes
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                Contato
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                FAQ
              </a>
              <button className="bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-opacity-90 transition whitespace-nowrap">
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 mt-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-['Pacifico'] text-2xl">logo</span>
            <div className="flex items-center space-x-1 text-xs">
              <span className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
                <i className="ri-eye-line text-white" />
              </span>
              <span className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
                <i className="ri-volume-up-line text-white" />
              </span>
              <span className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
                <i className="ri-contrast-2-line text-white" />
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="hover:underline">
              Início
            </a>
            <a href="#" className="hover:underline">
              Programação
            </a>
            <a href="#" className="hover:underline">
              Palestrantes
            </a>
            <a href="#" className="hover:underline">
              Contato
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-300 text-blue-900 rounded-full">
            <i className="ri-sun-line" />
          </div>
        </div>
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acessibilidade Digital: A gente se importa!
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              O Sistema de Acessibilidade Digital do Banco do Brasil.
            </p>
            <p className="text-sm mb-8 bg-white bg-opacity-20 inline-block px-3 py-1 rounded-full">
              Programado para 2025
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition whitespace-nowrap">
                Inscreva-se
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-button font-medium hover:bg-white hover:bg-opacity-10 transition whitespace-nowrap">
                Saiba mais sobre o evento
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 flex justify-center items-center h-full">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20vector%20illustration%20of%20digital%20accessibility%20concept%2C%20floating%20geometric%20shapes%2C%20abstract%20hands%20and%20devices%2C%20minimalist%20design%20with%20gradient%20colors%20matching%20background%2C%20clean%20and%20simple%20style&width=500&height=300&seq=124&orientation=landscape"
                alt="Acessibilidade Digital"
                className="max-w-[90%] h-auto"
              />
            </div>
            <div className="absolute -top-4 right-10 w-16 h-16 accessibility-icon">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-300 bg-opacity-90 rounded-full shadow-md">
                <i className="ri-braille-line text-blue-900 text-lg" />
              </div>
            </div>
            <div
              className="absolute -bottom-2 left-10 w-16 h-16 accessibility-icon"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-pink-300 bg-opacity-90 rounded-full shadow-md">
                <i className="ri-sign-language-line text-blue-900 text-lg" />
              </div>
            </div>
            <div
              className="absolute top-1/2 left-0 w-16 h-16 accessibility-icon"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-300 bg-opacity-90 rounded-full shadow-md">
                <i className="ri-ear-line text-blue-900 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating accessibility icons */}
      <div
        className="absolute top-20 right-10 w-16 h-16 accessibility-icon"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-10 h-10 flex items-center justify-center bg-green-300 rounded-full shadow-lg">
          <i className="ri-wheelchair-line text-blue-900 text-xl" />
        </div>
      </div>
      <div
        className="absolute bottom-40 right-20 w-16 h-16 accessibility-icon"
        style={{ animationDelay: '2s' }}
      >
        <div className="w-10 h-10 flex items-center justify-center bg-purple-300 rounded-full shadow-lg">
          <i className="ri-eye-line text-blue-900 text-xl" />
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
