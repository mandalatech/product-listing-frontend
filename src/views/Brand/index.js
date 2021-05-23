import React from 'react'
import BrandHeader from './BrandHeader'
import AddBrand from './AddBrand'
import BrandDataTable from './BrandDataTable'

const Brand = () => {
  return (
    <div>
      <BrandHeader />
      <AddBrand />
      <h4 className="mt-5 mb-3 font-weight-bold">All Brands</h4>
      <BrandDataTable />
    </div>
  )
}

export default Brand
