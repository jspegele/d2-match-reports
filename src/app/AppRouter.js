import React from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "../features/Layout.component"
import HomePage from "../features/HomePage.component"
import GuardianPage from "../features/guardianPage/GuardianPage.component"
import ManifestPage from "../features/manifest/ManifestPage.component"

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:membershipType/:membershipId" element={<GuardianPage />} />
        <Route path="/manifest" element={<ManifestPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
