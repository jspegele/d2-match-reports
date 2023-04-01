import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Box, CircularProgress } from "@mui/material"
import History from "../guardianActivity/History.component"
import Overview from "./Overview.component"
import CharacterContainer from "./CharacterContainer.component"
import StatsContainer from "./StatsContainer.component"
import ModeTabs from "./ModeTabs.component"

const GuardianPage = () => {
  const [mode, setMode] = useState(5)
  // PvP=5, PvE=7, Gambit=63
  const { membershipType, membershipId } = useParams()
  const [characters, setCharacters] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    function fetchProfile() {
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

    fetchProfile()
  }, [membershipType, membershipId])

  return (
    <>
      {profile ? (
        <Box margin="0 auto" maxWidth="750px" minWidth="500px" width="100%">
          <Overview profile={profile} />
          <CharacterContainer characters={characters} />
          <ModeTabs mode={mode} setMode={setMode} />
          <StatsContainer
            membershipType={membershipType}
            membershipId={membershipId}
            mode={mode}
          />
          <History
            characters={characters}
            membershipType={membershipType}
            membershipId={membershipId}
            mode={mode}
          />
        </Box>
      ) : (
        <Box
          alignItems="center"
          display="flex"
          justifyContent="center"
          flexGrow="1"
        >
          <CircularProgress size={40} />
        </Box>
      )}
    </>
  )
}

export default GuardianPage
