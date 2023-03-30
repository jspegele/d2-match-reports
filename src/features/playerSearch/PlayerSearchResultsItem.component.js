import React from "react"
import { useNavigate } from "react-router-dom"

import { Box, ListItem, ListItemButton, Typography } from "@mui/material"

const PlayerSearchResultsItem = ({ player }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (player.destinyMemberships.length > 0) {
      const primaryMembership = player.destinyMemberships[0]
      navigate(
        `/${primaryMembership.membershipType}/${primaryMembership.membershipId}`
      )
    }
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick} sx={{ py: 2 }}>
        <Box>
          <Typography component="span">
            {player.bungieGlobalDisplayName}
          </Typography>
          <Typography
            component="span"
            color="text.secondary"
            fontSize=".75rem"
            pl={0.5}
          >
            #{player.bungieGlobalDisplayNameCode}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  )
}

export default PlayerSearchResultsItem
