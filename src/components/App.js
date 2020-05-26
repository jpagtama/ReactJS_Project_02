import React from 'react'
import Header from './Header'
import Body from './Body'
import { ThemeProvider } from '@material-ui/core'
import theme from '../assets/themes/Theme'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Header />
      <Body />
      </ThemeProvider>
    )
  }
}

export default App
