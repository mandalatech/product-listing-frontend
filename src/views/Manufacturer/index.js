import React from 'react'
import ManufacturerHeader from './ManufacturerHeader'
import AddManufacturer from './AddManufacturer'
import ManufacturerDataTable from './ManufacturerDataTable'

const Manufacturer = () => {
  return (
    <div>
      <ManufacturerHeader />
      <AddManufacturer />
      <h4 className="mt-5 mb-3 font-weight-bold">All Manufacturers</h4>
      <ManufacturerDataTable />
    </div>
  )
}

export default Manufacturer
