import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    "fontFamily": `"Open Sans", "Arial", "Helvetica", sans-serif`,
   },
  palette: {
    mode: 'dark',
  }
})

const CustomizedTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
 
export default CustomizedTheme
