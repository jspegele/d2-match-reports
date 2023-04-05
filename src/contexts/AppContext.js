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
  
  const selectActivityName = (activityHash) => 
    appState.manifest.DestinyActivityDefinition &&
    appState.manifest.DestinyActivityDefinition[activityHash]
      ? appState.manifest.DestinyActivityDefinition[activityHash].name
      : ""
  
  const selectActivityModeNameByType = (activityModeType) => {
    const definition = appState.manifest.DestinyActivityModeDefinition
    let name = ""
    Object.keys(definition).forEach(key => {
      const mode = definition[key]
      if (mode.modeType === activityModeType) name = mode.name
    })
    return name
  }

  const selectClassName = (classHash) =>
    appState.manifest.DestinyClassDefinition &&
    appState.manifest.DestinyClassDefinition[classHash]
      ? appState.manifest.DestinyClassDefinition[classHash].name
      : ""

  const selectInventoryItem = (itemHash) =>
    appState.manifest.DestinyInventoryItemLiteDefinition &&
    appState.manifest.DestinyInventoryItemLiteDefinition[itemHash]
      ? appState.manifest.DestinyInventoryItemLiteDefinition[itemHash]
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
        selectActivityModeNameByType,
        selectClassName,
        selectInventoryItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
