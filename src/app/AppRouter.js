import React from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "../app/Layout.component"
import PlayerSearchPage from "../features/playerSearch/PlayerSearchPage.component"
import PlayerHistoryPage from "../features/playerHistory/PlayerHistoryPage.component"
import ManifestPage from "../features/manifest/ManifestPage.component"

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PlayerSearchPage />} />
        <Route path="/:membershipType/:membershipId" element={<PlayerHistoryPage />} />
        <Route path="/manifest" element={<ManifestPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
