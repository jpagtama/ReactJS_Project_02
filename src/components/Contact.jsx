import React from 'react'
import { Grid, TextField } from '@material-ui/core'

const Contact = () => {
    return (
        <React.Fragment>
            <Grid container spacing={2} style={{marginTop:"2em"}} justify="center">
                <Grid item md={6} >
                    <TextField name="firstName" variant="outlined" label="First Name" />
                </Grid>
                <Grid item md={6} >
                    <TextField name="lastName" variant="outlined" label="Last Name" />
                </Grid>
            </Grid>
            <Grid container justify="center" style={{marginTop:"1em"}}>
                <Grid item md={12}>
                    <TextField name="email" variant="outlined" label="Email" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Contact