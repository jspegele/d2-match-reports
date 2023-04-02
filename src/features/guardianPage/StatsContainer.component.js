import React, { useContext, useEffect, useState } from "react"
import axios from "axios"

import { Box, Typography } from "@mui/material"

import { AppContext } from "../../contexts/AppContext"

import StatsGeneral from "./StatsGeneral.component"
import StatsByWeapon from "./StatsByWeapon.component"

const StatsContainer = ({ membershipType, membershipId }) => {
  const { mode } = useContext(AppContext)
  const [accountStats, setAccountStats] = useState(null)
  const statsNode = mode === 5 ? "allPvP" : "allPvE"

  useEffect(() => {
    function fetchClan() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Stats/ `,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setAccountStats(res.data.Response)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchClan()
  }, [])

  return (
    <Box pb={6}>
      <Typography
        fontSize=".875rem"
        pb={2}
        textAlign="center"
        textTransform="uppercase"
      >
        Account Stats
      </Typography>
      <StatsGeneral
        stats={
          accountStats
            ? accountStats.mergedAllCharacters.results[statsNode].allTime
            : null
        }
        mode={mode}
      />
      <StatsByWeapon
        stats={
          accountStats
            ? accountStats.mergedAllCharacters.results[statsNode].allTime
            : null
        }
      />
    </Box>
  )
}

export default StatsContainer
