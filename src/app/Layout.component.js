import React from "react"

import { Box, Drawer, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"

import Header from "./Header.component"
import PlayerSearch from "../features/playerSearch/PlayerSearch.component"

const drawerWidth = "300px"

const Layout = () => {
  const isMedium = useMediaQuery("(min-width:900px)")

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        minWidth="320px"
        paddingLeft={drawerWidth}
        width="100%"
      >
        {!isMedium && <Header />}
        <Box
          id="main-content"
          display="flex"
          flexDirection="column"
          flexGrow="1"
          width="100%"
        >
          <Outlet />
        </Box>
      </Box>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          flexShrink: 0,
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            boxShadow: "2rem 0px 2rem 0px rgba(0,0,0,0.25)",
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {isMedium && <Header />}
        <PlayerSearch />
      </Drawer>
    </>
  )
}

export default Layout
