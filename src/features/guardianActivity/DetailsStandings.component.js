import React from "react"

import { Grid } from "@mui/material"

import DetailsStandingsTable from "./DetailsStandingsTable.component"

const DetailsStandings = ({ entries, teams }) => (
  <Grid container spacing={6}>
    {teams.length ? (
      teams.map((team) => (
        <Grid item key={team.teamId} xs={12} md={6}>
          <DetailsStandingsTable
            players={entries.filter(
              (entry) => entry.values.team.basic.value === team.teamId
            )}
            winner={team.standing.basic.value === 0}
            pve={false}
          />
        </Grid>
      ))
    ) : (
      <Grid item xs={12}>
        <DetailsStandingsTable players={entries} />
      </Grid>
    )}
  </Grid>
)

export default DetailsStandings

console.log('test')