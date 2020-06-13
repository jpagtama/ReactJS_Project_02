import React from 'react'
import { Grid, TextField } from '@material-ui/core'

const Contact = () => {
    return (
        <Grid container spacing={2} >
            <Grid item md={6} >
                <TextField name="firstName" variant="outlined" label="First Name" />
            </Grid>
            <Grid item md={6} >
                <TextField name="lastName" variant="outlined" label="Last Name" />
            </Grid>

        </Grid>
    )
}

export default Contact