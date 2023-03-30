import React, { useContext } from "react"

import { Drawer, useMediaQuery } from "@mui/material"

import Header from "./Header.component"
import PlayerSearch from "./playerSearch/PlayerSearch.component"
import { AppContext } from "../contexts/AppContext"

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
          boxShadow: "2rem 0px 2rem 0px rgba(0,0,0,0.25)",
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Header />
      <PlayerSearch />
    </Drawer>
  )
}
 
export default AppDrawer
