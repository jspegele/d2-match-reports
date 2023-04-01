import React from "react"

import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"

import Header from "./Header.component"
import AppDrawer from "./AppDrawer.component"

import CrucibleBg from "../images/bg-crucible.png"

const Layout = () => {
  const isMedium = useMediaQuery("(min-width:900px)")
  const isLarge = useMediaQuery("(min-width:1200px)")

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
            backgroundImage: `url("${CrucibleBg}")`,
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
