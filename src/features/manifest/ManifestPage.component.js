import React, { useEffect, useState } from "react"
import axios from "axios"

import { Box, Typography } from "@mui/material"

const ManifestPage = () => {
  const [manifest, setManifest] = useState(null)

  useEffect(() => {    
    function fetchManifest() {
      axios
        .get(
          `https://www.bungie.net/Platform/Destiny2/Manifest/ `,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_BUNGIE_API_KEY,
            },
          }
        )
        .then((res) => {
          setManifest(res.data.Response)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchManifest()
  }, [])

  return (
    <Box>
      <Typography>Manifest Page</Typography>
    </Box>
  )
}

export default ManifestPage
