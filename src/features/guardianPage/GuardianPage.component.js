import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Box, CircularProgress } from "@mui/material"
import History from "../guardianActivity/History.component"
import Overview from "./Overview.component"
import CharacterContainer from "./CharacterContainer.component"

const GuardianPage = () => {
  const { membershipType, membershipId } = useParams()
  const [profile, setProfile] = useState(null)
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    function fetchCharacters() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Profiles,Characters`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setProfile(res.data.Response.profile.data)
          setCharacters(res.data.Response.characters.data)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchCharacters()
  }, [membershipType, membershipId])

  return (
    <>
      {profile ? (
        <Box margin="0 auto" maxWidth="750px" minWidth="500px" width="100%">
          <Overview profile={profile} />
          <CharacterContainer  characters={characters} />
          <History
            characters={characters}
            membershipType={membershipType}
            membershipId={membershipId}
          />
        </Box>
      ) : (
        <Box alignItems="center" display="flex" justifyContent="center" flexGrow="1">
          <CircularProgress size={40} />
        </Box>
      )}
    </>
  )
}

export default GuardianPage
