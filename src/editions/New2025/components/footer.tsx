export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="font-['Pacifico'] text-2xl mr-2">logo</span>
              <span className="text-sm">Accessibility Play</span>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Promovendo a acessibilidade digital e inclusão tecnológica desde
              2023.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Evento</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:underline">
                    Programação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Palestrantes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inscrição
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Recursos</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:underline">
                    Cartilha
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://readdy.ai/home/6247e6cc-3bcf-4203-b13b-c1e4ad3619b6/51dd15ea-89c4-496e-a998-818f308b9f63"
                    data-readdy="true"
                    className="hover:underline"
                  >
                    Vídeos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ferramentas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Contato</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a
                    href="https://readdy.ai/home/6247e6cc-3bcf-4203-b13b-c1e4ad3619b6/4ade1a67-cb0f-431a-82da-fa7a4704dfe7"
                    data-readdy="true"
                    className="hover:underline"
                  >
                    Fale Conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Imprensa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Patrocínio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80 mb-4 md:mb-0">
            © 2025 Accessibility Play. Todos os direitos reservados.
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
            >
              <i className="ri-facebook-fill text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
            >
              <i className="ri-twitter-x-fill text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
            >
              <i className="ri-instagram-fill text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
            >
              <i className="ri-linkedin-fill text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
            >
              <i className="ri-youtube-fill text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
