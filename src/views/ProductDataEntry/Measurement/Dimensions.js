import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from '../../components/Switch'
import { connect } from 'react-redux'

const Dimensions = props => {
  return (
    <>
      <CRow className="mb-4">
        <CCol xs="3">
          <TextField
            name="height"
            label="Height"
            placeholder="Height"
            type="number"
            step="any"
            error={props.product.errors.height}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="width"
            label="Width"
            placeholder="Width"
            type="number"
            step="any"
            error={props.product.errors.width}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="length"
            label="Length"
            placeholder="Length"
            type="number"
            step="any"
            error={props.product.errors.length}
          />
        </CCol>

        <CCol xs="3" className="d-flex align-items-center">
          <Switch color="secondary" labelOn="INCH" labelOff="CM" />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps)(Dimensions)
