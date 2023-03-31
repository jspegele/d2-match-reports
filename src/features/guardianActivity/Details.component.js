import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box } from "@mui/material"

import DestinyActivityDefinition from "../../manifests/DestinyActivityDefinition.json"
import DetailsScore from "./DetailsScore.component"
import DetailsStandings from "./DetailsStandings.component"

const Details = ({ activity }) => {
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
      px={2}
      py={4}
    >
      {carnageReport &&
        DestinyActivityDefinition[activity.activityDetails.directorActivityHash]
          .isPvP && (
            <>
              <DetailsScore
                activityDetails={carnageReport.activityDetails}
                teams={carnageReport.teams}
              />
              <DetailsStandings
                entries={carnageReport.entries}
                teams={carnageReport.teams}
              />
            </>
        )}
    </Box>
  )
}

export default Details