import React, { useState } from "react"

import { Box } from "@mui/material"

import PlayerSearchResults from "./PlayerSearchResults.component"
import PlayerSearchBox from "./PlayerSearchBox.component"

const PlayerSearch = () => {
  const [displayName, setDisplayName] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState(false)

  return (
    <Box
      component="form"
      mt={6}
      onSubmit={(e) => e.preventDefault()}
      sx={{ width: "100%" }}
    >
      <PlayerSearchBox
        displayName={displayName}
        setDisplayName={setDisplayName}
        setSearchResults={setSearchResults}
        searching={searching}
        setSearching={setSearching}
      />
      {(searchResults.length > 0 || (!!displayName && !searching)) && (
        <PlayerSearchResults players={searchResults} searching={searching} />
      )}
    </Box>
  )
}

export default PlayerSearch
