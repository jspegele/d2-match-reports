import React, { useContext } from "react"

import { useTheme } from "@emotion/react"
import { Box, IconButton, Typography } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import { AppContext } from "../contexts/AppContext"

import { ReactComponent as DestinyIcon } from "../images/icons/destiny.svg"

const Header = () => {
  const theme = useTheme()
  const { openDrawer } = useContext(AppContext)

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
      <Box left="0" position="absolute" p={1} top="0">
        <IconButton aria-label="open drawer" onClick={openDrawer} sx={{ marginRight: "auto" }}>
          <ArrowBackIcon color="text.secondary" />
        </IconButton>
      </Box>
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
