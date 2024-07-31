import { useState } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import GlobalContextProvider from './contexts/globalContext'
import './App.scss'

import Header from './sections/header'
import Home from './pages/home'
import Footer from './sections/footer'

export default function App() {
  const [showSections, setShowSections] = useState(true)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [showFrequentlyAsked, setShowFrequentlyAsked] = useState(false)
  return (
    <GlobalContextProvider>
      <Router>
        <Header
          setShowSections={setShowSections}
          setShowSchedule={setShowSchedule}
          setShowSpeakers={setShowSpeakers}
          setShowFrequentlyAsked={setShowFrequentlyAsked}
        />
        <Home
          showSections={showSections}
          setShowSections={setShowSections}
          showSchedule={showSchedule}
          setShowSchedule={setShowSchedule}
          showSpeakers={showSpeakers}
          setShowSpeakers={setShowSpeakers}
          showFrequentlyAsked={showFrequentlyAsked}
          setShowFrequentlyAsked={setShowFrequentlyAsked}
        />
        <Footer />
      </Router>
    </GlobalContextProvider>
  )
}
