import React, { useState } from "react"

import { Card } from "@mui/material"
import PlayerSearchResults from "./PlayerSearchResults.component"
import PlayerSearchBox from "./PlayerSearchBox.component"

const PlayerSearchPage = () => {
  const [searchResults, setSearchResults] = useState([])

  return (
    <Card
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ maxWidth: "400px", width: "100%" }}
    >
      <PlayerSearchBox setSearchResults={setSearchResults} />
      {searchResults.length > 0 && (
        <PlayerSearchResults players={searchResults} />
      )}
    </Card>
  )
}

export default PlayerSearchPage
