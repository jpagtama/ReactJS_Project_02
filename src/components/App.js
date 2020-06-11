import React, { useState, useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { ThemeProvider } from '@material-ui/core'
import customTheme from '../assets/themes/customTheme'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const[userAuth] = useState({
    firstName: "Bruce",
    lastName: "Wayne"
  })
  const [authenticated, setAuthenticated] = useState(false)

  const handleAuth = (event) => {
    setAuthenticated(prevState => !prevState)
    console.log("handled auth: ", authenticated)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Header user={userAuth} handleAuth={handleAuth} authenticated={authenticated} />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App