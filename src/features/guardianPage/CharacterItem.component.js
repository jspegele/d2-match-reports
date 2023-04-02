import React from "react"

import { Box, Typography, useMediaQuery } from "@mui/material"

import { classTypes, genderTypes, raceTypes } from "../../app/BungieEnumValues"
import { ReactComponent as PowerIcon } from "../../images/icons/power2.svg"

const CharacterItem = ({ character, numChars }) => {
  const isSmall = useMediaQuery("(min-width: 600px)")
  const isLarge = useMediaQuery("(min-width: 1200px)")

  return (
    <Box p={0.5} width={isSmall ? numChars === 3 ? "33%" : "40%" : "100%"}>
      <Box
        sx={{
          background: `url("https://bungie.net/${character.emblemBackgroundPath}")`,
          backgroundSize: "cover",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.25)",
          height: "76px",
          width: "100%",
          ...(isSmall && !isLarge
            ? {
              backgroundPosition: "center left -10px",
              padding: "12px 6px 12px 56px",
            }
            : {
              backgroundPosition: "center left",
              padding: "12px 6px 12px 70px",
            }),
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box overflow="hidden" pr={1} whiteSpace="nowrap">
            <Typography
              fontSize={isSmall && !isLarge ? "1.125rem" : "1.25rem"}
              lineHeight="1.1"
              overflow="hidden"
              textOverflow="ellipsis"
              sx={{ textShadow: "1px 1px 2px black" }}
            >
              {classTypes[character.classType]}
            </Typography>
            <Typography
              color="text.secondary"
              fontSize={isSmall && !isLarge ? ".75rem" : ".875rem"}
              lineHeight="1.3"
              overflow="hidden"
              textOverflow="ellipsis"
              sx={{ textShadow: "1px 1px 2px black" }}
            >
              {raceTypes[character.raceType]}{" "}
              {genderTypes[character.genderType]}
            </Typography>
          </Box>
          <Box alignItems="center" display="flex">
            <Box
              component={PowerIcon}
              fill="#ffd600"
              sx={{ height: "8px", width: "8px" }}
            />
            <Typography color="#ffd600" fontSize={isSmall && !isLarge ? ".875rem" : "1rem"}>
              {character.light}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CharacterItem
