import React, {useState} from 'react'
import DataItem from './DataItem'
import { Grid,Button } from '@material-ui/core'

const Body = () => {

  const [loadingState, setLoading] = useState({isLoading:false})
  const [swapiState, setSwapi] = useState([])

  const fetchData = () => {
    setLoading({isLoading: true})
    fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(data => {
      setSwapi(data.results)
      console.log(data.results, "<data")
    })
    setLoading({isLoading: false})
  }

  const isLoading = !loadingState.isLoading? "": "Retrieving data..."
  const dataComponents = swapiState.length? swapiState.map(item => <DataItem data={item} />): ""

  return (
    <div style={{minHeight:550}}>
      <Grid container justify="center" style={{marginTop:75,marginBottom:25}}>
        <Grid item>
          <Button onClick={fetchData} variant="contained" >Fetch Data</Button>
        </Grid>
      </Grid>
      <Grid container justify="center" >
        <Grid item md={2}>
          {isLoading}
        </Grid>
      </Grid>
      <Grid container justify="flex-start" style={{marginBottom:25}}>
          {dataComponents}
      </Grid>
    </div>
  )
}

export default Body
