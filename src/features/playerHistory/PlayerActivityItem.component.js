import React, { useState } from "react"

import { Box } from "@mui/material"
import PlayerActivityRow from "./PlayerActivityRow.component"
import PlayerActivityDetails from "./PlayerActivityDetails.component"

const PlayerActivityItem = ({ activity, altRow }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Box>
      <PlayerActivityRow
        activity={activity}
        altRow={altRow}
        activeRow={showDetails}
        toggleShowDetails={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails && <PlayerActivityDetails activity={activity} />}
    </Box>
  )
}

export default PlayerActivityItem
