import React, { useState, useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Profile from './Profile'
import StarWars from './StarWars'
import Footer from './Footer'
import { ThemeProvider } from '@material-ui/core'
import customTheme from '../assets/themes/customTheme'
import { Route, Switch, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(0)
  const [authenticated, setAuthenticated] = useState(false)
  
  const[userAuth] = useState({
    firstName: "Bruce",
    lastName: "Wayne"
  })
  
  const handleAuth = () => {
    setAuthenticated(prevState => !prevState)
  }
  const activateTabHandler = (e, value) => {
    setActiveTab(value)
  }

    useEffect(() => {
      switch(location.pathname) {
        case '/':
          setActiveTab(0)
          break
        case '/profile':
          setActiveTab(1)
          break
        case '/api':
          setActiveTab(2)
          break
        default :
          setActiveTab(0)
      }
    }, [location.pathname])

  console.log(location.pathname, "<pathname from App")

  return (
    <ThemeProvider theme={customTheme}>
        <Header user={userAuth} handleAuth={handleAuth} authenticated={authenticated} activeTab={activeTab} activateTabHandler={activateTabHandler} />
        <div style={{minHeight:750}}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/api" component={StarWars} />
            </Switch>
        </div>
        <Footer />
    </ThemeProvider>
  )
}

export default App