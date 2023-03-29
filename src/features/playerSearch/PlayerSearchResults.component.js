import React from "react"

import { Card, List } from "@mui/material"
import PlayerSearchResultsItem from "./PlayerSearchResultsItem.component"

const PlayerSearchResults = ({ players }) => (
  <Card
    sx={{
      maxHeight: "30vh",
      maxWidth: "400px",
      overflow: "auto",
      position: "absolute",
      width: "100%",
    }}
  >
    <List>
      {players.map((player, i) => (
        <PlayerSearchResultsItem key={i} player={player} />
      ))}
    </List>
  </Card>
)

export default PlayerSearchResults
