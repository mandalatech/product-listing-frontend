import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from '../../components/Switch'

const Dimensions = () => {
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
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="width"
            label="Width"
            placeholder="Width"
            type="number"
            step="any"
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="length"
            label="Length"
            placeholder="Length"
            type="number"
            step="any"
          />
        </CCol>

        <CCol xs="3" className="d-flex align-items-center">
          <Switch
            color="secondary"
            labelOn="INCH"
            labelOff="CM"
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Dimensions
