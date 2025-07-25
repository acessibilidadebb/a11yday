import { useState } from 'react'
import { GlobalContext } from './globalContext'

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export default function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [isPin, setIsPin] = useState(false)
  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  
  const togglePin = (newPin: boolean) => {
    if(!newPin) {
      setTimeout(() => {
        setIsPin(newPin)
      }, 550)
    } else {
      setIsPin(newPin)
    }
  }
  
  return (
    <GlobalContext.Provider value={{ isPin, togglePin, headerOffsetHeight, setHeaderOffsetHeight, isModalOpen, setModalOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}
