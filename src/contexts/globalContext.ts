import { createContext } from 'react'

export const GlobalContext = createContext({
  isPin: false,
  togglePin: (_: boolean) => {},
  headerOffsetHeight: 0,
  setHeaderOffsetHeight: (_: number) => {},
  isModalOpen: false,
  setModalOpen: (_: boolean) => {},
})
