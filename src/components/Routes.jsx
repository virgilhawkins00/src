import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Router>
            <link to='/'>Dashboard</link>
            <link to='/customers'>Customers</link>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Router>
    )
}

export default Routes