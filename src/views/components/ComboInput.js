import React from 'react'
import { CFormGroup, CLabel } from '@coreui/react'
import Select from 'react-select'
import ErrorBody from '../../reusable/ErrorBody'

const ComboInput = ({
  name,
  label,
  options,
  placeholder,
  onChange,
  secondaryLabel,
  secondaryLabelClick,
  error,
}) => {
  const selectOptions = options.map(el => {
    if (el.name) {
      el.value = el.id
      el.label = el.name
    }
    return el
  })

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor={name}>{label}</CLabel>
        <span
          className="font-weight-bold text-secondary"
          style={{ float: 'right', cursor: 'pointer' }}
          onClick={() => {
            secondaryLabelClick()
          }}
        >
          {secondaryLabel}
        </span>
        <Select
          name={name}
          onChange={onChange}
          options={selectOptions}
          placeholder={placeholder}
        />
        <ErrorBody>{error}</ErrorBody>
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
