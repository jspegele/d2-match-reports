import React, { useState, createContext } from "react"

export const AppContext = createContext()

const initialState = {
  drawerOpen: false,
  mode: 5, // PvP=5, PvE=7, Gambit=63
}

export const AppProvider = (props) => {
  const [appState, setAppState] = useState(initialState)

  const openDrawer = () =>
    setAppState((prevState) => ({ ...prevState, drawerOpen: true }))

  const closeDrawer = () =>
    setAppState((prevState) => ({ ...prevState, drawerOpen: false }))

  const setMode = (mode) => setAppState(prevState => ({ ...prevState, mode }))

  return (
    <AppContext.Provider
      value={{
        appState,
        drawerOpen: appState.drawerOpen,
        mode: appState.mode,
        openDrawer,
        closeDrawer,
        setMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
