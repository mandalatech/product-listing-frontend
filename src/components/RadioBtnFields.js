import { CFormGroup, CInputRadio, CLabel } from '@coreui/react'
import React from 'react'

const RadioBtnFields = ({ name, label, labelTag, radioBtns }) => {
  return (
    <CFormGroup className="mb-4">
      <div>
        <CLabel htmlFor={name}>
          {label}{' '}
          {labelTag ? (
            <small>
              <code>{labelTag}</code>
            </small>
          ) : null}
        </CLabel>
      </div>

      {radioBtns.map((radio) => (
        <CFormGroup variant="custom-radio" inline>
          <CInputRadio custom id={radio} name={name} value={radio} />
          <CLabel variant="custom-checkbox" htmlFor={radio}>
            {radio}
          </CLabel>
        </CFormGroup>
      ))}
    </CFormGroup>
  )
}

RadioBtnFields.defaultProps = {
  name: 'name',
  label: 'Label',
  labelTag: false,
  radioBtns: ['One', 'Two'],
}

export default RadioBtnFields
