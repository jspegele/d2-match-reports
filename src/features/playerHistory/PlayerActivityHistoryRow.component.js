import React, { useEffect, useState } from "react"
import { DateTime } from "luxon"

import { TableCell, TableRow } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

import { getModeDisplayName } from "./getModeDisplayName"
import DestinyActivityDefinition from "../../manifests/DestinyActivityDefinition.json"

const PlayerActivityHistoryRow = ({ activity }) => {
  return (
    <TableRow key={activity.activityDetails.instanceId}>
      <TableCell>
        {activity.values.standing.basic.value === 0 ? (
          <CheckCircleIcon color="success" />
        ) : (
          <CircleOutlinedIcon color="error" />
        )}
      </TableCell>
      <TableCell>
        {DateTime.fromISO(activity.period).toFormat(
          "ccc dd LLL yyyy"
        )}
      </TableCell>
      <TableCell>
        {getModeDisplayName(activity.activityDetails.mode)}
      </TableCell>
      <TableCell>
        {
          DestinyActivityDefinition[
            activity.activityDetails.referenceId
          ].displayProperties.name
        }
      </TableCell>
    </TableRow>
  )
}
 
export default PlayerActivityHistoryRow
