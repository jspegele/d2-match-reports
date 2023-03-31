import React from "react"

import { Box, Typography } from "@mui/material"

import { classTypes, genderTypes, raceTypes } from "../../app/BungieEnumValues"
import { ReactComponent as PowerIcon } from "../../images/icons/power2.svg"

const CharacterItem = ({ character, numChars }) => {
  return (
    <Box p={0.5} width={numChars === 3 ? "33%" : "40%"}>
      <Box
        sx={{
          background: `url("https://bungie.net/${character.emblemBackgroundPath}")`,
          backgroundPosition: "center left",
          backgroundSize: "cover",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.25)",
          padding: "12px 6px 12px 70px",
          height: "76px",
          width: "100%",
        }}
      >
        <Box sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <Box pr={1}>
            <Typography
              fontSize="1.25rem"
              lineHeight="1.1"
              sx={{ textShadow: "1px 1px 2px black" }}
            >
              {classTypes[character.classType]}
            </Typography>
            <Typography
              color="text.secondary"
              fontSize=".875rem"
              lineHeight="1.3"
              sx={{ textShadow: "1px 1px 2px black" }}
            >
              {raceTypes[character.raceType]} {genderTypes[character.genderType]}
            </Typography>
          </Box>
          <Box alignItems="center" display="flex">
            <Box
              component={PowerIcon}
              fill="#ffd600"
              sx={{ height: "8px", width: "8px" }}
            />
            <Typography color="#ffd600">1800</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CharacterItem
