import React, { useContext } from "react"

import { Box, Drawer, useMediaQuery } from "@mui/material"

import Header from "./Header.component"
import PlayerSearch from "./playerSearch/PlayerSearch.component"
import { AppContext } from "../contexts/AppContext"

import titanImage from "../images/joseph-biwald-d2-guardian-art-titan.jpg"

const AppDrawer = ({ drawerWidth }) => {
  const isMedium = useMediaQuery("(min-width:900px)")
  const { closeDrawer, selectDrawerState } = useContext(AppContext)
  
  return (
    <Drawer
      anchor="left"
      elevation={0}
      open={selectDrawerState()}
      onClose={closeDrawer}
      variant={isMedium ? "permanent" : "temporary"}
      sx={{
        flexShrink: 0,
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          background: `url("${titanImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "none",
          boxShadow: "2rem 0px 2rem 0px rgba(0,0,0,0.25)",
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box bgcolor="rgba(18, 18, 18, .95)" height="100%" width="100%">
        <Header />
        <PlayerSearch />
      </Box>
    </Drawer>
  )
}
 
export default AppDrawer
