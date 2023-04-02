import React, { useState } from "react"

import { Box, Fade, IconButton, Paper, Popper, Typography } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import { ReactComponent as PowerIcon } from "../../images/icons/power2.svg"

import MoreInfoStats from "./MoreInfoStats.component"

const MoreInfo = ({ displayName, characterClass, lightLevel, extended }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const openPopper = (e) => setAnchorEl(e.currentTarget)
  const closePopper = (e) => setAnchorEl(null)
  const open = Boolean(anchorEl)
  const id = open ? "simple-popper" : undefined

  return (
    <>
      <IconButton aria-describedby={id} onMouseOver={openPopper} onMouseOut={closePopper} size="small">
        <MoreVertIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ maxWidth: "300px", p: 1 }}>
              <Box alignItems="center" display="flex" overflow="hidden" whiteSpace="nowrap">
                <Typography fontSize=".75rem" overflow="hidden" textOverflow="ellipsis">{displayName}</Typography>
                <Box alignItems="center" display="flex" pl={1}>
                  <Box
                    component={PowerIcon}
                    fill="#ffd600"
                    sx={{ height: "8px", width: "8px" }}
                  />
                  <Typography color="#ffd600" fontSize=".75rem">
                    {lightLevel}
                  </Typography>
                </Box>
                <Typography color="text.secondary" fontSize=".75rem" pl={1} pr={4}>{characterClass}</Typography>
              </Box>
              {extended && <MoreInfoStats extended={extended} />}
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default MoreInfo
