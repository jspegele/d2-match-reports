import React, { useContext } from 'react'

import { Box, Skeleton, Typography } from "@mui/material"

import { AppContext } from "../../contexts/AppContext"

const MoreInfoStatsWeapon = ({ referenceId }) => {
  const { selectInventoryItem } = useContext(AppContext)
  const item = selectInventoryItem(referenceId)

  return (
    <Box alignItems="center" display="flex">
      {item.icon ? (
        <Box
          component="img"
          alt=""
          src={`https://bungie.net/${item.icon}`}
          borderRadius="3px"
          height="16px"
          mr={1}
          width="16px"
        />
      ) : (
        <Skeleton height={16} variant="rectangle" width={16} sx={{ marginRight: 1 }} />
      )}
      {item.name ? (
        <Typography fontSize=".75rem" overflow="hidden" textOverflow="ellipsis">
          {item.name}
        </Typography>
      ) : (
        <Skeleton height={16}  width={100} />
      )}
    </Box>
  )
}
 
export default MoreInfoStatsWeapon
