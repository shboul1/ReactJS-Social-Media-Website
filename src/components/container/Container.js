import Navbar from '../Navbar/Navbar'
import React from 'react'
import Page from '../Page/Page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserDetails from '../UserDetails/UserDetails'
const Container = () => {
    return (
        <Router>
            <Navbar />
        <div>
            <Switch>
                <Route exact path='/'>
                <Page />
                </Route>
                <Route path='/profile'>
                    <UserDetails />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Container
