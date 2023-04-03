import React, { useEffect, useState } from "react"
import axios from "axios"

import { Box, Link, Typography } from "@mui/material"

import { config } from "../../app/constants"

const ManifestPage = () => {
  const [manifest, setManifest] = useState(null)

  useEffect(() => {    
    function fetchManifest() {
      axios
        .get(`${config.MANIFEST_API_ROOT}/api/manifest/get`)
        .then((res) => {
          setManifest(res.data.Response)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchManifest()
  }, [])

  useEffect(() => {    
    function fetchManifest() {
      axios
        .get(`${config.MANIFEST_API_ROOT}/api/manifest/update`)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    fetchManifest()
  }, [])

  return (
    <Box margin="0 auto" p={2} width="100%">
      <Typography>Manifest Page</Typography>
      {manifest && (
        Object.keys(manifest.jsonWorldComponentContentPaths.en).map(key => (
          <Box key={key} mt={1}>
            <Typography color="secondary.main">{key}:{" "}</Typography>
            <Link href={`https://bungie.net${manifest.jsonWorldComponentContentPaths.en[key]}`} target="_blank" rel="noreferrer" sx={{ textDecoration: "none" }}>
              <Typography color="warning.main">{manifest.jsonWorldComponentContentPaths.en[key]}</Typography>
            </Link>
          </Box>
        ))
      )}
    </Box>
  )
}

export default ManifestPage
