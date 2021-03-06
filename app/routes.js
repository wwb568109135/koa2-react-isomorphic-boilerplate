import App from './containers/App'
import Picture from './components/Picture'
import Counter from './containers/Counter'
import Login from './components/Login'
import Reg from './components/Reg'
import Blog from './components/Blog'
import { Router, Route, browserHistory } from 'react-router'
import React from 'react'

export default (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path="picture" component={Picture} />
    <Route path="counter" component={Counter} />
    <Route path="login" component={Login} />
    <Route path="reg" component={Reg} />
    <Route path="blog" component={Blog} />
  </Route>
</Router>
)
