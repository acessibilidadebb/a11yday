import { createContext, useState } from 'react'

export const StickyContext = createContext({
  isSticky: false,
  setIsSticky: (_: boolean) => {},
  headerOffsetHeight: 0,
  setHeaderOffsetHeight: (_: number) => {},
  isModalOpen: false,
  setIsModalOpen: (_: boolean) => {},
})

interface StickyContextProviderProps {
  children: React.ReactNode;
}

export default function StickyContextProvider({ children }: StickyContextProviderProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <StickyContext.Provider value={{ isSticky, setIsSticky, headerOffsetHeight, setHeaderOffsetHeight, isModalOpen, setIsModalOpen }}>
      {children}
    </StickyContext.Provider>
  )
}
