import React, { useState, useEffect } from 'react'
import { CFormGroup, CLabel, CTextarea } from '@coreui/react'

const TextArea = ({
  name,
  label,
  placeholder,
  require,
  labelTag,
  _onChange,
}) => {
  const [textValue, setTextValue] = useState('')
  useEffect(() => {
    let obj = {}
    obj[name] = textValue
    if (_onChange && typeof _onChange == 'function') {
      _onChange(obj)
    }
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
      <CTextarea
        id={name}
        placeholder={placeholder}
        required={require ? true : false}
        rows={5}
        onChange={(e) => {
          setTextValue(e.target.value)
        }}
      />
    </CFormGroup>
  )
}

TextArea.defaultProps = {
  name: 'Name',
  label: 'Label',
  placeholder: 'Placeholder here',
  require: false,
  labelTag: false,
}

export default TextArea
