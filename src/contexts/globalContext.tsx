import { createContext, useState } from 'react'

export const GlobalContext = createContext({
  isSticky: false,
  setIsSticky: (_: boolean) => {},
  headerOffsetHeight: 0,
  setHeaderOffsetHeight: (_: number) => {},
  isModalOpen: false,
  setModalOpen: (_: boolean) => {},
})

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export default function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{ isSticky, setIsSticky, headerOffsetHeight, setHeaderOffsetHeight, isModalOpen, setModalOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}
