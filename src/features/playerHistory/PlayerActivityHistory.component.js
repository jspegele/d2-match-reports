import React, { useEffect, useState } from "react"
import axios from "axios"
import { DateTime } from "luxon"

import { Box, Button, Typography } from "@mui/material"

import PlayerActivityHistoryRow from "./PlayerActivityHistoryRow.component"

const PlayerActivityHistory = ({
  characters,
  membershipType,
  membershipId,
}) => {
  const [loading, setLoading] = useState(true)
  const [history, setHistory] = useState([])
  const [page, setPage] = useState(0)
  const groupSize = 25
  const [numRows, setNumRows] = useState(groupSize)
  const [mode, setMode] = useState(5)
  // mode=5 is all pvp. for all valid values see Destiny.HistoricalStats.Definitions.DestinyActivityModeType

  useEffect(() => {
    async function fetchActivityHistory() {
      let charData = { 1: {}, 2: {}, 3: {} }
      let charIds = Object.keys(characters)
      for (let i = 0; i < charIds.length; i++) {
        await axios
          .get(
            `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/${charIds[i]}/Stats/Activities/?page=0&mode=${mode}`,
            {
              headers: {
                "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
              },
            }
          )
          .then((res) => {
            charData[i] = res.data.Response.activities.map((activity) => ({
              characterId: charIds[i],
              classHash: characters[charIds[i]].classHash,
              ...activity,
            }))
          })
          .catch((error) => {
            console.log(error.message)
          })
      }
      const combinedCharData = [...charData[0], ...charData[1], ...charData[2]]
      setHistory(
        combinedCharData.sort((a, b) =>
          a.period > b.period ? -1 : b.period > a.period ? 1 : 0
        )
      )
      setPage(1)
      setLoading(false)
    }

    fetchActivityHistory()
  }, [characters, membershipType, membershipId, mode])

  const handleLoadMore = async () => {
    let charData = { 1: {}, 2: {}, 3: {} }
    let charIds = Object.keys(characters)
    for (let i = 0; i < charIds.length; i++) {
      await axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/${charIds[i]}/Stats/Activities/?page=${page}&mode=${mode}`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          charData[i] = res.data.Response.activities.map((activity) => ({
            characterId: charIds[i],
            classHash: characters[charIds[i]].classHash,
            ...activity,
          }))
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
    const combinedCharData = [...charData[0], ...charData[1], ...charData[2]]
    setHistory((prevState) => [
      ...prevState,
      ...combinedCharData.sort((a, b) =>
        a.period > b.period ? -1 : b.period > a.period ? 1 : 0
      ),
    ])
    setPage((prevState) => prevState + 1)
    setNumRows((prevState) => prevState + groupSize)
    setLoading(false)
  }

  // useEffect(() => {
  //   function fetchActivityHistory() {
  //     axios
  //       .get(
  //         `https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/12889663020/ `,
  //         {
  //           headers: {
  //             "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data.Response)
  //       })
  //       .catch((error) => {
  //         console.log(error.message)
  //       })
  //   }

  //   fetchActivityHistory()
  // }, [])

  return (
    <Box sx={{ maxWidth: "800px", width: "100%" }}>
      {history
        .slice(0, numRows)
        .reduce(
          (acc, rec) =>
            acc.includes(
              DateTime.fromISO(rec.period).toFormat("cccc dd LLL yyyy")
            )
              ? acc
              : [
                  ...acc,
                  DateTime.fromISO(rec.period).toFormat("cccc dd LLL yyyy"),
                ],
          []
        )
        .map((period, i) => (
          <React.Fragment key={i}>
            <Box pb={1} pt={3} px={2} width="100%">
              <Typography textAlign="center">{period}</Typography>
            </Box>
            {history.slice(0, numRows).map((activity, j) => {
              if (
                DateTime.fromISO(activity.period).toFormat(
                  "cccc dd LLL yyyy"
                ) === period
              ) {
                return (
                  <PlayerActivityHistoryRow
                    key={activity.activityDetails.instanceId}
                    activity={activity}
                    alt={j % 2}
                  />
                )
              }
              return null
            })}
          </React.Fragment>
        ))}
      <Button
        color="primary"
        fullWidth
        id="infinite-scroll-button"
        onClick={handleLoadMore}
        variant="contained"
        sx={{ marginTop: 2 }}
      >
        Load more
      </Button>
    </Box>
  )
}

export default PlayerActivityHistory
