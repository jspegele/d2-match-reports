import React, { useState, createContext } from "react"

export const AppContext = createContext()

const initialState = {
  drawerOpen: false,
}

export const AppProvider = (props) => {
  const [appState, setAppState] = useState(initialState)

  const openDrawer = () =>
    setAppState((prevState) => ({ ...prevState, drawerOpen: true }))

  const closeDrawer = () =>
    setAppState((prevState) => ({ ...prevState, drawerOpen: false }))

  const selectDrawerState = () => appState.drawerOpen

  return (
    <AppContext.Provider
      value={{
        appState,
        openDrawer,
        closeDrawer,
        selectDrawerState,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
