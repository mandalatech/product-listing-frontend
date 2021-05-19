import React, { useState } from 'react'
import { CFormGroup, CLabel } from '@coreui/react'
import Select from 'react-select'

const ComboInput = ({ name, label, options, placeholder, _getValue }) => {
  const [value, setValue] = useState('')

  const selectOptions = options.map((el) => {
    if (el.name) {
      el.value = el.id
      el.label = el.name
    }
    return el
  })

  const handleValueChange = (selectedOption) => {
    setValue(selectedOption)
    _getValue(selectedOption)
  }

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor={name}>{label}</CLabel>
        <Select
          options={selectOptions}
          placeholder={placeholder}
          onChange={handleValueChange}
          value={value}
        />
      </CFormGroup>
    </>
  )
}

ComboInput.defaultProps = {
  name: 'name',
  label: 'Label',
  placeholder: 'placeholder here...',
  options: [
    {
      id: 0,
      name: 'Apple',
      created: '2019-08-24T14:15:22Z',
      modified: '2019-08-24T14:15:22Z',
    },
    {
      id: 1,
      name: 'Banana',
      created: '2019-08-24T14:15:22Z',
      modified: '2019-08-24T14:15:22Z',
    },
    {
      id: 2,
      name: 'Cat',
      created: '2019-08-24T14:15:22Z',
      modified: '2019-08-24T14:15:22Z',
    },
  ],
}

export default ComboInput
