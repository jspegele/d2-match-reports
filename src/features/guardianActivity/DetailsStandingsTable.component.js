import React from "react"

import { Grid, Typography } from "@mui/material"

import DetailsStandingsTableRow from "./DetailsStandingsTableRow.component"

const createData = (label, span, justify = "flex-start") => ({
  label,
  span,
  justify,
})

const DetailsStandingsTable = ({ players, winner = null, pve = true }) => {
  const headers = [
    createData(
      winner === null ? "Fireteam" : winner ? "Winners" : "Losers",
      pve ? 10 : 15
    ),
    createData("K", pve ? 1 : 2, "flex-end"),
    createData("D", pve ? 1 : 2, "flex-end"),
  ]

  if (pve)
    headers.push(
      createData("A", 1, "flex-end"),
      createData("K/D", 2, "flex-end"),
      createData("KA/D", 2, "flex-end"),
      createData("Score", 2, "flex-end")
    )

  return (
    <Grid container columns={20} spacing={1}>
      {headers.map((header, i) => (
        <Grid
          key={i}
          item
          xs={header.span}
          display="flex"
          alignItems="center"
          justifyContent={header.justify}
        >
          <Typography color="text.secondary" fontSize=".75rem">
            {header.label}
          </Typography>
        </Grid>
      ))}
      <Grid item xs={1}></Grid>
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
          <DetailsStandingsTableRow
            key={player.characterId}
            player={player}
            pve={pve}
          />
        ))}
    </Grid>
  )
}

export default DetailsStandingsTable
