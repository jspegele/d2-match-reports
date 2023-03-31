import React from "react"

import { Box, Typography } from "@mui/material"

const Overview = ({ profile }) => (
  <Box>
    <Box textAlign="center">
      <Typography component="span" fontSize="2.25rem" pb={3} textAlign="center">
        {profile.profile.data.userInfo.bungieGlobalDisplayName}
      </Typography>
      <Typography component="span" color="text.secondary" fontSize="1rem" pl={.5}>
        #{profile.profile.data.userInfo.bungieGlobalDisplayNameCode}{" "}
      </Typography>
    </Box>
  </Box>
)

export default Overview
