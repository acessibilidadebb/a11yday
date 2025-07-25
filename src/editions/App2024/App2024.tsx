import { useState } from 'react'
import '../../scss/_reset.scss'
import './App.scss'

import Header from './sections/header'
import Home from './pages/home'
import Footer from './sections/footer'
import Handbook from './pages/handbook'
import GlobalContextProvider from '../../contexts/GlobalContextProvider'

export default function App2024() {
  const [showSections, setShowSections] = useState(true)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [showFrequentlyAsked, setShowFrequentlyAsked] = useState(false)
  const [showHandbook, setShowHandbook] = useState(false)
  const resetSections = () => {
    setShowSections(true)
    setShowSchedule(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)
    setShowHandbook(false)
  }
  return (
    <GlobalContextProvider>
      <Header
        setShowSections={setShowSections}
        setShowSchedule={setShowSchedule}
        setShowSpeakers={setShowSpeakers}
        setShowFrequentlyAsked={setShowFrequentlyAsked}
        setShowHandbook={setShowHandbook}
      />
      {!showHandbook ? (
        <Home
          showSections={showSections}
          setShowSections={setShowSections}
          showSchedule={showSchedule}
          setShowSchedule={setShowSchedule}
          showSpeakers={showSpeakers}
          setShowSpeakers={setShowSpeakers}
          showFrequentlyAsked={showFrequentlyAsked}
          setShowFrequentlyAsked={setShowFrequentlyAsked}
          showHandbook={showHandbook}
          setShowHandbook={setShowHandbook}
        />
      ) : (
        <Handbook resetSections={resetSections} />
      )}
      <Footer />
    </GlobalContextProvider>
  )
}
