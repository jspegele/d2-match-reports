import React from "react"

import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"

import { ReactComponent as CrucibleIcon } from "../../images/icons/faction-crucible.svg"
import { ReactComponent as IronBannerIcon } from "../../images/icons/faction-ironbanner.svg"
import { ReactComponent as TrialsIcon } from "../../images/icons/faction-osiris.svg"

const ironBannerModes = [19, 43, 44, 45, 68, 90, 91]
const trialsModes = [39, 41, 42, 84]

const PlayerActivityDetailsScore = ({ activityDetails, teams }) => {
  const theme = useTheme()

  return (
    <Box alignItems="center" display="flex" justifyContent="center" pb={2}>
      {teams[0].standing.basic.value === 0 ? (
        <CheckCircleIcon color="success" sx={{ fontSize: 20, mr: 1 }} />
      ) : (
        <CircleOutlinedIcon color="error" sx={{ fontSize: 20, mr: 1 }} />
      )}
      <Typography fontSize="3rem" fontWeight="700">
        {teams[0].score.basic.value}
      </Typography>
      <Box px={4}>
        {trialsModes.includes(activityDetails.mode) && (
          <Box
            component={TrialsIcon}
            fill={theme.palette.text.primary}
            sx={{ height: "64px", width: "64px" }}
          />
        )}
        {ironBannerModes.includes(activityDetails.mode) && (
          <Box
            component={IronBannerIcon}
            fill={theme.palette.text.primary}
            sx={{ height: "64px", width: "64px" }}
          />
        )}
        {!trialsModes.includes(activityDetails.mode) &&
          !ironBannerModes.includes(activityDetails.mode) && (
            <Box
              component={CrucibleIcon}
              fill={theme.palette.text.primary}
              sx={{ height: "64px", width: "64px" }}
            />
          )}
      </Box>
      <Typography fontSize="3rem" fontWeight="700">
        {teams[1].score.basic.value}
      </Typography>
      {teams[1].standing.basic.value === 0 ? (
        <CheckCircleIcon color="success" sx={{ fontSize: 20, ml: 1 }} />
      ) : (
        <CircleOutlinedIcon color="error" sx={{ fontSize: 20, ml: 1 }} />
      )}
    </Box>
  )
}

export default PlayerActivityDetailsScore
