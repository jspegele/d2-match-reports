import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DateTime } from "luxon"

import { Box, ListItemButton, Skeleton, Typography } from "@mui/material"

import { AppContext } from "../../contexts/AppContext"

const SearchResultsItemButton = ({
  characters = [],
  displayName = "",
  displayNameCode = "",
  primaryMembership,
}) => {
  const navigate = useNavigate()
  const { closeDrawer } = useContext(AppContext)
  const [mostRecentCharacter, setMostRecentCharacter] = useState(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    function fetchMostRecentCharacter() {
      setMostRecentCharacter(
        characters.reduce((max, character) =>
          max.dateLastPlayed > character.dateLastPlayed ? max : character
        )
      )
    }

    if (characters.length) fetchMostRecentCharacter()
  }, [characters])

  useEffect(() => {
    if (mostRecentCharacter) {
      setActive(
        Math.floor(
          Math.floor(
            DateTime.fromISO(mostRecentCharacter.dateLastPlayed).diffNow("days")
              .days * -1
          )
        )
      )
    }
  }, [mostRecentCharacter])

  const handleClick = () => {
    closeDrawer()
    navigate(
      `/${primaryMembership.membershipType}/${primaryMembership.membershipId}`
    )
  }

  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        alignItems: "center",
        borderBottom: "1px solid",
        borderBottomColor: "text.disabled",
        display: "flex",
        py: 2,
      }}
    >
      {mostRecentCharacter ? (
        <Box
          sx={{
            backgroundImage: `url("https://bungie.net${mostRecentCharacter.emblemPath}")`,
            backgroundSize: "cover",
            borderRadius: "4px",
            boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.25)",
            height: "36px",
            width: "36px",
          }}
        />
      ) : (
        <Skeleton
          variant="rectangular"
          height={36}
          width={36}
          sx={{
            borderRadius: "4px",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.25)",
          }}
        />
      )}
      <Box display="flex" flexDirection="column" justifyContent="center" ml={1}>
        <Typography component="span" lineHeight="1">
          {displayName}
          <Typography
            component="span"
            color="text.secondary"
            fontSize=".75rem"
            pl={0.5}
          >
            #{displayNameCode}
          </Typography>
        </Typography>
        {active === null ? (
          <Skeleton height={12} width={100} />
        ) : (
          <Typography
            component="span"
            color="text.secondary"
            fontSize=".75rem"
            lineHeight="1"
          >
            Active {active === 0 ? "today" : `${active} days ago`}
          </Typography>
        )}
      </Box>
    </ListItemButton>
  )
}

export default SearchResultsItemButton
