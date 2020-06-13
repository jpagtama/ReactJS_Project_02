import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
        <AppBar>
            <Toolbar>
                <Typography variant="h1">Header</Typography>
                <Tabs className={classes.tabs} value={props.activeTab} onChange={props.activateTabHandler} >
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Profile" component={Link} to="/profile" />
                    <Tab label="API" component={Link} to="/api" />
                    <Tab label="Contact" component={Link} to="/contact" />
                </Tabs>
                <Button variant="contained" color="secondary" onClick={props.handleAuth}>{logInOut}</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbar} ></div>
        </React.Fragment>
    )
}

export default Header