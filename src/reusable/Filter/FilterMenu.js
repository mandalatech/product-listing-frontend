import React from 'react'
import { CFormGroup, CLabel } from '@coreui/react'
import Select from 'react-select'

export default function FilterMenu({ name, label, onChange, selectOptions }) {
  return (
    <>
      <Select
        name={name}
        onChange={onChange}
        options={selectOptions}
        placeholder="Select.."
      />
    </>
  )
}
