import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const [activeTab, setTab] = useState(0)
    const pathname = window.location.pathname

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
    useEffect(() => {
        switch (pathname){
            case '/':
                setTab(0)
                break;
            case '/profile':
                setTab(1)
                break;
            case '/api':
                setTab(2)
                break;
            default:
                setTab(0)
        }
    }, [pathname])

    const logInOut = props.user.isLoggedIn? "Profile": "Log In"

    const tabHandler = (e, value) => {
        setTab(value)
    }
    const classes = useStyles()

    return (
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant="h1">Header</Typography>
                <Tabs className={classes.tabs} value={activeTab} onChange={tabHandler}>
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Profile" component={Link} to="/profile" />
                    <Tab label="API" component={Link} to="/api" />
                </Tabs>
                <Button variant="contained" color="secondary" onClick={props.handleAuth}>{logInOut}</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbar} ></div>
        </React.Fragment>
    )
}

export default Header