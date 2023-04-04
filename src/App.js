import React, { useContext, useEffect, useState } from 'react'
import { getDatabase, ref, get } from "firebase/database"

import { AppContext } from "./contexts/AppContext"

import AppRouter from "./app/AppRouter"

import LoadingPage from "./features/LoadingPage.component"

const App = () => {
  const database = getDatabase()
  const { setManifest } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    get(ref(database, "contentPaths"))
      .then((snap) => {
        const manifest = snap.val()
        const manifestObj = {}
        Object.keys(manifest).forEach(key => {
          if (manifest[key]) manifestObj[key] = JSON.parse(manifest[key])
        })
        setManifest(manifestObj)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    loading ? <LoadingPage /> : <AppRouter />
  )
}

export default App
