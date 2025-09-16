import { useEffect, useState } from 'react'
import './App.scss'

import Header from './sections/header'
import Home from './pages/home'
import Footer from './sections/footer'
import Handbook from './pages/handbook'
import GlobalContextProvider from '../../contexts/GlobalContextProvider'
import LinkNav from './components/linkNav'
import Manual from './pages/manual'

export default function App2025() {
  const [showSections, setShowSections] = useState(true)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showExperiences, setShowExperiences] = useState(false)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [showFrequentlyAsked, setShowFrequentlyAsked] = useState(true)
  const [showHandbook, setShowHandbook] = useState(false)
  const [showManual, setShowManual] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const resetSections = () => {
    setShowSections(true)
    setShowExperiences(false)
    setShowSchedule(false)
    setShowSpeakers(false)
    setShowFrequentlyAsked(false)
    setShowHandbook(false)
    setShowManual(false)
  }

  useEffect(() => {
    if (location.pathname === '/accessible-attitudes-handbook') {
      setShowHandbook(true)
    }
  }, [location.pathname, setShowHandbook])

  useEffect(() => {
    if (location.pathname === '/inclusion-manual') {
      setShowManual(true)
    }
  }, [location.pathname, setShowManual])

  const handleGoBack = () => {
    resetSections()
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
      {(showExperiences || showSchedule || showHandbook || showManual) && (
        <LinkNav
          href="/"
          link={true}
          title="Voltar"
          onClick={handleGoBack}
          icon="back"
        />
      )}
      {!showHandbook && !showManual ? (
        <Home
          showSections={showSections}
          setShowSections={setShowSections}
          showSchedule={showSchedule}
          setShowSchedule={setShowSchedule}
          showExperiences={showExperiences}
          setShowExperiences={setShowExperiences}
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
        <Handbook />
      ) : (
        <Manual />
      )}
      <Footer />
    </GlobalContextProvider>
  )
}
