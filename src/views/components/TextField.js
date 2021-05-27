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
  disabled,
  helpText,
  secondaryLabel,
  secondaryLabelClick,
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
      <span
        className="font-weight-bold text-secondary"
        style={{ float: 'right', cursor: 'pointer' }}
        onClick={() => {
          secondaryLabelClick()
        }}
      >
        {secondaryLabel}
      </span>
      <CInput
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={require ? true : false}
        disabled={disabled}
      />
      <p className="small">{helpText}</p>
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
  disabled: false,
  helpText: '',
}

export default TextField
