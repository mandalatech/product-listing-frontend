import React, { useState, useEffect } from 'react'
import { CFormGroup, CLabel, CInput } from '@coreui/react'

const TextField = ({
  name,
  label,
  placeholder,
  require,
  labelTag,
  type,
  _onChange,
  error,
}) => {
  const [textValue, setTextValue] = useState({})

  useEffect(() => {
    _onChange(textValue)
  }, [textValue])

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
        onChange={(e) => {
          let obj = {}
          obj[name] = e.target.value
          setTextValue(obj)
        }}
      />
      <span style={{ color: 'red' }}>{error}</span>
    </CFormGroup>
  )
}

TextField.defaultProps = {
  name: 'Name',
  label: 'Label',
  placeholder: 'Placeholder here',
  require: false,
  labelTag: false,
  error: '',
}

export default TextField
