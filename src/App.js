import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  updateBrands,
  updateManufacturers,
  updateProductGroups,
  updateProducts,
} from 'src/reducers/actions/index'
import {
  setSettings,
  setSKUAutoGeneration,
} from 'src/reducers/actions/settings.actions'
import { getAllBrands } from './api/brandRequests'
import { getAllProductGroups } from './api/groupRequests'
import { getAllManufacturers } from './api/manufacturerRequests'
import { getAllProducts } from './api/ProductRequests'
import { getSKUSetting } from './api/skuRequests'
import './scss/style.scss'
import Offline from './Offline'

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
  const populateStore = async () => {
    props.setSettings({ user: '' })

    const controller = new AbortController()
    const signal = controller.signal
    if (window.navigator.onLine) {
      getAllProducts(signal).then(({ json, response }) => {
        if (response.ok) {
          props.updateProducts(json)
        }
      })

      getSKUSetting(signal).then(({ json, response }) => {
        if (response.ok) {
          // Negated
          const auto_generation = !json.can_user_generate
          props.setSKUAutoGeneration(auto_generation)
        }
      })

      getAllProductGroups(signal).then(({ response, json }) => {
        if (response.ok) {
          props.updateProductGroups(json)
        }
      })

      getAllBrands(signal).then(({ response, json }) => {
        if (response.ok) {
          props.updateBrands(json)
        }
      })

      getAllManufacturers(signal).then(({ response, json }) => {
        if (response.ok) {
          props.updateManufacturers(json)
        }
      })
    }
  }
  useEffect(() => {
    populateStore()
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

export default connect(mapStateToProps, {
  updateBrands,
  updateManufacturers,
  updateProductGroups,
  updateProducts,
  setSettings,
  setSKUAutoGeneration,
})(App)
