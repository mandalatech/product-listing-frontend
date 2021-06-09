import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { logoutUser, loginUser } from 'src/reducers/actions/user.actions'
import './scss/style.scss'
import Offline from './Offline'
import isEmpty from './validations/isEmpty'
import { getUserDetails } from './api/userRequests'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = (props) => {
  const history = useHistory()

  useEffect(() => {
    const key = localStorage.getItem('productListingUserKey')

    if (isEmpty(key)) {
      props.logoutUser()
    } else {
      const abortController = new AbortController()
      const signal = abortController.signal
      getUserDetails(signal, key).then(({ json, response }) => {
        if (response.ok) {
          const { email, pk } = json
          props.loginUser({
            userID: pk,
            token: key,
            email: email,
          })
        } else {
          props.logoutUser()
        }
      })
    }
  }, [])

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {window.navigator.onLine ? (
            <>
              {props.isAuthenticated ? (
                <Route
                  path="/"
                  name="Home"
                  render={(props) => <TheLayout {...props} />}
                />
              ) : (
                <Route
                  exact
                  path="/"
                  name="Login Page"
                  render={(props) => <Login {...props} />}
                />
              )}

              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
              <Route
                exact
                path="/500"
                name="Page 500"
                render={(props) => <Page500 {...props} />}
              />
            </>
          ) : (
            <Route
              path="/"
              name="offline"
              render={(props) => <Offline {...props} />}
            />
          )}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  }
}

export default connect(mapStateToProps, { logoutUser, loginUser })(App)
