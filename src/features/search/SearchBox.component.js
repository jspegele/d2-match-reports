import React, { useEffect } from "react"
import axios from "axios"

import { CircularProgress, InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const page = 0
let controller

const SearchBox = ({ displayName, setDisplayName, setSearchResults, searching, setSearching }) => {
  const handleDisplayNameChange = (e) => setDisplayName(e.target.value)

  useEffect(() => {
    if (controller) controller.abort()
    controller = new AbortController()

    function fetchPlayerSearchResults() {
      setSearching(true)
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
          setSearching(false)
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
  }, [setSearching, displayName, setSearchResults])

  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: searching ? (
          <CircularProgress size={16} />
        ) : null,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "text.secondary", fontSize: "1.25rem" }} />
          </InputAdornment>
        ),
        style: { fontSize: ".875rem" },
      }}
      onChange={handleDisplayNameChange}
      placeholder="BungieName"
      value={displayName}
      variant="outlined"
      sx={{
        backgroundColor: "rgba(18, 18, 18, .75)",
        "& fieldset": {
          borderLeft: "none",
          borderRadius: 0,
          borderRight: "none",
        },
      }}
    />
  )
}

export default SearchBox
