import React, { useState, useEffect } from 'react'

import AddBundle from './AddBundle'
import BundleDataTable from './BundleDataTable'
import BundleHeader from './BundleHeader'

import { updateProducts } from 'src/reducers/actions/index'
import { getAllProducts } from 'src/api/ProductRequests'
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
  }, [])
  return (
    <>
      <BundleHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddBundle _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <BundleDataTable />
    </>
  )
}

export default connect(null, { updateProducts })(Bundle)
