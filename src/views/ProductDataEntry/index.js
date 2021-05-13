import React from 'react'

import AddProduct from './BasicInfo/AddProduct'
import Description from './Description'
import InventoryControl from './InventoryControl'
import Measurement from './Measurement'
import MetaDescription from './MetaDescription'

const DataEntry = () => {
  return (
    <>
      <AddProduct />
      <InventoryControl />
      <Description/>
      <Measurement/>
      <MetaDescription/>
    </>
  )
}

export default DataEntry
