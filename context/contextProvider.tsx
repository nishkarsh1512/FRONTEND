import React, { createContext, ReactNode, useContext, useState } from "react"

interface AppContextInterface {
  drawerActive: boolean
  setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>
  loginModalActive: boolean
  setLoginModalActive: React.Dispatch<React.SetStateAction<boolean>>
  logoutModalActive: boolean
  setLogoutModalActive: React.Dispatch<React.SetStateAction<boolean>>
  sidebarToggleCollapse: boolean
  setSidebarToggleCollapse: React.Dispatch<React.SetStateAction<boolean>>
  optionsDrawerActive: boolean
  setOptionsDrawerActive: React.Dispatch<React.SetStateAction<boolean>>
  isScreenLoading: boolean
  setIsScreenLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppStateContext = createContext<AppContextInterface | null>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [drawerActive, setDrawerActive] = useState(false)
  const [loginModalActive, setLoginModalActive] = useState(false)
  const [logoutModalActive, setLogoutModalActive] = useState(false)
  const [sidebarToggleCollapse, setSidebarToggleCollapse] = useState(true)
  const [optionsDrawerActive, setOptionsDrawerActive] = useState(false)
  const [isScreenLoading, setIsScreenLoading] = useState(false)

  return (
    <AppStateContext.Provider
      value={{
        drawerActive,
        setDrawerActive,
        optionsDrawerActive,
        setOptionsDrawerActive,
        loginModalActive,
        setLoginModalActive,
        sidebarToggleCollapse,
        setSidebarToggleCollapse,
        logoutModalActive,
        setLogoutModalActive,
        isScreenLoading,
        setIsScreenLoading,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext
export const useAppStateContext = () => useContext(AppStateContext)
