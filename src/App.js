import React, { useEffect } from 'react'
import { Route, Switch, Router, HashRouter } from 'react-router-dom'
import './scss/style.scss'
import { connect } from 'react-redux'
import {
  PRODUCT_GROUP_URL,
  BRAND_URL,
  MANUFACTURER_URL,
} from 'src/constants/urls'
import history from './History'
import callAPI from 'src/api'

import { getAllProducts, getProductBrands } from 'src/api/ProductRequests'
import { getSKUSetting } from 'src/api/skuRequests'

import {
  updateManufacturers,
  updateBrands,
  updateProductGroups,
  updateProducts,
} from 'src/reducers/actions/index'

import {
  setSettings,
  setSKUAutoGeneration,
} from 'src/reducers/actions/SettingsAction'

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
  useEffect(async () => {
    props.setSettings({ user: '' })
    console.log('user fetch')
    // const controller = new AbortController()
    // const signal = controller.signal

    // Get all list of products
    getAllProducts().then(({ json, response }) => {
      if (response.ok) {
        props.updateProducts(json)
      }
    })

    getSKUSetting().then(({ json, response }) => {
      if (response.ok) {
        // Negated
        const auto_generation = !json.can_user_generate
        props.setSKUAutoGeneration(auto_generation)
      }
    })

    callAPI(PRODUCT_GROUP_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        console.log('groups[test]', res)
        props.updateProductGroups(res)
      }
    })

    await getProductBrands().then(res => {
      console.log(' brands[test]', res)
      if (res.message && res.message === 'Network Error') {
      } else {
        console.log(' brands[test]', res)
        props.updateBrands(res.json)
      }
    })

    // callAPI(BRAND_URL, 'get').then(res => {
    //   console.log(' brands[test]', res)
    //   if (res.message && res.message === 'Network Error') {
    //   } else {
    //     console.log(' brands[test]', res)
    //     props.updateBrands(res)
    //   }
    // })

    callAPI(MANUFACTURER_URL, 'get').then(res => {
      console.log(' manufacturers[test]', res)
      if (res.message && res.message === 'Network Error') {
      } else {
        console.log(' manufacturers[test]', res)
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
    setSKUAutoGeneration,
  }
)(App)
