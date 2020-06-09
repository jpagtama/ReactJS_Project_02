import React from 'react'
import Home from './Home'
import Profile from './Profile'
import StarWars from './StarWars'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/api" component={StarWars} />
        </Switch>
    )
}

export default Main