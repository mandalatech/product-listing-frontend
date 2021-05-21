import React from 'react'
import { CFormGroup, CLabel, CInput } from '@coreui/react'
import ErrorBody from '../../reusable/ErrorBody'

const TextField = ({
  name,
  label,
  placeholder,
  require,
  labelTag,
  type,
  onChange,
  value,
  error,
}) => {
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
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={require ? true : false}
      />
      <ErrorBody>{error}</ErrorBody>
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
