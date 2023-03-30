import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box } from "@mui/material"

import DestinyActivityDefinition from "../../manifests/DestinyActivityDefinition.json"
import PlayerActivityDetailsScore from "./PlayerActivityDetailsScore.component"

const PlayerActivityDetails = ({ activity }) => {
  const [carnageReport, setCarnageReport] = useState(null)

  useEffect(() => {
    function fetchActivityHistory() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${activity.activityDetails.instanceId}/ `,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setCarnageReport(res.data.Response)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchActivityHistory()
  }, [activity.activityDetails.instanceId])

  return (
    <Box
      alignItems="center"
      backgroundColor="rgba(144, 202, 249, .06)"
      borderBottom="1px solid rgba(144, 202, 249, .5)"
      borderTop="1px solid rgba(144, 202, 249, .5)"
      display="flex"
      flexDirection="column"
      minHeight="200px"
    >
      {carnageReport &&
        DestinyActivityDefinition[activity.activityDetails.directorActivityHash]
          .isPvP && (
          <PlayerActivityDetailsScore
            activityDetails={carnageReport.activityDetails}
            teams={carnageReport.teams}
          />
        )}
    </Box>
  )
}

export default PlayerActivityDetails
