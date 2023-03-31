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
        {players.map((player, i) => (
          <SearchResultsItem key={i} player={player} />
        ))}
      </List>
    ) : (
      <Typography fontSize=".875rem" p={2}>
        No Guardians Found
      </Typography>
    )}
  </Box>
)

export default SearchResults
