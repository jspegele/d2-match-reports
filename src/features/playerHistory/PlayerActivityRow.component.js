import React from "react"

import { Box, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"

import { getModeDisplayName } from "./getModeDisplayName"
import DestinyActivityDefinition from "../../manifests/DestinyActivityDefinition.json"
import PlayerActivityRowClassIcon from "./PlayerActivityRowClassIcon.component"

const PlayerActivityRow = ({
  activity,
  altRow,
  activeRow,
  toggleShowDetails,
}) => (
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
    <Box alignItems="center" display="flex" p={2}>
      {activity.values.standing.basic.value === 0 ? (
        <CheckCircleIcon color="success" sx={{ fontSize: 20 }} />
      ) : (
        <CircleOutlinedIcon color="error" sx={{ fontSize: 20 }} />
      )}
    </Box>
    <Box alignItems="center" display="flex" pr={0.5} py={2} width="9rem">
      <Typography color="text.secondary" fontSize=".75rem">
        {getModeDisplayName(activity.activityDetails.mode)}
      </Typography>
    </Box>
    <Box alignItems="center" display="flex" flexGrow={1} pr={0.5} py={2}>
      <Typography fontSize=".875rem">
        {
          DestinyActivityDefinition[activity.activityDetails.referenceId]
            .displayProperties.name
        }
      </Typography>
    </Box>
    <Box alignItems="center" display="flex" px={2}>
      <PlayerActivityRowClassIcon classHash={activity.classHash} />
    </Box>
    <Box alignItems="center" display="flex" px={0.5} py={2} width="5rem">
      <Typography fontSize=".875rem">
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
    <Box alignItems="center" display="flex" pl={0.5} pr={2} py={2} width="5rem">
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
  </Box>
)

export default PlayerActivityRow
