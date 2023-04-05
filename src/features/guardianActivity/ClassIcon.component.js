import React, { useContext } from "react"

import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

import { AppContext } from "../../contexts/AppContext"

import { ReactComponent as ClassHunterIcon } from "../../images/icons/class-hunter.svg"
import { ReactComponent as ClassTitanIcon } from "../../images/icons/class-titan.svg"
import { ReactComponent as ClassWarlockIcon } from "../../images/icons/class-warlock.svg"

const ClassIcon = ({ classHash, size = "small", p = 0 }) => {
  const theme = useTheme()
  const { selectClassName } = useContext(AppContext)
  const classname = selectClassName(classHash)

  const height = size === "xsmall" ? "12px" : size === "small" ? "16px" : "20px"
  const width = size === "xsmall" ? "12px" : size === "small" ? "16px" : "20px"

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      p={p}
    >
      {classname === "Titan" && (
        <Box
          component={ClassTitanIcon}
          fill={theme.palette.text.secondary}
          sx={{ height, width }}
        />
      )}
      {classname === "Hunter" && (
        <Box
          component={ClassHunterIcon}
          fill={theme.palette.text.secondary}
          sx={{ height, width }}
        />
      )}
      {classname === "Warlock" && (
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
