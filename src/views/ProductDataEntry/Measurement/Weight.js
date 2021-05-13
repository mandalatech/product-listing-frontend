import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from './../../components/Switch'

const Weight = () => {
  return (
    <>
      <CRow className="mb-4">
        <CCol xs="4">
          <TextField
            name="majorWeight"
            label="Major Weight"
            placeholder="Major Weight"
            type="number"
            step="any"
          />
        </CCol>

        <CCol xs="4">
          <TextField
            name="minorWeight"
            label="Minor Weight"
            placeholder="Minor Weight"
            type="number"
            step="any"
          />
        </CCol>
        <CCol xs="4" className="d-flex align-items-center">
          <Switch
            color="secondary"
            labelOn="KG"
            labelOff="LB"
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Weight
