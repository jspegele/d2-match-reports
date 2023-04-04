import React, { useState, createContext } from "react"

export const AppContext = createContext()

const initialState = {
  drawerOpen: true,
  manifest: {},
  mode: 5, // PvP=5, PvE=7, Gambit=63
}

export const AppProvider = (props) => {
  const [appState, setAppState] = useState(initialState)

  const openDrawer = () =>
    setAppState((prevState) => ({ ...prevState, drawerOpen: true }))

  const closeDrawer = () =>
    setAppState((prevState) => ({ ...prevState, drawerOpen: false }))

  const setManifest = (manifest) =>
    setAppState((prevState) => ({ ...prevState, manifest }))

  const setMode = (mode) => setAppState((prevState) => ({ ...prevState, mode }))
  
  const selectActivityName = (refId) => 
    appState.manifest.DestinyActivityDefinition &&
    appState.manifest.DestinyActivityDefinition[refId]
      ? appState.manifest.DestinyActivityDefinition[refId].name
      : ""

  const selectInventoryItem = (refId) =>
    appState.manifest.DestinyInventoryItemLiteDefinition &&
    appState.manifest.DestinyInventoryItemLiteDefinition[refId]
      ? appState.manifest.DestinyInventoryItemLiteDefinition[refId]
      : { name: "", icon: null }

  return (
    <AppContext.Provider
      value={{
        appState,
        drawerOpen: appState.drawerOpen,
        manifest: appState.manifest,
        mode: appState.mode,
        openDrawer,
        closeDrawer,
        setManifest,
        setMode,
        selectActivityName,
        selectInventoryItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
