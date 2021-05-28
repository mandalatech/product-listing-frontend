import React, { useState } from 'react'

import AddBundle from './AddBundle'
import BundleDataTable from './BundleDataTable'
import BundleHeader from './BundleHeader'

import { connect } from 'react-redux'

const Bundle = (props) => {
  const [showCreateForm, setShowCreateForm] = useState(false)

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

export default connect(null, null)(Bundle)
