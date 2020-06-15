import { createMuiTheme } from '@material-ui/core'

const green = "#A7D129"
const darkGreen = "#616F39"
const darkestGreen = "#3E432E"
const black = "#000000"

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: black
        },
        secondary: {
            main: green
        },
        common: {
            black: `${black}`,
            green: `${green}`,
            darkGreen: `${darkGreen}`,
            darkestGreen: `${darkestGreen}`,
        }
    }, 
    typography: {
        h1: {
            fontWeight: 300
        }
    }
}) 


export default customTheme