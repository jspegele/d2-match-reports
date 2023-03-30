import React, { useEffect, useState } from "react"
import axios from "axios"

import { Box } from "@mui/material"

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
  }, [])

  return (
    <Box
      backgroundColor="rgba(144, 202, 249, .06)"
      borderBottom="1px solid rgba(144, 202, 249, .5)"
      borderTop="1px solid rgba(144, 202, 249, .5)"
      minHeight="200px"
    >
      
    </Box>
  )
}

export default PlayerActivityDetails
