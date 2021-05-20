import React, { useState, useEffect } from 'react'
import { CRow, CCol, CButton } from '@coreui/react'

import ComboInput from '../../components/ComboInput'
import TextField from 'src/views/components/TextField'
import WarehouseContainer from './WarehouseContainer'
import CIcon from '@coreui/icons-react'

const Warehouse = ({ warehouseId, onDelete }) => {
  const [warehouse, setWarehouse] = useState(null)
  const [stock, setStock] = useState(0)

  useEffect(() => {
    console.log(warehouse, stock)
  }, [warehouse, stock])

  return (
    <div>
      <CRow className="mb-4 d-flex justify-content-between align-items-center">
        <CCol xs="4">
          <ComboInput
            name="wareHouse"
            label="Name"
            placeholder="Select Warehouse Name"
            onChange={(val) => {
              setWarehouse(val.id)
            }}
            // options
          />
        </CCol>

        <CCol xs="4">
          <TextField
            name="stock"
            label="Stock"
            placeholder="No. of Stock"
            type="number"
            onChange={(e) => {
              setStock(e.target.value)
            }}
          />
        </CCol>

        <CCol xs="4">
          <CButton
            variant="outline"
            type="reset"
            size="sm"
            color="danger"
            onClick={(e) => {
              if (onDelete && typeof onDelete == 'function') {
                onDelete(warehouseId)
              }
            }}
          >
            <CIcon name="cil-trash" /> Delete
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}

export default Warehouse
