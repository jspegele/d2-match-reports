import React from "react"
import { useNavigate } from "react-router-dom"

import { ListItem, ListItemButton, ListItemText } from "@mui/material"

const PlayerSearchResultsItem = ({ player }) => {
  const navigate = useNavigate()

  const handleClick = () => navigate(`/${player.bungieNetMembershipId}`)

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText
          onClick={handleClick}
          primary={`${player.bungieGlobalDisplayName}#${player.bungieGlobalDisplayNameCode}`}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default PlayerSearchResultsItem
