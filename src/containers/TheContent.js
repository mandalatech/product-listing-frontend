import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { CContainer, CFade } from '@coreui/react'

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
import { getAllBrands } from 'src/api/brandRequests'
import { getAllProductGroups } from 'src/api/groupRequests'
import { getAllManufacturers } from 'src/api/manufacturerRequests'
import { getAllProducts } from 'src/api/ProductRequests'
import { getSKUSetting } from 'src/api/skuRequests'

// routes config
import routes from 'src/routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props) => {
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

  const loader = useSelector((state) => state.settings.topLoader)
  if (loader) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default connect(null, {
  updateBrands,
  updateManufacturers,
  updateProductGroups,
  updateProducts,
  setSettings,
  setSKUAutoGeneration,
})(TheContent)
