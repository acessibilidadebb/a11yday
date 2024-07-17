import './App.scss'
import Footer from './components/footer'
import FrequentlyAsked from './components/frequently-asked'
import Header from './components/header'
import Overview from './components/overview'
import Schedule from './components/schedule'
import Sections from './components/sections'
import Speakers from './components/speakers'
import Watch from './components/watch'

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
