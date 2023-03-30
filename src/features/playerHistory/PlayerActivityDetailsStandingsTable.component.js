import React from "react"

import { Grid, Typography } from "@mui/material"

import PlayerActivityDetailsStandingsTableRow from "./PlayerActivityDetailsStandingsTableRow.component"

const PlayerActivityDetailsStandingsTable = ({ players, winner }) => {
  return (
    <Grid container columns={10} spacing={1}>
      <Grid item xs={8} display="flex" alignItems="center">
        <Typography color="text.secondary" fontSize=".75rem">
          {winner ? "Winners" : "Losers"}
        </Typography>
      </Grid>
      <Grid item xs={1} display="flex" alignItems="center" justifyContent="flex-end">
        <Typography color="text.secondary" fontSize=".75rem">
          K
        </Typography>
      </Grid>
      <Grid item xs={1} display="flex" alignItems="center" justifyContent="flex-end">
        <Typography color="text.secondary" fontSize=".75rem">
          D
        </Typography>
      </Grid>
      {players
        .sort((a, b) =>
          a.values.killsDeathsRatio.basic.value >
          b.values.killsDeathsRatio.basic.value
            ? -1
            : b.values.killsDeathsRatio.basic.value >
              a.values.killsDeathsRatio.basic.value
            ? 1
            : 0
        )
        .map((player) => (
          <PlayerActivityDetailsStandingsTableRow player={player} />
        ))}
    </Grid>
  )
}

export default PlayerActivityDetailsStandingsTable
