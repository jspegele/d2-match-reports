import React, { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

import { ReactComponent as HeadshotIcon } from "../../images/icons/headshot.svg"
import { ReactComponent as GrenadeIcon } from "../../images/icons/grenade.svg"
import { ReactComponent as IntellectIcon } from "../../images/icons/intellect.svg"
import { ReactComponent as MeleeIcon } from "../../images/icons/melee.svg"

import MoreInfoStatsWeapon from "./MoreInfoStatsWeapon.component"

const MoreInfoStats = ({ extended }) => {
  const theme = useTheme()
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
              <MoreInfoStatsWeapon referenceId={weapon.referenceId} />
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
          <Box alignItems="center" display="flex" marginRight="auto">
            <Box
              component={IntellectIcon}
              fill={theme.palette.text.primary}
              sx={{ height: "16px", mr: 1, width: "16px" }}
            />
            Super
          </Box>
          <Box px={1}>{killDetails.super}</Box>
          <Box alignItems="center" display="flex" width="3rem"></Box>
        </Box>
      )}
      {killDetails && killDetails.grenade > 0 && (
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Box alignItems="center" display="flex" marginRight="auto">
            <Box
              component={GrenadeIcon}
              fill={theme.palette.text.primary}
              sx={{ height: "16px", mr: 1, width: "16px" }}
            />
            Grenade
          </Box>
          <Box px={1}>{killDetails.grenade}</Box>
          <Box alignItems="center" display="flex" width="3rem"></Box>
        </Box>
      )}
      {killDetails && killDetails.melee > 0 && (
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Box alignItems="center" display="flex" marginRight="auto">
            <Box
              component={MeleeIcon}
              fill={theme.palette.text.primary}
              sx={{ height: "16px", mr: 1, width: "16px" }}
            />
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
