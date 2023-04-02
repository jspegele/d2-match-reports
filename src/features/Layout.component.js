import React, { useContext } from "react"

import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"

import { AppContext } from "../contexts/AppContext"

import Header from "./Header.component"
import AppDrawer from "./AppDrawer.component"

import CrucibleBg from "../images/bg-crucible.png"
import GambitBg from "../images/bg-gambit.png"
import VanguardBg from "../images/bg-vanguard.png"

const Layout = () => {
  const isMedium = useMediaQuery("(min-width:900px)")
  const isLarge = useMediaQuery("(min-width:1200px)")
  const { mode } = useContext(AppContext)

  const drawerWidth = isLarge ? "415px" : isMedium ? "35%" : "100%"

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        minWidth="320px"
        paddingLeft={isMedium ? drawerWidth : 0}
        width="100%"
      >
        {!isMedium && <Header />}
        <Box
          id="main-content"
          display="flex"
          flexDirection="column"
          flexGrow="1"
          paddingTop={isMedium ? "2rem" : 0}
          width="100%"
          sx={{
            backgroundImage: `url("${
              mode === 5 ? CrucibleBg : mode === 63 ? GambitBg : VanguardBg
            }")`,
            backgroundPosition: "center 25vh",
            backgroundSize: "50vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <AppDrawer drawerWidth={drawerWidth} />
    </>
  )
}

export default Layout
