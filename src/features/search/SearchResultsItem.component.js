import React, { useEffect, useState } from "react"
import axios from "axios"

import { ListItem } from "@mui/material"

import SearchResultsItemButton from "./SearchResultsItemButton.component"

const SearchResultsItem = ({ player }) => {
  const [characters, setCharacters] = useState(null)

  const primaryMembership = player.destinyMemberships[0]

  useEffect(() => {
    function fetchMemberships() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Profile/${primaryMembership.membershipId}/?components=Characters`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setCharacters(res.data.Response.characters.data)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchMemberships()
  }, [primaryMembership.membershipType, primaryMembership.membershipId])

  return (
    <ListItem disablePadding>
      <SearchResultsItemButton
        characters={characters ? Object.values(characters) : []}
        displayName={player.bungieGlobalDisplayName}
        displayNameCode={player.bungieGlobalDisplayNameCode}
        primaryMembership={primaryMembership}
      />
    </ListItem>
  )
}

export default SearchResultsItem
