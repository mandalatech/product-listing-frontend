import React from 'react'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

const ToastComp = ({
  errorToast,
  successToast,
  alertToast,
  title,
  message,
}) => {
  return (
    <CToast title="Hello toast" autohide={false}>
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
      </CToastHeader>
      <CToastBody>Hello message</CToastBody>
    </CToast>
  )
}

export default ToastComp
