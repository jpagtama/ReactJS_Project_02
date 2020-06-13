import React from 'react'
import { Grid, TextField, Typography, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const Contact = () => {
    const foodOptions = [
        { title: "Pizza" },
        { title: "Lumpia" },
        { title: "Tacos" },
        { title: "Chicken Wings" }
    ]

    return (
        <Grid container style={{padding:"1em",marginTop:"1em"}} justify="center" spacing={1}>
            <Grid container justify="center" spacing={1}>
                <Grid item sm={6} >
                    <Typography variant="h2">Contact Us</Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={1} style={{marginTop:"2rem"}}>
                <Grid item sm={3} xs={12} >
                    <TextField name="firstName" variant="outlined" label="First Name" fullWidth />
                </Grid>
                <Grid item sm={3} xs={12}>
                    <TextField name="lastName" variant="outlined" label="Last Name" fullWidth />
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={1} >
                <Grid item sm={6} xs={12}>
                    <TextField name="email" variant="outlined" label="Email" required fullWidth margin="normal"/>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={1}>
                <Grid item sm={3} xs={12}>
                    <Autocomplete id="foodId" options={foodOptions} getOptionLabel={(option) => option.title} renderInput={
                        (params) => <TextField {...params} label="Food" variant="outlined" fullWidth margin="normal"/>
                    }/>
                </Grid>
                <Grid item sm={3}>

                </Grid>
            </Grid>
            <Grid container justify="center" spacing={1} style={{marginTop:"1.5rem"}}>
                <Grid item sm={6} xs={12} >
                    <Grid container justify="flex-end">
                        <Button variant="contained" color="secondary" style={{marginTop:""}}>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact