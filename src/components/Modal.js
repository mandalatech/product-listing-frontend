import React, { useState, useEffect } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const Modal = ({ title, showModal, onClose, size, ...props }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [showModal])

  return (
    <>
      <CModal show={show} onClose={() => onClose(false)} size={size}>
        <CModalHeader closeButton>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{props.children}</CModalBody>
      </CModal>
    </>
  )
}

Modal.defaultProps = {
  size: 'lg',
}

export default Modal
