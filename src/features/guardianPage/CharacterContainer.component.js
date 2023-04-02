import React from "react"
import { Box, Typography } from "@mui/material"
import CharacterItem from "./CharacterItem.component"

const CharacterContainer = ({ characters }) => {
  const numChars = Object.keys(characters).length

  return (
    <Box pb={6}>
      <Typography
        fontSize=".875rem"
        pb={2}
        textAlign="center"
        textTransform="uppercase"
      >
        Characters
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={numChars === 3 ? "space-evenly" : "center"}
        marginX={-0.5}
      >
        {Object.keys(characters).map((characterId) => (
          <CharacterItem
            key={characterId}
            character={characters[characterId]}
            numChars={numChars}
          />
        ))}
      </Box>
    </Box>
  )
}

export default CharacterContainer
