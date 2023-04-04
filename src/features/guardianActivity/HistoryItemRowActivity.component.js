import React, { useEffect, useState } from "react"
import axios from "axios"

import { config } from "../../app/constants"
import { Typography } from "@mui/material"

const HistoryItemRowActivity = ({ referenceId }) => {
  const [name, setName] = useState("")

  useEffect(() => {    
    function fetchManifest() {
      axios
        .get(`${config.MANIFEST_API_ROOT}/api/activity/${referenceId}/definition`)
        .then((res) => {
          setName(res.data.displayProperties.name)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchManifest()
  }, [])

  // DestinyActivityDefinition[activity.activityDetails.referenceId].displayProperties.name

  return (
    <Typography fontSize=".875rem">{name}</Typography>
  )
}
 
export default HistoryItemRowActivity
