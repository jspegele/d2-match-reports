import React from "react"

import { Box, CircularProgress, Typography } from "@mui/material"

const LoadingPage = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100vh"
    >
      <CircularProgress size={60} />
      <Typography fontSize=".875rem" mt={1}>Loading Manifest</Typography>
    </Box>
  )
}

export default LoadingPage
