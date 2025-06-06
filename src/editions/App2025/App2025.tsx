import { useState } from 'react'
import './App.scss'

import Header from './sections/header'
import Home from './pages/home'
import Footer from './sections/footer'
import Handbook from './pages/handbook'
import GlobalContextProvider from './contexts/globalContext'
import { HashRouter as Router } from 'react-router-dom'

export default function App2025() {
  const [showSections, setShowSections] = useState(true)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [showFrequentlyAsked, setShowFrequentlyAsked] = useState(false)
  const [showHandbook, setShowHandbook] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const resetSections = () => {
    setShowSections(true)
    setShowSchedule(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)
    setShowHandbook(false)
  }
  return (
    <GlobalContextProvider>
      <Router>
        <Header
          setShowSections={setShowSections}
          setShowSchedule={setShowSchedule}
          setShowSpeakers={setShowSpeakers}
          setShowFrequentlyAsked={setShowFrequentlyAsked}
          setShowHandbook={setShowHandbook}
          setShowGallery={setShowGallery}
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
            showGallery={showGallery}
            setShowGallery={setShowGallery}
          />
        ) : (
          <Handbook resetSections={resetSections} />
        )}
        <Footer />
      </Router>
    </GlobalContextProvider>
  )
}
