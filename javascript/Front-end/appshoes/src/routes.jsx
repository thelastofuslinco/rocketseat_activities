import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from './pages/dashboard'
import Cart from './pages/cart'

export default function Router () {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/cart' component={Cart} />
    </Switch>
  )
}
