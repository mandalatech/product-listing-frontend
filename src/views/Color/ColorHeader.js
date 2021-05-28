import React from 'react'
import { CCol, CButton } from '@coreui/react'

const ColorHeader = ({ _setShowCreateForm }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start">
        <h4 className="outside-card-title mb-4">Color</h4>
        <CCol md="2">
          <CButton
            block
            color="warning"
            onClick={() => {
              _setShowCreateForm(true)
            }}
          >
            <span style={{ color: '#fff', fontWeight: 600 }}>
              + &nbsp;Add Color
            </span>
          </CButton>
        </CCol>
      </div>
    </div>
  )
}

export default ColorHeader
