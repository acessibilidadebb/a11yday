import { useState } from 'react'
import './App.scss'

import Header from './sections/header'
import Home from './pages/home'
import Footer from './sections/footer'
import Handbook from './pages/handbook'
import GlobalContextProvider from '../../contexts/GlobalContextProvider'
import Manual from './pages/manual'

export default function App2025() {
  const [showSections, setShowSections] = useState(true)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showExperiences, setShowExperiences] = useState(false)
  const [showFair, setShowFair] = useState(false)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [showFrequentlyAsked, setShowFrequentlyAsked] = useState(false)
  const [showHandbook, setShowHandbook] = useState(false)
  const [showManual, setShowManual] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const resetSections = () => {
    setShowSections(true)
    setShowSchedule(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)
    setShowHandbook(false)
    setShowManual(false)
  }
  return (
    <GlobalContextProvider>
      <Header
        setShowSections={setShowSections}
        setShowSchedule={setShowSchedule}
        setShowExperiences={setShowExperiences}
        setShowSpeakers={setShowSpeakers}
        setShowFrequentlyAsked={setShowFrequentlyAsked}
        setShowHandbook={setShowHandbook}
        setShowManual={setShowManual}
        setShowGallery={setShowGallery}
      />
      {!showHandbook && !showManual ? (
        <Home
          showSections={showSections}
          setShowSections={setShowSections}
          showSchedule={showSchedule}
          setShowSchedule={setShowSchedule}
          showExperiences={showExperiences}
          setShowExperiences={setShowExperiences}
          showFair={showFair}
          setShowFair={setShowFair}
          showSpeakers={showSpeakers}
          setShowSpeakers={setShowSpeakers}
          showFrequentlyAsked={showFrequentlyAsked}
          setShowFrequentlyAsked={setShowFrequentlyAsked}
          showHandbook={showHandbook}
          setShowHandbook={setShowHandbook}
          showManual={showManual}
          setShowManual={setShowManual}
          showGallery={showGallery}
          setShowGallery={setShowGallery}
        />
      ) : showHandbook ? (
        <Handbook resetSections={resetSections} />
      ) : (
        showManual && <Manual resetSections={resetSections} />
      )}
      <Footer />
    </GlobalContextProvider>
  )
}
