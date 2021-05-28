import React, { useState } from 'react'
import ManufacturerHeader from './ManufacturerHeader'
import AddManufacturer from './AddManufacturer'
import ManufacturerDataTable from './ManufacturerDataTable'

const Manufacturer = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <div>
      <ManufacturerHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddManufacturer _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <h4 className="mt-5 mb-3 font-weight-bold">All Manufacturers</h4>
      <ManufacturerDataTable />
    </div>
  )
}

export default Manufacturer
