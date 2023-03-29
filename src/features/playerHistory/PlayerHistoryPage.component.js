import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Card, CardContent, Skeleton, Typography } from "@mui/material"
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
    <Card>
      <CardContent>
        {profile ? (
          <>
            <Typography pb={3}>
              {profile.profile.data.userInfo.bungieGlobalDisplayName}#
              {profile.profile.data.userInfo.bungieGlobalDisplayNameCode}{" "}
              Activity History
            </Typography>
            <PlayerActivityHistory
              membershipType={membershipType}
              membershipId={membershipId}
              activeCharId={Object.keys(profile.characters.data)[0]}
            />
          </>
        ) : (
          <Skeleton sx={{ minWidth: "300px" }} />
        )}
      </CardContent>
    </Card>
  )
}

export default PlayerHistoryPage
