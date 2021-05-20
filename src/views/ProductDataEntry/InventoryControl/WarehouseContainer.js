import React, { useState } from 'react'
import { CCol, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import Warehouse from './Warehouse'
import HorizontalRule from 'src/views/components/HorizontalRule'

const WarehouseContainer = () => {
  // Stores ID of each record.
  const [warehouseList, setWarehouseList] = useState([1564135])

  const handleAddWarehouseClick = (e) => {
    setWarehouseList((prevList) => {
      return prevList.concat(Math.floor(Math.random() * 100000000 + 1))
    })
  }

  const handleDelete = (id) => {
    console.log(id)
    setWarehouseList((prevList) => {
      return prevList.filter((warehouseId) => warehouseId !== id)
    })
  }

  return (
    <div>
      <HorizontalRule />

      <div className="mb-4">
        <h4 style={{ color: 'black' }}>Warehouse</h4>
        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)' }}>
          Inventory can be set to multiple warehouses
        </p>
      </div>

      {warehouseList.map((warehouseId) => (
        <Warehouse warehouseId={warehouseId} onDelete={handleDelete} />
      ))}

      <HorizontalRule />

      <CButton
        className="mb-0"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleAddWarehouseClick}
      >
        <div style={{ marginRight: 14 }}>
          <CIcon content={freeSet.cilPlus} size={'lg'} />
        </div>
        Add Another Warehouse
      </CButton>
    </div>
  )
}

export default WarehouseContainer
