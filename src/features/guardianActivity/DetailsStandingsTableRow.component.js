import React from "react"
import { NavLink } from "react-router-dom"

import { Box, Grid, Link, Typography } from "@mui/material"

import ClassIcon from "./ClassIcon.component"
import MoreInfo from "./MoreInfo.component"

const DetailsStandingsTableRow = ({ player, pve }) => {
  const cells = [
    { value: player.values.kills.basic.value, span: pve ? 1 : 2 },
    { value: player.values.deaths.basic.value, span: pve ? 1 : 2 },
  ]

  if (pve)
    cells.push(
      { value: player.values.assists.basic.value, span: 1 },
      { value: player.values.killsDeathsRatio.basic.displayValue, span: 2 },
      { value: player.values.efficiency.basic.displayValue, span: 2 },
      { value: player.values.score.basic.value, span: 2 },
    )

  return (
    <>
      <Grid
        item
        xs={pve ? 10 : 15}
        display="flex"
        alignItems="center"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        <Box
          component="img"
          alt=""
          src={`https://bungie.net/${player.player.destinyUserInfo.iconPath}`}
          borderRadius="3px"
          height="24px"
          mr={1}
          width="24px"
        />
        <Typography
          component="span"
          display="block"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <Link
            component={NavLink}
            target="_blank"
            to={`/${player.player.destinyUserInfo.membershipType}/${player.player.destinyUserInfo.membershipId}`}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&: hover": { color: "info.light", textDecoration: "underline" },
            }}
          >
            {player.player.destinyUserInfo.bungieGlobalDisplayName}
          </Link>
        </Typography>
        <Box pl={0.5}>
          <ClassIcon classHash={player.player.classHash} size="xsmall" />
        </Box>
      </Grid>
      {cells.map((cell, i) => (
        <Grid
          key={i}
          item
          xs={cell.span}
          alignItems="center"
          display="flex"
          justifyContent="flex-end"
        >
          <Typography>{cell.value}</Typography>
        </Grid>
      ))}
      <Grid item xs={1} alignItems="center" display="flex">
        <MoreInfo
          displayName={player.player.destinyUserInfo.bungieGlobalDisplayName}
          characterClass={player.player.characterClass}
          lightLevel={player.player.lightLevel}
          extended={player.extended}
        />
      </Grid>
    </>
  )
}

export default DetailsStandingsTableRow
