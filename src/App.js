import React, { useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import { connect } from 'react-redux'
import { setSettings } from './reducers/actions/SettingsAction'
import {
  PRODUCT_GROUP_URL,
  BRAND_URL,
  MANUFACTURER_URL,
  PRODUCT_URL,
} from 'src/constants/urls'

import callAPI from 'src/api'

import {
  updateManufacturers,
  updateBrands,
  updateProductGroups,
  updateProducts,
} from 'src/reducers/actions/index'

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

const App = props => {
  useEffect(() => {
    props.setSettings({ user: '' })

    callAPI(PRODUCT_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateProducts(res)
      }
    })
    callAPI(PRODUCT_GROUP_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateProductGroups(res)
      }
    })
    callAPI(BRAND_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateBrands(res)
      }
    })
    callAPI(MANUFACTURER_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateManufacturers(res)
      }
    })
  }, [])

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={props => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={props => <Register {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={props => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={props => <Page500 {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={props => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default connect(
  null,
  {
    updateBrands,
    updateManufacturers,
    updateProductGroups,
    updateProducts,
    setSettings,
  }
)(App)
