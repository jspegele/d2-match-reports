import React, { useContext } from "react"

import { useTheme } from "@emotion/react"
import { Box, IconButton, Link, Typography, useMediaQuery } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import { AppContext } from "../contexts/AppContext"

import { ReactComponent as DestinyIcon } from "../images/icons/destiny.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
  const theme = useTheme()
  const isMedium = useMediaQuery("(min-width:900px)")
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
      {!isMedium && (
        <Box left="0" position="absolute" p={1} top="0">
          <IconButton aria-label="open drawer" onClick={openDrawer} sx={{ marginRight: "auto" }}>
            <ArrowBackIcon color="text.secondary" />
          </IconButton>
        </Box>
      )}
      <Link component={NavLink} to="/" alignItems="center" display="flex" sx={{ textDecoration: "none" }}>
        <Box
          component={DestinyIcon}
          fill={theme.palette.text.primary}
          mr={1}
          sx={{ height: "14px", width: "14px" }}
        />
        <Typography
          color="text.primary"
          fontSize=".875rem"
          fontWeight="700"
          textAlign="center"
          textTransform="uppercase"
        >
          D2 Match Reports
        </Typography>
      </Link>
    </Box>
  )
}

export default Header
