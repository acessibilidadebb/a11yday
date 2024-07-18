import { createContext, useState } from 'react'

export const StickyContext = createContext({
  isSticky: false,
  setIsSticky: (_: boolean) => {},
  headerOffsetHeight: 0,
  setHeaderOffsetHeight: (_: number) => {},
})

interface StickyContextProviderProps {
  children: React.ReactNode;
}

export default function StickyContextProvider({ children }: StickyContextProviderProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0)
  return (
    <StickyContext.Provider value={{ isSticky, setIsSticky, headerOffsetHeight, setHeaderOffsetHeight }}>
      {children}
    </StickyContext.Provider>
  )
}
