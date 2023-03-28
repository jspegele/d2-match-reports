import React, { useEffect, useState } from "react"
import axios from "axios"

import { Card, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material"

const page = 0
let controller;

const PlayerSearch = () => {
  const [displayName, setDisplayName] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleDisplayNameChange = e => setDisplayName(e.target.value)

  useEffect(() => {
    if (controller) controller.abort()
    controller = new AbortController()

    function fetchPlayerSearchResults() {
      axios.post(
        `https://www.bungie.net/Platform/User/Search/GlobalName/${page}/`,
        {
          displayNamePrefix: displayName,
        }, 
        {
          signal: controller.signal,
          headers: {
            "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
          }
        }
      )
      .then((res) => {
        console.log('result received')
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
      onSubmit={e => e.preventDefault()}
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
        <Card sx={{ maxHeight: "30vh", maxWidth: "400px", overflow: "auto", position: "absolute", width: "100%" }}>
            <List>
              {searchResults.map((result, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton>
                    <ListItemText primary={`${result.bungieGlobalDisplayName}#${result.bungieGlobalDisplayNameCode}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Card>
      )}
    </Card>
  )
}

export default PlayerSearch
