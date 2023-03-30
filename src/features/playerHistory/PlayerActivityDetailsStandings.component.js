import React from "react"

import { Grid } from "@mui/material"

import PlayerActivityDetailsStandingsTable from "./PlayerActivityDetailsStandingsTable.component"

const PlayerActivityDetailsStandings = ({ entries, teams }) => {
  return (
    <Grid container spacing={2}>
      {teams.map((team) => (
        <Grid item xs={teams.length === 1 ? 12 : 6}>
          <PlayerActivityDetailsStandingsTable
            players={entries.filter(
              (entry) => entry.values.team.basic.value === team.teamId
            )}
            winner={team.standing.basic.value === 0}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default PlayerActivityDetailsStandings
