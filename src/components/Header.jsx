import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = (props) => {
    console.log("props>", props)
    const [activeTab, setTab] = useState(0)
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
    const location = null
    useEffect(() => {
        location = props.match.path
        switch (location) {
            case '/profile':
                setTab(1)
                break
            case '/api':
                setTab(2)
                break
            default:
                setTab(0)
        }
    }, [location])

    const classes = useStyles()

    return (
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant="h1">Header</Typography>
                <Tabs className={classes.tabs} value={activeTab} >
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