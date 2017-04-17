import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import requireAuth from './utils/RequireAuth'
import requireUnauth from './utils/RequireUnauth'
import App from './containers/App'
import Home from './containers/HomePage'
import SignIn from './containers/SignInPage'
import SignUp from './containers/SignUpPage'
import NotFound from './containers/NotFoundPage'
import UserSettingsPage from './containers/UserSettingsPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} onEnter={requireAuth} />
    <Route path='/user/edit' component={UserSettingsPage} onEnter={requireAuth} />
    <Route path='/sign_in' component={SignIn} onEnter={requireUnauth} />
    <Route path='/sign_up' component={SignUp} onEnter={requireUnauth} />
    <Route path='*' component={NotFound} />
  </Route>
)
