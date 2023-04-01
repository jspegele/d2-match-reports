import React from "react"

import { Box, Tab, Tabs } from "@mui/material"

const ModeTabs = ({ mode, setMode }) => {
  const handleChange = (event, newValue) => setMode(newValue)

  return (
    <Box
      mb={4}
      width="100%"
      sx={{ borderBottom: "1px solid", borderColor: "text.secondary" }}
    >
      <Tabs centered onChange={handleChange} value={mode} variant="fullWidth">
        <Tab label="PvP" value="PvP" />
        <Tab label="PvE" value="PvE" />
      </Tabs>
    </Box>
  )
}

export default ModeTabs
