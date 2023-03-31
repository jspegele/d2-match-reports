import React from "react"

import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

import { ReactComponent as ClassHunterIcon } from "../../images/icons/class-hunter.svg"
import { ReactComponent as ClassTitanIcon } from "../../images/icons/class-titan.svg"
import { ReactComponent as ClassWarlockIcon } from "../../images/icons/class-warlock.svg"

const ClassIcon = ({ classHash, size = "small", p = 0 }) => {
  const theme = useTheme()

  const height = size === "xsmall" ? "12px" : size === "small" ? "16px" : "20px"
  const width = size === "xsmall" ? "12px" : size === "small" ? "16px" : "20px"

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      p={p}
    >
      {classHash === 671679327 && (
        <Box
          component={ClassHunterIcon}
          fill={theme.palette.text.secondary}
          sx={{ height, width }}
        />
      )}
      {classHash === 3655393761 && (
        <Box
          component={ClassTitanIcon}
          fill={theme.palette.text.secondary}
          sx={{ height, width }}
        />
      )}
      {classHash === 2271682572 && (
        <Box
          component={ClassWarlockIcon}
          fill={theme.palette.text.secondary}
          sx={{ height, width }}
        />
      )}
    </Box>
  )
}

export default ClassIcon
