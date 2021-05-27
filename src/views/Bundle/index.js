import React, { useState, useEffect } from 'react'

import AddBundle from './AddBundle'
import BundleDataTable from './BundleDataTable'
import BundleHeader from './BundleHeader'

import { updateProducts } from 'src/reducers/actions/index'
import { updateBundles } from 'src/reducers/actions/bundleAction'

import { getAllProducts } from 'src/api/ProductRequests'
import { getAllBundles } from 'src/api/bundleRequests'

import { connect } from 'react-redux'

const Bundle = (props) => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  // Get all list of products
  useEffect(() => {
    getAllProducts().then(({ json, response }) => {
      if (response.ok) {
        props.updateProducts(json)
      }
    })
    getAllBundles().then(({ response, json }) => {
      if (response.ok) {
        props.updateBundles(json)
      }
    })
  }, [])
  return (
    <>
      <BundleHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddBundle _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <h4 className="mt-5 mb-3 font-weight-bold">All Bundles</h4>
      <BundleDataTable />
    </>
  )
}

export default connect(null, { updateProducts, updateBundles })(Bundle)
