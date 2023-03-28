import { Box } from "@mui/material"

const Layout = ({ children }) => (
  <Box alignItems="center" display="flex" justifyContent="center" sx={{ minHeight: "100vh", minWidth: "320px", width: "100%", }}>
    {children}
  </Box>
)

export default Layout
