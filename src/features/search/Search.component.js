import React, { useState } from "react"

import { Box } from "@mui/material"

import SearchBox from "./SearchBox.component"
import SearchResults from "./SearchResults.component"

const Search = () => {
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
      <SearchBox
        displayName={displayName}
        setDisplayName={setDisplayName}
        setSearchResults={setSearchResults}
        searching={searching}
        setSearching={setSearching}
      />
      {(searchResults.length > 0 || (!!displayName && !searching)) && (
        <SearchResults players={searchResults} searching={searching} />
      )}
    </Box>
  )
}

export default Search
