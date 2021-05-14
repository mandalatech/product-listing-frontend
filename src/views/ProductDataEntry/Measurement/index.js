import React from 'react'
import { CCol, CRow, CCardBody, CCard, CCardTitle } from '@coreui/react'

import Weight from './Weight'
import Dimensions from './Dimensions'

const Measurement = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Measurement</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CCardTitle>Weight</CCardTitle>
              <Weight />
              <CCardTitle>Dimensions</CCardTitle>
              <Dimensions />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Measurement
