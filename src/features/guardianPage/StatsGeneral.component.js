import React from "react"

import { Box, Skeleton, Typography } from "@mui/material"

// const secToHrs = (seconds) => Math.round(seconds / 60 / 60)

const StatsGeneral = ({ stats, mode }) => {
  const successNode = mode === 5 ? "activitiesWon" : "activitiesCleared"

  const statsArray = [
    {
      label: mode === 5 ? "Matches" : "Activities",
      value: stats ? stats.activitiesEntered.basic.value : null,
    },
    {
      label: mode === 5 ? "Wins" : "Cleared",
      value: stats ? stats[successNode].basic.value : null,
    },
    {
      label: "Kills",
      value: stats ? stats.kills.basic.value : null,
    },
    {
      label: "Deaths",
      value: stats ? stats.deaths.basic.value : null,
    },
    {
      label: "Assists",
      value: stats ? stats.assists.basic.value : null,
    },
    {
      label: "Suicides",
      value: stats ? stats.suicides.basic.value : null,
    },
  ]

  return (
    <Box alignItems="center" display="flex" flexWrap="wrap" justifyContent="center" p={1}>
      {statsArray.map((stat, i) => (
        <Box
          key={i}
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p={1}
        >
          {stat.value ? (
            <Typography>{stat.value.toLocaleString()}</Typography>
          ) : (
            <Skeleton height={24} width={40} />
          )}
          <Typography color="text.secondary" fontSize=".75rem">
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default StatsGeneral
