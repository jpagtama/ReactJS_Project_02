import React, {useState} from 'react'
import DataItem from './DataItem'
import { Grid,Button } from '@material-ui/core'

const Body = () => {

  const [loadingState, setLoading] = useState({isLoading:false})
  const [swapiState, setSwapi] = useState([])
  const [pageState, setPage] = useState(1)


  const fetchData = () => {
    setLoading({isLoading: true})
    fetch(`https://swapi.dev/api/people/?page=${pageState}`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length) {
        let stateCopy = [...swapiState]
        stateCopy.push(...data.results)
        setSwapi(stateCopy)
        setPage(prevPage => ++prevPage)
      }
    })
    setLoading({isLoading: false})
  }

  const clearResults = () => {
    setSwapi([])
    setPage(1)
  }

  const isLoading = !loadingState.isLoading? "": "Retrieving data..."
  const dataComponents = swapiState.length? swapiState.map(item => <DataItem key={item.url} data={item} />): ""
  const clearButton = swapiState.length? <Button variant="contained" onClick={clearResults} style={{marginLeft:10}}>Clear</Button> : null

  return (
    <div style={{minHeight:550}}>
      <Grid container justify="center" style={{marginTop:75,marginBottom:25}}>
        <Grid item>
          <Button onClick={fetchData} variant="contained" >Fetch Data</Button>
          {clearButton}
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
