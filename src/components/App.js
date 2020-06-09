import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { ThemeProvider } from '@material-ui/core'
import customTheme from '../assets/themes/customTheme'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App