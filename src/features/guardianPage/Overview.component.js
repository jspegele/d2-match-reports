import React from "react"

import { Box, Typography } from "@mui/material"

import travellerIcon from "../../images/icons/traveller.svg"

const Overview = ({ profile }) => (
  <Box>
    <Box alignItems="center" display="flex" justifyContent="center">
      <Box
        sx={{
          alignItems: "center",
          backgroundImage: `url("${travellerIcon}")`,
          backgroundPosition: "center",
          backgroundSize: "36px 36px",
          color: "#121212",
          display: "flex",
          fontSize: "1.5rem",
          height: "36px",
          justifyContent: "center",
          letterSpacing: "-2px",
          mr: 2,
          pb: "4px",
          pr: "2px",
          width: "36px",
        }}
      >
        {profile.data.currentGuardianRank}
      </Box>
      <Box>
        <Typography component="span" fontSize="2.25rem" textAlign="center">
          {profile.data.userInfo.bungieGlobalDisplayName}
        </Typography>
        <Typography component="span" color="text.secondary" fontSize="1rem" pl={.5}>
          #{profile.data.userInfo.bungieGlobalDisplayNameCode}{" "}
        </Typography>
      </Box>
    </Box>
  </Box>
)

export default Overview
