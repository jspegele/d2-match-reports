import React from "react"

import { Box, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"

import { getModeDisplayName } from "./getModeDisplayName"
import DestinyActivityDefinition from "../../manifests/DestinyActivityDefinition.json"

const PlayerActivityHistoryRow = ({ activity, alt }) => {
  return (
    <Box
      key={activity.activityDetails.instanceId}
      display="flex"
      flexDirection="row"
      sx={{
        ...(alt === 0
          ? { backgroundColor: "rgba(144, 202, 249, .04)" }
          : { backgroundColor: "rgba(144, 202, 249, .02)" }),
        "&: hover": {
          cursor: "pointer",
          backgroundColor: "rgba(144, 202, 249, .1)",
        },
      }}
    >
      <Box alignItems="center" display="flex" p={2}>
        {activity.values.standing.basic.value === 0 ? (
          <CheckCircleIcon color="success" sx={{ fontSize: 20 }} />
        ) : (
          <CircleOutlinedIcon color="error" sx={{ fontSize: 20 }} />
        )}
      </Box>
      <Box alignItems="center" display="flex" pr={.5} py={2} width="9rem">
        <Typography color="text.secondary" fontSize=".75rem">{getModeDisplayName(activity.activityDetails.mode)}</Typography>
      </Box>
      <Box alignItems="center" display="flex" flexGrow={1} pr={.5} py={2}>
        <Typography fontSize=".875rem">
        {
          DestinyActivityDefinition[activity.activityDetails.referenceId]
            .displayProperties.name
        }
        </Typography>
      </Box>
    </Box>
  )
}

export default PlayerActivityHistoryRow
