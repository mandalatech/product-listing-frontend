import React from 'react'
import { CCol, CRow, CCardBody, CCard, CCardTitle } from '@coreui/react'

import Weight from './Weight'
import Dimensions from './Dimensions'

import { connect } from 'react-redux'

const Measurement = (props) => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Measurement</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CCardTitle>Weight ( {props.weightName} )</CCardTitle>
              <Weight />
              <CCardTitle>Dimensions ( {props.dimensionName} )</CCardTitle>
              <Dimensions />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    weightName: state.product.weight_name,
    dimensionName: state.product.dimension_name,
  }
}

export default connect(mapStateToProps, null)(Measurement)
