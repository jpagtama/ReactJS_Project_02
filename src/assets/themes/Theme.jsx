import { createMuiTheme } from '@material-ui/core'

const yellow = "#FFE81F"
const black = "#000000"

const theme = createMuiTheme({
  palette: {
    common: {
      yellow: `${yellow}`,
      black: `${black}`
    },
    primary: {
      main: `${black}`
    },
    secondary: {
      main: `${yellow}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300,
      color: `${yellow}`
    }
  }
})

export default theme
