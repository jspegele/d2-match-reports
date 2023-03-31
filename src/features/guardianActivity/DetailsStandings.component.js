import React from "react"

import { Grid } from "@mui/material"

import DetailsStandingsTable from "./DetailsStandingsTable.component"

const DetailsStandings = ({ entries, teams }) => {
  return (
    <Grid container spacing={4}>
      {teams.map((team) => (
        <Grid item xs={teams.length === 1 ? 12 : 6}>
          <DetailsStandingsTable
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

export default DetailsStandings
