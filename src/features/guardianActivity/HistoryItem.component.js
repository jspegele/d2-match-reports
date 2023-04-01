import React, { useState } from "react"

import { Box } from "@mui/material"
import HistoryItemRow from "./HistoryItemRow.component"
import Details from "./Details.component"

const HistoryItem = ({ activity, altRow, mode }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Box>
      <HistoryItemRow
        activity={activity}
        altRow={altRow}
        activeRow={showDetails}
        mode={mode}
        toggleShowDetails={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails && <Details activity={activity} mode={mode} />}
    </Box>
  )
}

export default HistoryItem
