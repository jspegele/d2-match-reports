import React from "react"

import { Box, Grid, Typography } from "@mui/material"

import PlayerActivityRowClassIcon from "./PlayerActivityRowClassIcon.component"

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
          <>
            <Grid item xs={8} display="flex" alignItems="center" overflow="hidden" whiteSpace="nowrap">
              <Box
                component="img"
                alt=""
                src={`https://bungie.net/${player.player.destinyUserInfo.iconPath}`}
                borderRadius="3px"
                height="24px"
                mr={1}
                width="24px"
              />
              <Typography component="span" display="block" overflow="hidden" textOverflow="ellipsis">
                {player.player.destinyUserInfo.bungieGlobalDisplayName}
              </Typography>
              <Box pl={.5}>
                <PlayerActivityRowClassIcon classHash={player.player.classHash} size="xsmall" />
              </Box>
            </Grid>
            <Grid item xs={1} display="flex" alignItems="center" justifyContent="flex-end">
              <Typography>
                {player.values.kills.basic.value}
              </Typography>
            </Grid>
            <Grid item xs={1} display="flex" alignItems="center" justifyContent="flex-end">
              <Typography>
                {player.values.deaths.basic.value}
              </Typography>
            </Grid>
          </>
        ))}
    </Grid>
  )
}

export default PlayerActivityDetailsStandingsTable
