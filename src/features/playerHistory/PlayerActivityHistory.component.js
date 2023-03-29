import React, { useEffect, useState } from "react"
import { DateTime } from "luxon"
import axios from "axios"

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
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
  // const [test, setTest] = useState(null)

  useEffect(() => {
    function fetchActivityHistory() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${membershipId}/Character/${activeCharId}/Stats/Activities/?page=0`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setHistory(res.data.Response.activities)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchActivityHistory()
  }, [membershipType, membershipId, activeCharId])

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
  //         setTest(res.data.Response)
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
        <TableHead>
          <TableRow>
            <TableCell>Period</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>Location (ref id)</TableCell>
            <TableCell>Activity Type</TableCell>
            <TableCell>Playlist (dir hash)</TableCell>
            <TableCell>Membership Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.length > 0 &&
            history.map((activity) => (
              <TableRow key={activity.activityDetails.instanceId}>
                <TableCell>
                  {DateTime.fromISO(activity.period).toFormat(
                    "ccc dd LLL yyyy"
                  )}
                </TableCell>
                <TableCell>{getModeDisplayName(activity.activityDetails.mode)}</TableCell>
                <TableCell>
                  {
                    DestinyActivityDefinition[
                      activity.activityDetails.referenceId
                    ].displayProperties.name
                  }
                </TableCell>
                <TableCell>
                  {
                    DestinyActivityDefinition[
                      activity.activityDetails.referenceId
                    ].activityTypeHash
                  }
                </TableCell>
                <TableCell>
                  {
                    DestinyActivityDefinition[
                      activity.activityDetails.directorActivityHash
                    ].displayProperties.name
                  }
                </TableCell>
                <TableCell>{activity.activityDetails.membershipType}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PlayerActivityHistory
