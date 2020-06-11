import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, makeStyles } from '@material-ui/core'

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
            <Grid container justify="center" direction="row">
                <Grid item xs={3}>
                    <Grid container direction="column" spacing={2} justify="center" >
                        <Grid item className={classes.link} component={Link} to="/" >About Us</Grid>
                        <Grid item className={classes.link} component={Link} to="/faq" >FAQ</Grid>
                        <Grid item className={classes.link} component={Link} to="/contact" >Contact Us</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction="column" spacing={2} justify="center" >
                        <Grid item className={classes.link} component={Link} to="/" >Home</Grid>
                        <Grid item className={classes.link} component={Link} to="/profile" >Profile</Grid>
                        <Grid item className={classes.link} component={Link} to="/api" >API</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer