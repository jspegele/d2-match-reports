import React from "react"

import { Box, Typography } from "@mui/material"

const StatsContainer = () => {
  return (
    <Box pb={6}>
      <Typography
        fontSize=".875rem"
        pb={2}
        textAlign="center"
        textTransform="uppercase"
      >
        Account Stats
      </Typography>
    </Box>
  )
}

export default StatsContainer
