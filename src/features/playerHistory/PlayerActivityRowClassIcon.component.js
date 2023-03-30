import React from "react"

import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

import { ReactComponent as ClassHunterIcon } from "../../images/icons/class-hunter.svg"
import { ReactComponent as ClassTitanIcon } from "../../images/icons/class-titan.svg"
import { ReactComponent as ClassWarlockIcon } from "../../images/icons/class-warlock.svg"

const PlayerActivityRowClassIcon = ({ classHash }) => {
  console.log(classHash)
  const theme = useTheme()
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      px={0.5}
      py={2}
      width="2rem"
    >
      {classHash === 671679327 && (
        <Box
          component={ClassHunterIcon}
          fill={theme.palette.text.secondary}
          sx={{ height: "16px", width: "16px" }}
        />
      )}
      {classHash === 3655393761 && (
        <Box
          component={ClassTitanIcon}
          fill={theme.palette.text.secondary}
          sx={{ height: "16px", width: "16px" }}
        />
      )}
      {classHash === 2271682572 && (
        <Box
          component={ClassWarlockIcon}
          fill={theme.palette.text.secondary}
          sx={{ height: "16px", width: "16px" }}
        />
      )}
    </Box>
  )
}

export default PlayerActivityRowClassIcon
