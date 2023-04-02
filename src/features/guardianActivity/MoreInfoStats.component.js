import React, { useEffect, useState } from "react"

import { Box, Grid, Typography } from "@mui/material"

import { ReactComponent as HeadshotIcon } from "../../images/icons/headshot.svg"

const MoreInfoStats = ({ extended }) => {
  const [killDetails, setKillDetails] = useState(null)

  useEffect(() => {
    function createKillDetailsObj() {
      const obj = {
        ability: extended.values.weaponKillsAbility.basic.value,
        grenade: extended.values.weaponKillsGrenade.basic.value,
        melee: extended.values.weaponKillsMelee.basic.value,
        super: extended.values.weaponKillsSuper.basic.value,
        weapons: [],
      }

      if (extended.weapons && extended.weapons.length) {
        extended.weapons.forEach((weapon) => {
          obj.weapons.push({
            referenceId: weapon.referenceId,
            // displayName: DestinyInventoryItemDefinition[weapon.referenceId].displayProperties.name,
            kills: weapon.values.uniqueWeaponKills.basic.value,
            precisionPercentage:
              weapon.values.uniqueWeaponKillsPrecisionKills.basic.displayValue,
          })
        })
      }

      setKillDetails(obj)
    }

    createKillDetailsObj()
  }, [extended])

  return (
    <Box fontSize=".75rem" pt={1} width="100%">
      {killDetails && killDetails.weapons.length > 0 && (
        killDetails.weapons.sort((a, b) => a.kills < b.kills ? 1 : a.kills > b.kills ? -1 : 0).map((weapon, i) => (
          <Box key={weapon.referenceId} alignItems="center" display="flex" justifyContent="flex-end">
            <Box marginRight="auto" overflow="hidden" whiteSpace="nowrap">
              <Typography fontSize=".75rem" overflow="hidden" textOverflow="ellipsis">
                Weapon {i+1}
              </Typography>
            </Box>
            <Box px={1}>{weapon.kills}</Box>
            <Box alignItems="center" display="flex" width="3rem">
              <Box
                component={HeadshotIcon}
                fill="#fff"
                mr={.25}
                sx={{ height: "14px", width: "14px" }}
              />
              {weapon.precisionPercentage}
            </Box>
          </Box>
        ))
      )}
      {killDetails && killDetails.super > 0 && (
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Box marginRight="auto">
            Super
          </Box>
          <Box px={1}>{killDetails.super}</Box>
          <Box alignItems="center" display="flex" width="3rem"></Box>
        </Box>
      )}
      {killDetails && killDetails.grenade > 0 && (
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Box marginRight="auto">
          Grenade
          </Box>
          <Box px={1}>{killDetails.grenade}</Box>
          <Box alignItems="center" display="flex" width="3rem"></Box>
        </Box>
      )}
      {killDetails && killDetails.melee > 0 && (
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Box marginRight="auto">
          Melee
          </Box>
          <Box px={1}>{killDetails.melee}</Box>
          <Box alignItems="center" display="flex" width="3rem"></Box>
        </Box>
      )}
    </Box>
  )
}

export default MoreInfoStats
