// AppContext.tsx
import { createContext } from "react"

export const AppContext = createContext<any>({
  myBoolean: false,
  setMyBoolean: () => {},
})

export const AppProvider = AppContext.Provider
