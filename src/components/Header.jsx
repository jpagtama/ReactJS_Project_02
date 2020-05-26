import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, useScrollTrigger, Slide } from '@material-ui/core'
import logo from '../assets/star-wars-logo.svg'

const Header = (props) => {

  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const useStyles = makeStyles(theme => {
    return {
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "7em"
      },
      logo: {
        height: "7em",
        padding: 15
      }
    }
  })
  const classes = useStyles()

  return (
    <React.Fragment>
      <HideOnScroll {...props} >
      <AppBar>
        <Toolbar disableGutters >
          <img src={logo} alt="Logo" className={classes.logo}/>
          <Typography variant="h3" ></Typography>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
