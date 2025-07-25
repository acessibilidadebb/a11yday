import CallPapers from './components/callPapers'
import FAQ from './components/FAQ'
import Footer from './components/footer'
import Header from './components/header'
import Primer from './components/primer'
import Schedule from './components/schedule'
import Speakers from './components/speakers'
import './style.scss'

export default function HomeNew2025() {
  return (
    <div className={'home-new-2025 leading-normal'}>
      <div>
        <Header />
        {/* Call4papers Section */}
        <CallPapers />

        {/* Programação Section */}
        <Schedule />

        {/* Palestrantes Section */}
        <Speakers />

        {/* FAQ */}
        <FAQ />

        {/* Cartilha  */}
        <Primer />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
