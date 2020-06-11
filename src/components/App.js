import React, { useState, useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { ThemeProvider } from '@material-ui/core'
import customTheme from '../assets/themes/customTheme'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const[userAuth, setUserAuth] = useState({
    isLoggedIn: false,
    firstName: "Bruce",
    lastName: "Wayne"
  })

  const handleAuth = (event) => {
    console.log("reached handleAuth")
    setUserAuth(prevState => !prevState.isLoggedIn)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Header user={userAuth} handleAuth={handleAuth}/>
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App