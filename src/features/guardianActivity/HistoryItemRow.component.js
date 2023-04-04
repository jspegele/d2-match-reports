import React, { useContext } from "react"

import { Box, Typography, useMediaQuery } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"

import { AppContext } from "../../contexts/AppContext"
import { getModeDisplayName } from "./getModeDisplayName"

import ClassIcon from "./ClassIcon.component"

const HistoryItemRow = ({ activity, altRow, activeRow, toggleShowDetails }) => {
  const isSmall = useMediaQuery("(min-width: 600px)")
  const { mode, selectActivityName } = useContext(AppContext)

  return (
    <Box
      key={activity.activityDetails.instanceId}
      display="flex"
      flexDirection="row"
      onClick={toggleShowDetails}
      sx={{
        ...(altRow === 0 && activeRow === false
          ? { backgroundColor: "rgba(144, 202, 249, .04)" }
          : { backgroundColor: "rgba(144, 202, 249, .02)" }),
        ...(activeRow === true && {
          backgroundColor: "rgba(144, 202, 249, .06)",
        }),
        "&: hover": {
          cursor: "pointer",
          backgroundColor: "rgba(144, 202, 249, .1)",
        },
      }}
    >
      <Box alignItems="center" display="flex" px={isSmall ? 2 : 1}>
        {((mode === 5 || mode === 63) &&
          activity.values.standing &&
          activity.values.standing.basic.value === 0) ||
        (mode === 7 && activity.values.completed.basic.value === 1) ? (
          <CheckCircleIcon color="success" sx={{ fontSize: 20 }} />
        ) : (
          <CircleOutlinedIcon color="error" sx={{ fontSize: 20 }} />
        )}
      </Box>
      <Box
        alignItems="center"
        display="flex"
        overflow="hidden"
        pr={0.5}
        py={2}
        whiteSpace="nowrap"
        width={isSmall ? "125px" : "100px"}
      >
        <Typography
          color="text.secondary"
          fontSize=".75rem"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {getModeDisplayName(activity.activityDetails.mode)}
        </Typography>
      </Box>
      <Box alignItems="center" display="flex" flexGrow={1} pr={0.5} py={2}>
        <Typography fontSize=".875rem">
          {selectActivityName(activity.activityDetails.referenceId)}
        </Typography>
      </Box>
      <Box alignItems="center" display="flex" px={isSmall ? 2 : 0.5}>
        <ClassIcon classHash={activity.classHash} />
      </Box>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="flex-end"
        overflow="hidden"
        px={1}
        py={2}
        whiteSpace="nowrap"
        width={isSmall ? "80px" : "70px"}
      >
        <Typography
          fontSize=".875rem"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {activity.values.killsDeathsRatio.basic.displayValue}
          <Typography
            component="span"
            color="text.secondary"
            display="inline"
            fontSize=".675rem"
            marginLeft="2px"
          >
            K/D
          </Typography>
        </Typography>
      </Box>
      {isSmall && (
        <Box
          alignItems="center"
          display="flex"
          justifyContent="flex-end"
          pl={0.5}
          pr={2}
          py={2}
          width="5rem"
        >
          <Typography fontSize=".875rem">
            {activity.values.efficiency.basic.displayValue}
            <Typography
              component="span"
              color="text.secondary"
              display="inline"
              fontSize=".675rem"
              marginLeft="2px"
            >
              KA/D
            </Typography>
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default HistoryItemRow
