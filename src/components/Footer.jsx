import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, makeStyles, Hidden } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.sailor,
        color: theme.palette.common.white,
        width: "100%",
        padding: "2em"
    },
    link: {
        fontFamily: "Arial",
        fontSize: ".75rem",
        textDecoration: "none",
        color: theme.palette.common.white
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden xsDown>
                <Grid container justify="center" direction="row" spacing={2}>
                    <Grid item xs={6}>
                        <Grid container direction="column" spacing={2} alignItems="flex-end" >
                            <Grid item className={classes.link} component={Link} to="/" >About Us</Grid>
                            <Grid item className={classes.link} component={Link} to="/faq" >FAQ</Grid>
                            <Grid item className={classes.link} component={Link} to="/contact" >Contact Us</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" spacing={2} alignItems="flex-start" >
                            <Grid item className={classes.link} component={Link} to="/" >Home</Grid>
                            <Grid item className={classes.link} component={Link} to="/profile" >Profile</Grid>
                            <Grid item className={classes.link} component={Link} to="/api" >API</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </footer>
    )
}

export default Footer