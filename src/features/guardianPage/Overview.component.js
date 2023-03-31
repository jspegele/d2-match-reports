import React, { useEffect, useState } from "react"
import axios from "axios"

import { Box, Skeleton, Typography } from "@mui/material"

import travellerIcon from "../../images/icons/traveller.svg"

const Overview = ({ profile }) => {
  const [clan, setClan] = useState(null)

  useEffect(() => {
    function fetchCharacters() {
      axios
        .get(
          `https://www.bungie.net/Platform/GroupV2/User/${profile.userInfo.membershipType}/${profile.userInfo.membershipId}/0/1`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setClan(res.data.Response.results[0].group)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchCharacters()
  }, [])


  return (
    <Box alignItems="center" display="flex" flexDirection="column" py={6}>
      <Box
        sx={{
          alignItems: "center",
          backgroundImage: `url("${travellerIcon}")`,
          backgroundPosition: "center",
          backgroundSize: "64px 64px",
          color: "#121212",
          display: "flex",
          fontSize: "2rem",
          height: "64px",
          justifyContent: "center",
          letterSpacing: "-2px",
          mb: 2,
          pb: "4px",
          pr: "2px",
          width: "64px",
        }}
      >
        {profile.currentGuardianRank}
      </Box>
      <Typography component="span" fontSize="2.25rem" lineHeight="1.2" textAlign="center">
        {profile.userInfo.bungieGlobalDisplayName}
      </Typography>
      <Typography component="span" color="text.secondary" fontSize=".875rem" pl={.5}>
        {profile.userInfo.bungieGlobalDisplayName}#{profile.userInfo.bungieGlobalDisplayNameCode}{" "}
      </Typography>
      {clan && clan.name ? (
        <Typography color="text.secondary" fontSize=".875rem" textAlign="center">
          {clan.name}
        </Typography>
      ) : (
        <Skeleton width="100px" />
      )}
    </Box>
  )
}

export default Overview
