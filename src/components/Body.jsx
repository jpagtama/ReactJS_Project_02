import React, {Component, setState} from 'react'
import DataItem from './DataItem'
import { Grid,Button } from '@material-ui/core'

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      swData: [],
      page: 1
    }
  }

  fetchData() {
    this.setState(prevState => {
      prevState.isLoading = true
      return prevState
    })
    fetch(`https://swapi.dev/api/people/?page=${this.state.page}`)
    .then(response => response.json())
    .then(data => {
      if (data.results !== undefined && data.results.length) {
        this.setState(prevState => {
          prevState.isLoading = false
          prevState.swData.push(...data.results)
          ++prevState.page
          return prevState
        })
      } else {
        this.setState(prevState => {
          prevState.isLoading = false
          return prevState
        })
      }
    }).catch(() => {
      this.setState(prevState => {
        prevState.isLoading = false
        return prevState
      })
    })
  }

  clearResults() {
    this.setState(prevState => {
      prevState.swData = []
      prevState.page = 1
      prevState.isLoading = false
      return prevState
    })
  }

  render() {
    const isLoading = !this.state.isLoading? null: "Retrieving data..."
    const loadButton = <Button onClick={this.fetchData.bind(this)} variant="contained" >Execute Order 66</Button>
    const dataComponents = this.state.swData.length? this.state.swData.map(item => <DataItem key={item.url} data={item} />): null
    const clearButton = this.state.swData.length? <Button variant="contained" onClick={this.clearResults.bind(this)} style={{marginLeft:10}}>Clear</Button> : null

    return (
      <div style={{minHeight:550}}>
        <Grid container justify="center" style={{marginTop:75,marginBottom:25}}>
          <Grid item md={3}>
            {loadButton}
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
}


export default Body
