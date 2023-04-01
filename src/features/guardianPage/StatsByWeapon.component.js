import React from "react"

import { useTheme } from "@emotion/react"
import { Box, Skeleton, Tooltip, Typography } from "@mui/material"

import { ReactComponent as AutoRifleIcon } from "../../images/icons/auto-rifle.svg"
import { ReactComponent as BeamWeaponIcon } from "../../images/icons/beam-weapon.svg"
import { ReactComponent as BowIcon } from "../../images/icons/bow.svg"
import { ReactComponent as FusionRifleIcon } from "../../images/icons/fusion-rifle.svg"
// import { ReactComponent as GlaiveIcon } from "../../images/icons/"
import { ReactComponent as GreandeIcon } from "../../images/icons/grenade.svg"
import { ReactComponent as GrenadeLauncherIcon } from "../../images/icons/grenade-launcher-field-forged.svg"
import { ReactComponent as HandCanonIcon } from "../../images/icons/hand-cannon.svg"
import { ReactComponent as MachineGunIcon } from "../../images/icons/machinegun.svg"
import { ReactComponent as MeleeIcon } from "../../images/icons/melee.svg"
import { ReactComponent as PulseRifleIcon } from "../../images/icons/pulse-rifle.svg"
import { ReactComponent as RocketLauncherIcon } from "../../images/icons/rocket-launcher.svg"
import { ReactComponent as ScoutRifleIcon } from "../../images/icons/scout-rifle.svg"
import { ReactComponent as ShotgunIcon } from "../../images/icons/shotgun.svg"
import { ReactComponent as SidearmIcon } from "../../images/icons/sidearm.svg"
import { ReactComponent as SMGIcon } from "../../images/icons/smg.svg"
import { ReactComponent as SniperIcon } from "../../images/icons/sniper-rifle.svg"
import { ReactComponent as SwordIcon } from "../../images/icons/sword-heavy.svg"
import { ReactComponent as IntellectIcon } from "../../images/icons/intellect.svg"
import { ReactComponent as LinearFusionIcon } from "../../images/icons/wire-rifle.svg"

const StatsByWeapon = ({ stats }) => {
  const theme = useTheme()

  const statsArray = [
    {
      icon: {
        image: AutoRifleIcon,
        height: "14px",
        width: "40px",
      },
      tooltip: "Auto rifle kills",
      value: stats ? stats.weaponKillsAutoRifle.basic.value : null,
    },
    {
      icon: {
        image: BeamWeaponIcon,
        height: "16px",
        width: "40px",
      },
      tooltip: "Beam weapon kills",
      value: stats ? stats.weaponKillsBeamRifle.basic.value : null,
    },
    {
      icon: {
        image: BowIcon,
        height: "14px",
        width: "44px",
      },
      tooltip: "Bow kills",
      value: stats ? stats.weaponKillsBow.basic.value : null,
    },
    {
      icon: {
        image: FusionRifleIcon,
        height: "16px",
        width: "36px",
      },
      tooltip: "Fusion rifle kills",
      value: stats ? stats.weaponKillsFusionRifle.basic.value : null,
    },
    {
      icon: {
        image: SwordIcon,
        height: "12px",
        width: "45px",
      },
      tooltip: "Glaive kills",
      value: stats ? stats.weaponKillsGlaive.basic.value : null,
    },
    {
      icon: {
        image: GreandeIcon,
        height: "16px",
        width: "16px",
      },
      tooltip: "Grenade kills",
      value: stats ? stats.weaponKillsGrenade.basic.value : null,
    },
    {
      icon: {
        image: GrenadeLauncherIcon,
        height: "16px",
        width: "28px",
      },
      tooltip: "Grenade launcher kills",
      value: stats ? stats.weaponKillsGrenadeLauncher.basic.value : null,
    },
    {
      icon: {
        image: HandCanonIcon,
        height: "14px",
        width: "27px",
      },
      tooltip: "Hand canon kills",
      value: stats ? stats.weaponKillsHandCannon.basic.value : null,
    },
    {
      icon: {
        image: MachineGunIcon,
        height: "14px",
        width: "42px",
      },
      tooltip: "Machine gun kills",
      value: stats ? stats.weaponKillsMachineGun.basic.value : null,
    },
    {
      icon: {
        image: MeleeIcon,
        height: "20px",
        width: "20px",
      },
      tooltip: "Melee kills",
      value: stats ? stats.weaponKillsMelee.basic.value : null,
    },
    {
      icon: {
        image: PulseRifleIcon,
        height: "14px",
        width: "38px",
      },
      tooltip: "Pulse rifle kills",
      value: stats ? stats.weaponKillsPulseRifle.basic.value : null,
    },
    {
      icon: {
        image: RocketLauncherIcon,
        height: "14px",
        width: "40px",
      },
      tooltip: "Rocket launcher kills",
      value: stats ? stats.weaponKillsRocketLauncher.basic.value : null,
    },
    {
      icon: {
        image: ScoutRifleIcon,
        height: "14px",
        width: "53px",
      },
      tooltip: "Scout rifle kills",
      value: stats ? stats.weaponKillsScoutRifle.basic.value : null,
    },
    {
      icon: {
        image: ShotgunIcon,
        height: "12px",
        width: "38px",
      },
      tooltip: "Shotgun kills",
      value: stats ? stats.weaponKillsShotgun.basic.value : null,
    },
    {
      icon: {
        image: SidearmIcon,
        height: "14px",
        width: "19px",
      },
      tooltip: "Sidearm kills",
      value: stats ? stats.weaponKillsSideArm.basic.value : null,
    },
    {
      icon: {
        image: SniperIcon,
        height: "12px",
        width: "45px",
      },
      tooltip: "Sniper kills",
      value: stats ? stats.weaponKillsSniper.basic.value : null,
    },
    {
      icon: {
        image: SMGIcon,
        height: "14px",
        width: "31px",
      },
      tooltip: "SMG kills",
      value: stats ? stats.weaponKillsSubmachinegun.basic.value : null,
    },
    {
      icon: {
        image: IntellectIcon,
        height: "20px",
        height: "20px",
      },
      tooltip: "Super kills",
      value: stats ? stats.weaponKillsSuper.basic.value : null,
    },
    {
      icon: {
        image: SwordIcon,
        height: "12px",
        width: "45px",
      },
      tooltip: "Sword kills",
      value: stats ? stats.weaponKillsSword.basic.value : null,
    },
    {
      icon: {
        image: LinearFusionIcon,
        height: "14px",
        width: "36px",
      },
      tooltip: "Linear fusion kills",
      value: stats ? stats.weaponKillsTraceRifle.basic.value : null,
    },
  ]

  return (
    <Box
      alignItems="center"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      p={1}
    >
      {statsArray
        .sort((a, b) => (a.value > b.value ? -1 : b.value > a.value ? 1 : 0))
        .map((stat, i) => (
          <Tooltip key={i} title={stat.tooltip}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
              px={1}
              sx={{
                borderRadius: "6px",
                backgroundColor: "rgba(255, 255, 255, .1)",
                padding: "3px 6px",
                m: 0.5,
              }}
            >
              <Box
                component={stat.icon.image}
                fill={theme.palette.text.primary}
                height={stat.icon.height}
                mr={0.5}
                width={stat.icon.width}
              />
              {stat.value ? (
                <Typography fontSize=".875rem">
                  {stat.value.toLocaleString()}
                </Typography>
              ) : (
                <Skeleton height={24} width={40} />
              )}
            </Box>
          </Tooltip>
        ))}
    </Box>
  )
}

export default StatsByWeapon
