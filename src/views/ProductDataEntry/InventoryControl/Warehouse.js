import React from 'react'
import { CRow, CCol, CButton, CFormGroup, CLabel } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import ComboInput from '../../components/ComboInput'

const Warehouse = () => {
  return (
    <div>
      <div className="mb-4">
        <h4 style={{ color: 'black' }}>Warehouse</h4>
        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)' }}>
          Inventory can be set to multiple warehouses
        </p>
      </div>

      <CRow className="mb-4">
        <CCol xs="4">
          <ComboInput
            name="wareHouse"
            label="Name"
            placeholder="Select Warehouse Name"
            // options
          />
        </CCol>

        <CCol xs="4">
          <ComboInput
            name="stock"
            label="Stock"
            placeholder="No. of Stock"
            // options
          />
        </CCol>
      </CRow>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 14 }}>
          <CIcon content={freeSet.cilPlus} size={'lg'} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CLabel className="mb-0">Add Another Warehouse</CLabel>
        </div>
      </div>
    </div>
  )
}

export default Warehouse
