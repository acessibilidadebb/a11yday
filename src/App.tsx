import './App.scss'
import Footer from './sections/footer'
import FrequentlyAsked from './sections/frequently-asked'
import Header from './sections/header'
import Overview from './sections/overview'
import Schedule from './sections/schedule'
import Sections from './sections/sections'
import Speakers from './sections/speakers'
import Watch from './sections/watch'

function App() {
  return (
    <>
      <Header />
      <Overview />
      <Watch />
      <Sections />
      <Schedule />

      {/* <Speakers /> */}
      <FrequentlyAsked />
      <Footer />
    </>
  )
}

export default App
