import React from 'react'
import { useParams } from "react-router-dom"

import { Box } from "@mui/material"

const PlayerHistoryPage = () => {
  const { id } = useParams()

  return (
    <Box>Activity History for: {id}</Box>
  )
}

export default PlayerHistoryPage
