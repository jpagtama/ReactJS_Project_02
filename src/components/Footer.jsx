import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.sailor,
        color: theme.palette.common.white,
        width: "100%",
        padding: "2em"
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}><Typography>Example Footer</Typography></footer>
    )
}

export default Footer