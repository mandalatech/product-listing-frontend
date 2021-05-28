import React, { useState } from 'react'

import AddColor from './AddColor'
import ColorDataTable from './ColorDataTable'
import ColorHeader from './ColorHeader'

const Color = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <div>
      <ColorHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddColor _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <h4 className="mt-5 mb-3 font-weight-bold">All Colors</h4>
      <ColorDataTable />
    </div>
  )
}

export default Color
