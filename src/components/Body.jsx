import React, {useState} from 'react'
import { Grid,Button } from '@material-ui/core'

const Body = () => {

  const [loadingState, setLoading] = useState({isLoading:false})
  const [swapiState, setSwapi] = useState([])

  const fetchData = () => {
    setLoading({isLoading: true})
    fetch("https://swapi.dev/api/people")
    .then(response => response.json())
    .then(data => {
      console.log(data.results, "<data")
    })
    setLoading({isLoading: false})
  }

  const isLoading = !loadingState.isLoading? "": "Retrieving data..."

  return (
    <Grid container justify="center" style={{minHeight:550,paddingTop:25}}>
      <Grid item>
        <Button onClick={fetchData} variant="contained" >Fetch Data</Button>
      </Grid>
      <Grid container justify="center">
        <Grid item md={2}>
          {isLoading}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Body
