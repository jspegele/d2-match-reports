import React, { useState } from "react"

import { Box } from "@mui/material"
import HistoryItemRow from "./HistoryItemRow.component"
import Details from "./Details.component"

const HistoryItem = ({ activity, altRow }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Box>
      <HistoryItemRow
        activity={activity}
        altRow={altRow}
        activeRow={showDetails}
        toggleShowDetails={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails && <Details activity={activity} />}
    </Box>
  )
}

export default HistoryItem
