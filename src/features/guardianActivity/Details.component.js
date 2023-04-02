import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Box, LinearProgress } from "@mui/material"

import { AppContext } from "../../contexts/AppContext"

import DetailsScore from "./DetailsScore.component"
import DetailsStandings from "./DetailsStandings.component"

const Details = ({ activity }) => {
  const { mode } = useContext(AppContext)
  const [carnageReport, setCarnageReport] = useState(null)

  useEffect(() => {
    function fetchCarnageReport() {
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

    fetchCarnageReport()
  }, [activity.activityDetails.instanceId])

  return (
    <>
      {carnageReport ? (
        <Box
          alignItems="center"
          backgroundColor="rgba(144, 202, 249, .06)"
          borderBottom="1px solid rgba(144, 202, 249, .5)"
          borderTop="1px solid rgba(144, 202, 249, .5)"
          display="flex"
          flexDirection="column"
          pb={4}
          pt={2}
          px={2}
        >
          {carnageReport && (
            <>
              {(mode === 5 || mode === 63) && (
                <DetailsScore
                  activityDetails={carnageReport.activityDetails}
                  teams={carnageReport.teams}
                />
              )}
              <DetailsStandings
                entries={carnageReport.entries}
                teams={carnageReport.teams}
              />
            </>
          )}
        </Box>
      ) : (
        <LinearProgress sx={{ height: 2 }} />
      )}
    </>
  )
}

export default Details
