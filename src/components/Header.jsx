import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import logo from '../assets/death-star.svg'

const Header = (props) => {

  const useStyles = makeStyles(theme => {
    return {
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
      },
      logo: {
        height: "7em",
        padding: 5
      }
    }
  })
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar disableGutters >
          <img src={logo} alt="Logo" className={classes.logo}/>
          <Typography variant="h3" >Star Wars App</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
