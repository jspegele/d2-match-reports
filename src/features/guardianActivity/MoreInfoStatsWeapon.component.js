import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get } from "firebase/database"

import { Box, Skeleton, Typography } from "@mui/material"

const MoreInfoStatsWeapon = ({ referenceId }) => {
  const database = getDatabase()
  const [weapon, setWeapon] = useState({})

  useEffect(() => {
    get(ref(database, `DestinyInventoryItemDefinition/${referenceId}/displayProperties`))
      .then((snap) => {
        setWeapon(snap.val())
      })
      .catch((error) => {
        console.error(error)
      })
  }, [database, referenceId])

  return (
    <Box alignItems="center" display="flex">
      {weapon.icon ? (
        <Box
          component="img"
          alt=""
          src={`https://bungie.net/${weapon.icon}`}
          borderRadius="3px"
          height="16px"
          mr={1}
          width="16px"
        />
      ) : (
        <Skeleton height={16} variant="rectangle" width={16} sx={{ marginRight: 1 }} />
      )}
      {weapon.name ? (
        <Typography fontSize=".75rem" overflow="hidden" textOverflow="ellipsis">
          {weapon.name}
        </Typography>
      ) : (
        <Skeleton height={16}  width={100} />
      )}
    </Box>
  )
}
 
export default MoreInfoStatsWeapon
