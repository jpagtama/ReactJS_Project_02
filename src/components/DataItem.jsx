import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'

const DataItem = (props) => {
  return (
    <Grid item md={4} >
      <Paper elevation={5} style={{margin:5,padding:5}}>
        <Typography variant="h4" style={{color:"red"}}>
          {props.data.name}
        </Typography>
        <Typography>
          Gender: {props.data.gender}
        </Typography>
        <Typography>
          Hair Color: {props.data.hair_color}
        </Typography>
        <Typography>
          Height: {props.data.height}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default DataItem
