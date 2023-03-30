import React from "react"

import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"

import { ReactComponent as DestinyIcon } from "../images/icons/destiny.svg"

const Header = () => {
  const theme = useTheme()
  return (
    <Box
      id="header"
      alignItems="center"
      display="flex"
      justifyContent="center"
      pt={2}
      pb={4}
      width="100%"
    >
      <Box
        component={DestinyIcon}
        fill={theme.palette.text.primary}
        mr={1}
        sx={{ height: "14px", width: "14px" }}
      />
      <Typography
        fontSize=".875rem"
        fontWeight="700"
        textAlign="center"
        textTransform="uppercase"
      >
        D2 Match Reports
      </Typography>
    </Box>
  )
}

export default Header
