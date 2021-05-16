import React from 'react'
import { CCol, CRow, CButton } from '@coreui/react'

const Actions = () => {
  return (
    <>
      <CRow>
        <CCol sm="2" md="2">
          <CButton
            block
            style={{
              background: 'white',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            Discard
          </CButton>
        </CCol>

        <CCol sm="2" md="2">
          <CButton block color="warning">
            <span style={{ color: 'white' }}>Save & Finish</span>
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default Actions
