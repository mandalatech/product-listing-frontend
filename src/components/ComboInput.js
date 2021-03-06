import React from 'react'
import { CFormGroup, CLabel } from '@coreui/react'
import Select from 'react-select'
import ErrorBody from '../reusable/ErrorBody'

const ComboInput = ({
  name,
  label,
  options,
  placeholder,
  onChange,
  secondaryLabel,
  secondaryLabelClick,
  error,
  value,
  selectValueByLabel,
  defaultValueByLabel,
  valueByLabel,
  defaultValue,
}) => {
  const selectOptions = options.map((el) => {
    if (el.name) {
      el.value = el.id
      el.label = el.name
    }
    return el
  })

  console.log('Value by Label: ', valueByLabel)
  const valuee = options.filter((data) => data.id === value)
  console.log('Value from checkbox : ', valuee)
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
          defaultValue={
            selectValueByLabel
              ? options.filter((obj) => obj.label === defaultValueByLabel)
              : options.filter((obj) => obj.value === defaultValue)
          }
          onChange={onChange}
          options={selectOptions}
          placeholder={(valuee.length > 0 && valuee[0].name) || 'Select..'}
          value={
            selectValueByLabel
              ? options.filter((obj) => obj.label === valueByLabel)
              : options.filter((obj) => obj.value === value)
          }
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
