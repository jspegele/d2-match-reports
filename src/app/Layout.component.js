import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Layout = () => (
  <Box
    alignItems="center"
    display="flex"
    justifyContent="center"
    sx={{ minHeight: "100vh", minWidth: "320px", width: "100%" }}
  >
    <Outlet />
  </Box>
)

export default Layout
