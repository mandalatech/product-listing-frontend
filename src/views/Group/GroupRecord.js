import React, { useState, useEffect } from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import TextField from 'src/components/TextField'

import { connect } from 'react-redux'
import { setProductGroupAttributes } from 'src/reducers/actions/index'
import isEmpty from 'src/validations/isEmpty'

const GroupRecord = ({ record, ...props }) => {
  const [name, setName] = useState(null)
  const [choices, setChoices] = useState([])
  const [choicesInput, setChoicesInput] = useState('')
  const [nameError, setNameError] = useState('')
  const [choicesError, setChoicesError] = useState('')

  const handleDelete = () => {
    props.setProductGroupAttributes(
      props.attributeLists.filter((option) => option.id !== record.id)
    )
  }

  useEffect(() => {
    if (!isEmpty(record.values)) {
      const concatString = record.values.map((val) => val.value).join(',')
      console.log('RECORD VALUES', concatString)
      setChoicesInput(concatString)
    } else {
      setChoicesInput('')
    }
  }, [])

  useEffect(() => {
    if (!isEmpty(choicesInput)) {
      const values = choicesInput.split(',')
      setChoices(
        values.map((value) => {
          return {
            value: value.trim(),
          }
        })
      )
    } else {
      setChoices([])
    }
  }, [choicesInput])

  useEffect(() => {
    let changedIndex = props.attributeLists.findIndex(
      (option) => option.id === record.id
    )
    let newAttributeLists = [...props.attributeLists]
    const changedRecord = {
      id: record.id,
      name,
      values: choices,
    }
    newAttributeLists[changedIndex] = changedRecord
    props.setProductGroupAttributes(newAttributeLists)
  }, [name, choices])

  return (
    <CRow className="d-flex align-items-center">
      <CCol md="5">
        <TextField
          label="Attribute"
          placeholder="Eg. Hard-disk"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={record.name}
        />
      </CCol>
      <CCol md="6">
        <TextField
          label="Possible values"
          placeholder="Eg. SSD, HDD"
          onChange={(e) => {
            setChoicesInput(e.target.value)
          }}
          value={choicesInput}
        />
      </CCol>
      <CCol md="1">
        <CButton onClick={handleDelete}>
          <CIcon className="text-danger" name="cil-x-circle" />
        </CButton>
      </CCol>
    </CRow>
  )
}

const mapStatetoProps = (state) => {
  return {
    attributeLists: state.group.attributes,
  }
}

export default connect(mapStatetoProps, { setProductGroupAttributes })(
  GroupRecord
)
