import React from 'react'

import AddProduct from './BasicInfo/AddProduct'
import Description from './Description'
import InventoryControl from './InventoryControl/InventoryControl'

const DataEntry = () => {
  return (
    <>
      <AddProduct />
      <InventoryControl />
      <Description/>
    </>
  )
}

export default DataEntry
