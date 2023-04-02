import React, { useContext } from "react"

import { Box, Drawer, useMediaQuery } from "@mui/material"

import Header from "./Header.component"
import Search from "./search/Search.component"
import { AppContext } from "../contexts/AppContext"

import titanImage from "../images/joseph-biwald-d2-guardian-art-titan.jpg"

const AppDrawer = ({ drawerWidth }) => {
  const isMedium = useMediaQuery("(min-width:900px)")
  const { drawerOpen, closeDrawer } = useContext(AppContext)
  
  return (
    <Drawer
      anchor="left"
      elevation={0}
      open={drawerOpen}
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
          boxShadow: "5px 0px 5px 0px rgba(0,0,0,0.25)",
          boxSizing: "border-box",
          maxWidth: "415px",
          minWidth: "270px",
          width: drawerWidth,
        },
      }}
    >
      <Box bgcolor="rgba(18, 18, 18, .95)" height="100%" width="100%">
        <Header drawer={true} />
        <Search />
      </Box>
    </Drawer>
  )
}
 
export default AppDrawer
