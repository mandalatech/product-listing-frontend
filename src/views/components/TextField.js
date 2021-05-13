import React from 'react'
import { CFormGroup, CLabel, CInput } from '@coreui/react'

const TextField = ({ name, label, placeholder, require, labelTag, type }) => {
  return (
    <CFormGroup className="mb-4">
      <CLabel htmlFor={name}>
        {label}{' '}
        {labelTag ? (
          <small>
            <code>{labelTag}</code>
          </small>
        ) : null}
      </CLabel>
      <CInput
        type={type}
        id={name}
        placeholder={placeholder}
        required={require ? true : false}
      />
    </CFormGroup>
  )
}

TextField.defaultProps = {
  name: 'Name',
  label: 'Label',
  placeholder: 'Placeholder here',
  require: false,
  labelTag: false,
}

export default TextField
