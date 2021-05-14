import React from 'react'
import { CCol, CRow, CCardBody, CCard } from '@coreui/react'

import ComboInput from '../../components/ComboInput'
import RadioBtnFields from '../../components/RadioBtnFields'
import Warehouse from './Warehouse'

const InventoryControl = () => {
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">Inventory Control</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            <CRow className="mb-4">
              <CCol xs="4">
                <ComboInput
                  name="inventoryControl"
                  label="Inventory Control"
                  placeholder="Select Group"
                  // options
                />
              </CCol>
            </CRow>

            <CRow className="mb-4">
              <CCol xs="4">
                <RadioBtnFields
                  name="manageStack"
                  label="Manage Stack"
                  radioBtns={['Yes', 'No']}
                />
              </CCol>
            </CRow>

            <CRow className="mb-4">
              <CCol xs="4">
                <ComboInput
                  name="selectOptions"
                  label="Select Options"
                  placeholder="Select Options"
                  // options
                />
              </CCol>
            </CRow>

            <div
              style={{
                width: '100%',
                height: 1,
                backgroundColor: 'rgba(0,0,0,0.125)',
                marginBottom: '1.75rem',
              }}
            ></div>

            {/* Warehouse Component Here. */}
            <Warehouse />
            {/* Warehouse Component Here. */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default InventoryControl
