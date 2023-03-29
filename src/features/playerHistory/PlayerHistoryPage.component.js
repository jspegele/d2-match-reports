import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Box, CardContent, Skeleton, Typography } from "@mui/material"
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
    <Box width="700px">
      {profile ? (
        <>
          <Typography fontSize="2.25rem" pb={3} textAlign="center">
            {profile.profile.data.userInfo.bungieGlobalDisplayName}#
            {profile.profile.data.userInfo.bungieGlobalDisplayNameCode}{" "}
          </Typography>
          <PlayerActivityHistory
            membershipType={membershipType}
            membershipId={membershipId}
            activeCharId={Object.keys(profile.characters.data)[0]}
          />
        </>
      ) : (
        <Skeleton height={80} width={"100%"} />
      )}
    </Box>
  )
}

export default PlayerHistoryPage
