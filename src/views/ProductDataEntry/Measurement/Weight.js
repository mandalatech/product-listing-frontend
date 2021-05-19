import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from './../../components/Switch'

import { connect } from 'react-redux'
import * as actionTypes from 'src/reducers/actions'

const Weight = (props) => {
  const _getValue = (payload) => {
    const name = Object.keys(payload)[0]
    let obj = {}
    obj[name] = payload[name]
    props.updateWeight({ ...obj })
  }
  return (
    <>
      <CRow className="mb-4">
        <CCol xs="4">
          <TextField
            name="major_weight"
            label="Major Weight"
            placeholder="Major Weight"
            type="number"
            step="any"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="4">
          <TextField
            name="minor_weight"
            label="Minor Weight"
            placeholder="Minor Weight"
            type="number"
            step="any"
            _onChange={_getValue}
          />
        </CCol>
        <CCol xs="4" className="d-flex align-items-center">
          <Switch
            color="secondary"
            labelOn="KG"
            labelOff="LB"
            name="weight_name"
            _onChange={_getValue}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWeight: (payload) => {
      dispatch({
        type: actionTypes.UPDATE_WEIGHT,
        payload: payload,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(Weight)
