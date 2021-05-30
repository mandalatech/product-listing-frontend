import React from 'react'
import { CFormGroup, CLabel } from '@coreui/react'
import Select from 'react-select'

export default function FilterMenu({
  name,
  selectValueByLabel,
  valueByLabel,
  value,
  onChange,
  options,
}) {
  return (
    <>
      <Select
        name={name}
        onChange={onChange}
        value={
          selectValueByLabel
            ? options.filter(obj => obj.label === valueByLabel)
            : options.filter(obj => obj.value === value)
        }
        options={options}
        placeholder="Select.."
      />
    </>
  )
}
