import React, { useState, useEffect } from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import TextField from 'src/views/components/TextField'

import { connect } from 'react-redux'

const GroupRecord = ({ groupRecordId, onDelete, getRecord, recordValue }) => {
  const [name, setName] = useState('')
  const [possibleValues, setPossibleValues] = useState([])

  const recordState = {
    id: groupRecordId,
    name: name,
    possibleValues: possibleValues,
  }

  const handlePossibleValuesChange = (e) => {
    const values = e.target.value.split(',')
    setPossibleValues(values.filter((el) => el !== ''))
  }

  useEffect(() => {
    getRecord(recordState)
  }, [name, possibleValues])

  return (
    <CRow className="d-flex align-items-center">
      <CCol md="5">
        <TextField
          label="Attribute"
          placeholder="Eg. Hard-disk"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </CCol>
      <CCol md="6">
        <TextField
          label="Possible values"
          placeholder="Eg. SSD, HDD"
          onChange={handlePossibleValuesChange}
        />
      </CCol>
      <CCol md="1">
        <CButton
          type="reset"
          onClick={(e) => {
            console.log('ID dispatched from : ', groupRecordId)
            if (onDelete && typeof onDelete == 'function') {
              onDelete(groupRecordId)
            }
          }}
          onMouseOver={(e) => {
            console.log('ID hovered from : ', groupRecordId)
          }}
        >
          <CIcon className="text-danger" name="cil-x-circle" />
        </CButton>
      </CCol>
    </CRow>
  )
}

const mapStatetoProps = (state) => {
  return {}
}

export default connect(mapStatetoProps, null)(GroupRecord)
