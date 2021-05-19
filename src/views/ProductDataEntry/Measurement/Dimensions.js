import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from '../../components/Switch'

import { connect } from 'react-redux'
import * as actionTypes from 'src/reducers/actions'

const Dimensions = (props) => {
  const _getValue = (payload) => {
    props.updateDimensions(payload)
  }

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
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="width"
            label="Width"
            placeholder="Width"
            type="number"
            step="any"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="length"
            label="Length"
            placeholder="Length"
            type="number"
            step="any"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3" className="d-flex align-items-center">
          <Switch
            color="secondary"
            labelOn="INCH"
            labelOff="CM"
            name="dimension_name"
            _onChange={_getValue}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDimensions: (payload) => {
      dispatch({
        type: actionTypes.UPDATE_DIMENSIONS,
        payload: payload,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(Dimensions)
