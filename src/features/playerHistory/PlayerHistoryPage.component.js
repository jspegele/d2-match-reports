import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Box, Typography } from "@mui/material"

const PlayerHistoryPage = () => {
  const { membershipType, membershipId } = useParams()
  // const [bungieNetUser, setBungieNetUser] = useState()
  const [profile, setProfile] = useState(null)
  const [history, setHistory] = useState(null)

  // useEffect(() => {
  //   function fetchBungieNetUser() {
  //     axios
  //       .get(
  //         `https://www.bungie.net/Platform/User/GetBungieNetUserById/${id}/`,
  //         {
  //           headers: {
  //             "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         setBungieNetUser(res.data.Response)
  //       })
  //       .catch((error) => {
  //         console.log(error.message)
  //       })
  //   }

  //   fetchBungieNetUser()
  // }, [membershipType, membershipId])

  useEffect(() => {    
    function fetchCharacters() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Profiles,Characters,CharacterActivities`,
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

  useEffect(() => {
    function fetchActivityHistory() {
      const activeCharId = Object.keys(profile.characters.data)[0]
      console.log(activeCharId)
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/${activeCharId}/Stats/Activities/`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setHistory(res.data.Response)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    if (profile && profile.characters && profile.characters.data) fetchActivityHistory()
  }, [membershipType, membershipId, profile])

  return (
    <Box>
      <Typography>Activity History for: {membershipType}/{membershipId}</Typography>
    </Box>
  )
}

export default PlayerHistoryPage
