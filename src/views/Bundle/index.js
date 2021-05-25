import React, { useState } from 'react'

import AddBundle from './AddBundle'
import BundleHeader from './BundleHeader'

const Bundle = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <>
      <BundleHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddBundle _setShowCreateForm={setShowCreateForm} />
      ) : null}
    </>
  )
}

export default Bundle
