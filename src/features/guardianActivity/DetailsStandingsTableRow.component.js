import React from "react"
import { NavLink } from "react-router-dom"

import { Box, Grid, Link, Typography } from "@mui/material"

import ClassIcon from "./ClassIcon.component"

const DetailsStandingsTableRow = ({ player }) => {
  return (
    <>
      <Grid
        item
        xs={8}
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
          <ClassIcon
            classHash={player.player.classHash}
            size="xsmall"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={1}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography>{player.values.kills.basic.value}</Typography>
      </Grid>
      <Grid
        item
        xs={1}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography>{player.values.deaths.basic.value}</Typography>
      </Grid>
    </>
  )
}

export default DetailsStandingsTableRow
