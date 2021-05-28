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
      <ColorDataTable />
    </div>
  )
}

export default Color
