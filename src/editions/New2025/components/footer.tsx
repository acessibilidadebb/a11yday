export default function Footer() {
  return (
    <footer className="gradient-bg tw-text-white tw-py-10">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mb-8">
          <div className="tw-mb-6 md:tw-mb-0">
            <div className="tw-flex tw-items-center tw-mb-4">
              <span className="tw-font-['Pacifico'] tw-text-2xl tw-mr-2">logo</span>
              <span className="tw-text-sm">Accessibility Play</span>
            </div>
            <p className="tw-text-sm tw-opacity-80 tw-max-w-xs">
              Promovendo a acessibilidade digital e inclusão tecnológica desde
              2023.
            </p>
          </div>
          <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8">
            <div>
              <h3 className="tw-font-medium tw-mb-3">Evento</h3>
              <ul className="tw-space-y-2 tw-text-sm tw-opacity-80">
                <li>
                  <a href="#" className="hover:tw-underline">
                    Programação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Palestrantes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Inscrição
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="tw-font-medium tw-mb-3">Recursos</h3>
              <ul className="tw-space-y-2 tw-text-sm tw-opacity-80">
                <li>
                  <a href="#" className="hover:tw-underline">
                    Cartilha
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://readdy.ai/home/6247e6cc-3bcf-4203-b13b-c1e4ad3619b6/51dd15ea-89c4-496e-a998-818f308b9f63"
                    data-readdy="true"
                    className="hover:tw-underline"
                  >
                    Vídeos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Ferramentas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="tw-font-medium tw-mb-3">Contato</h3>
              <ul className="tw-space-y-2 tw-text-sm tw-opacity-80">
                <li>
                  <a
                    href="https://readdy.ai/home/6247e6cc-3bcf-4203-b13b-c1e4ad3619b6/4ade1a67-cb0f-431a-82da-fa7a4704dfe7"
                    data-readdy="true"
                    className="hover:tw-underline"
                  >
                    Fale Conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Imprensa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    Patrocínio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:tw-underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tw-pt-8 tw-border-t tw-border-white tw-border-opacity-20 tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center">
          <div className="tw-text-sm tw-opacity-80 tw-mb-4 md:tw-mb-0">
            © 2025 Accessibility Play. Todos os direitos reservados.
          </div>
          <div className="tw-flex tw-space-x-4">
            <a
              href="#"
              className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full hover:tw-bg-opacity-30 tw-transition"
            >
              <i className="ri-facebook-fill tw-text-white" />
            </a>
            <a
              href="#"
              className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full hover:tw-bg-opacity-30 tw-transition"
            >
              <i className="ri-twitter-x-fill tw-text-white" />
            </a>
            <a
              href="#"
              className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full hover:tw-bg-opacity-30 tw-transition"
            >
              <i className="ri-instagram-fill tw-text-white" />
            </a>
            <a
              href="#"
              className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full hover:tw-bg-opacity-30 tw-transition"
            >
              <i className="ri-linkedin-fill tw-text-white" />
            </a>
            <a
              href="#"
              className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-20 tw-rounded-full hover:tw-bg-opacity-30 tw-transition"
            >
              <i className="ri-youtube-fill tw-text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
