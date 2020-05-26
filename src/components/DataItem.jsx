import React, {Component} from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import thumbnail from '../assets/death-star.svg'

class DataItem extends Component {
  render() {
    return (
      <Grid item md={4} >
        <Paper elevation={5} style={{margin:5,padding:10}}>
          <Grid container justify="between">
            <Grid item md={8}>
            <Typography variant="h4" style={{color:"red"}}>
              {this.props.data.name}
            </Typography>
            <Typography>
              Birth Year: {this.props.data.birth_year}
            </Typography>
            <Typography>
              Gender: {this.props.data.gender}
            </Typography>
            <Typography>
              Hair Color: {this.props.data.hair_color}
            </Typography>
            <Typography>
              Height: {this.props.data.height}
            </Typography>
            </Grid>
            <Grid item style={{float:"right"}} md={4}>
              <img src={thumbnail} alt="thumbnail" style={{height:"7em"}}/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}
export default DataItem
