import React from 'react'
import { AppBar, Toolbar, Tabs, Tab, makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_scbox.svg'

const Header = (props) => {
    const useStyles = makeStyles(theme => {
        return ({
            tabs: {
                marginLeft: "auto",
                marginRight: "2em"
            },
            toolbar: {
                ...theme.mixins.toolbar,
                height: '7em'
            }
        })
    })
    const classes = useStyles()

    const logInOut = props.authenticated? "Profile": "Log In"

    return (
        <React.Fragment>
        <AppBar >
            <Toolbar disableGutters>
                <img src={logo} alt="Code in Strength Logo" height="85px" style={{margin:10}} />
                <Tabs className={classes.tabs} value={props.activeTab} onChange={props.activateTabHandler} >
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Profile" component={Link} to="/profile" />
                    <Tab label="API" component={Link} to="/api" />
                    <Tab label="Contact" component={Link} to="/contact" />
                </Tabs>
                <Button variant="contained" color="secondary" onClick={props.handleAuth} style={{marginRight:10}}>{logInOut}</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbar} ></div>
        </React.Fragment>
    )
}

export default Header