import React, { useContext } from "react"

import { Box, Tab, Tabs } from "@mui/material"

import { AppContext } from "../../contexts/AppContext"

const ModeTabs = () => {
  const { mode, setMode } = useContext(AppContext)

  const handleChange = (event, newValue) => setMode(newValue)

  return (
    <Box
      mb={4}
      width="100%"
      sx={{ borderBottom: "1px solid", borderColor: "text.secondary" }}
    >
      <Tabs centered onChange={handleChange} value={mode} variant="fullWidth">
        <Tab label="PvP" value={5} />
        <Tab label="PvE" value={7}/>
        <Tab label="Gambit" value={63} />
      </Tabs>
    </Box>
  )
}

export default ModeTabs
