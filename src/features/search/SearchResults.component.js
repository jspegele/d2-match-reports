import React from "react"

import { Box, List, Typography } from "@mui/material"
import SearchResultsItem from "./SearchResultsItem.component"

const SearchResults = ({ players, searching }) => (
  <Box
    sx={{
      bgcolor: "rgba((18, 18, 18, 1.0)",
      maxHeight: "30vh",
      maxWidth: "400px",
      overflow: "auto",
      position: "absolute",
      width: "100%",
    }}
  >
    {players.length > 0 ? (
      <List sx={{ padding: 0 }}>
        {players
          .filter(
            (player) =>
              player.hasOwnProperty("destinyMemberships") &&
              player.destinyMemberships.length > 0
          )
          .map((player, i) => (
            <SearchResultsItem key={i} player={player} />
          ))}
      </List>
    ) : (
      <Box p={2}>
        <Typography fontSize=".875rem">No Guardians Found.</Typography>
        <Typography fontSize=".75rem">
          Try searching for an exact Bungie display name as appears in game (no
          PSN IDs or Xbox gamertags).
        </Typography>
      </Box>
    )}
  </Box>
)

export default SearchResults
