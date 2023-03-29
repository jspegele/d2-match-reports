import React, { useEffect, useState } from "react"
import { DateTime } from "luxon"
import axios from "axios"

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"

import { getModeDisplayName } from "./getModeDisplayName"
import DestinyActivityDefinition from "../../manifests/DestinyActivityDefinition.json"

const PlayerActivityHistory = ({
  membershipType,
  membershipId,
  activeCharId,
}) => {
  const [history, setHistory] = useState([])
  const [page, setPage] = useState(0)
  const [mode, setMode] = useState(5)
  // mode=5 is all pvp. for all valid values see Destiny.HistoricalStats.Definitions.DestinyActivityModeType

  const handleAddPage = () => setPage((prevPage) => prevPage + 1)

  useEffect(() => {
    console.log('render')
  }, []);

  useEffect(() => {
    function fetchActivityHistory() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/${activeCharId}/Stats/Activities/?page=${page}&mode=${mode}`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          if (page === 0) {
            setHistory(res.data.Response.activities)
          } else {
            setHistory((prevState) => [
              ...prevState,
              ...res.data.Response.activities,
            ])
          }
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchActivityHistory()
  }, [membershipType, membershipId, activeCharId, page, mode])

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {history.length > 0 &&
            history.map((activity) => (
              <TableRow key={activity.activityDetails.instanceId}>
                <TableCell>
                  {DateTime.fromISO(activity.period).toFormat(
                    "ccc dd LLL yyyy"
                  )}
                </TableCell>
                <TableCell>
                  {getModeDisplayName(activity.activityDetails.mode)}
                </TableCell>
                <TableCell>
                  {
                    DestinyActivityDefinition[
                      activity.activityDetails.referenceId
                    ].displayProperties.name
                  }
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Button
        color="primary"
        fullWidth
        id="infinite-scroll-button"
        onClick={handleAddPage}
        variant="contained"
        sx={{ marginTop: 2 }}
      >
        <span className="disabled-text">Loading more items...</span>
        <span className="active-text">Show more</span>
      </Button>
    </TableContainer>
  )
}

export default PlayerActivityHistory
