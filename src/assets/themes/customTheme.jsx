import { createMuiTheme } from '@material-ui/core'

const sailorBlue = "#00203FFF"
const mint = "#ADEFD1FF"

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: sailorBlue
        },
        secondary: {
            main: mint
        }
    }, 
    typography: {
        h1: {
            fontWeight: 300
        }
    }
}) 


export default customTheme