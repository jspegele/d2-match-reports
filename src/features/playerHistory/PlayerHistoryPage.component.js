import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Box, CardContent, CircularProgress, Skeleton, Typography } from "@mui/material"
import PlayerActivityHistory from "./PlayerActivityHistory.component"

const PlayerHistoryPage = () => {
  const { membershipType, membershipId } = useParams()
  const [profile, setProfile] = useState(null)

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
          setProfile(res.data.Response)
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
        <Box margin="0 auto" maxWidth="700px" minWidth="500px" width="100%">
          <Typography fontSize="2.25rem" pb={3} textAlign="center">
            {profile.profile.data.userInfo.bungieGlobalDisplayName}#
            {profile.profile.data.userInfo.bungieGlobalDisplayNameCode}{" "}
          </Typography>
          <PlayerActivityHistory
            characters={profile.characters.data}
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

export default PlayerHistoryPage
