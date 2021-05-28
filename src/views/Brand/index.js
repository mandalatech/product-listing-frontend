import React, { useState } from 'react'
import BrandHeader from './BrandHeader'
import AddBrand from './AddBrand'
import BrandDataTable from './BrandDataTable'

const Brand = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <div>
      <BrandHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddBrand _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <h4 className="mt-5 mb-3 font-weight-bold">All Brands</h4>
      <BrandDataTable />
    </div>
  )
}

export default Brand
