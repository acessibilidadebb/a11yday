import { useState } from 'react'
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
  const [showSections, setShowSections] = useState(true)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showSpeakers, setShowSpeakers] = useState(false)
  const [showFrequentlyAsked, setShowFrequentlyAsked] = useState(false)
  return (
    <>
      <Header />
      {/* 
      <Overview style={{ display: showSections ? 'flex' : 'none' }} />
      <Watch style={{ display: showSections ? 'flex' : 'none' }} />
      <Sections
        showSections={showSections}
        setShowSections={setShowSections}
        showSchedule={showSchedule}
        setShowSchedule={setShowSchedule}
        showSpeakers={showSpeakers}
        setShowSpeakers={setShowSpeakers}
        showFrequentlyAsked={showFrequentlyAsked}
        setShowFrequentlyAsked={setShowFrequentlyAsked}
      />
      <Schedule
        setShowSections={setShowSections}
        showSchedule={showSchedule}
        setShowSchedule={setShowSchedule}
      />

      <Speakers
        setShowSections={setShowSections}
        showSpeakers={showSpeakers}
        setShowSpeakers={setShowSpeakers}
      />
      */}
      <FrequentlyAsked />
      <Footer />
    </>
  )
}

export default App
