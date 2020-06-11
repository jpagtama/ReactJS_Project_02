import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.sailor,
        color: theme.palette.common.white,
        width: "100%"
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>Example Footer</footer>
    )
}

export default Footer