import React from 'react'

import { CForm, CFormText } from '@coreui/react'
import isEmpty from '../validations/isEmpty'

const ErrorBody = (props) => {
  if (isEmpty(props.children)) {
    return <span></span>
  }

  return (
    <>
      <CForm>
        <CFormText color="red" style={{ color: 'red' }}>
          {props.children}
        </CFormText>
      </CForm>
    </>
  )
}

export default ErrorBody
