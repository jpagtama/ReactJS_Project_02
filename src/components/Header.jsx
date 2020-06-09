import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
    const useStyles = makeStyles(theme => {
        return ({
            tabs: {
                marginLeft: "auto"
            },
            toolbar: {
                ...theme.mixins.toolbar,
                height: '7em'
            }
        })
    })
    const classes = useStyles()

    return (
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant="h1">Header</Typography>
                <Tabs className={classes.tabs} value={0}>
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Profile" component={Link} to="/profile" />
                    <Tab label="API" component={Link} to="/api" />
                </Tabs>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbar} ></div>
        </React.Fragment>
    )
}

export default Header