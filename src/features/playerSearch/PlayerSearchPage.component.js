import React, { useEffect, useState } from "react"
import axios from "axios"

import { Card, TextField } from "@mui/material"
import PlayerSearchResults from "./PlayerSearchResults.component"

const page = 0
let controller

const PlayerSearchPage = () => {
  const [displayName, setDisplayName] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleDisplayNameChange = (e) => setDisplayName(e.target.value)

  useEffect(() => {
    if (controller) controller.abort()
    controller = new AbortController()

    function fetchPlayerSearchResults() {
      axios
        .post(
          `https://www.bungie.net/Platform/User/Search/GlobalName/${page}/`,
          {
            displayNamePrefix: displayName,
          },
          {
            signal: controller.signal,
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setSearchResults(res.data.Response.searchResults)
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            // Request cancelled
          } else {
            setSearchResults([])
            console.log(error.message)
          }
        })
    }

    if (displayName.length === 0) setSearchResults([])
    if (displayName.length > 0) fetchPlayerSearchResults()
  }, [displayName])

  return (
    <Card
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ maxWidth: "400px", width: "100%" }}
    >
      <TextField
        fullWidth
        onChange={handleDisplayNameChange}
        placeholder="Guardian Lookup"
        value={displayName}
        variant="outlined"
      />
      {searchResults.length > 0 && (
        <PlayerSearchResults players={searchResults} />
      )}
    </Card>
  )
}

export default PlayerSearchPage
