import React, { useState, useEffect } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const Modal = ({ title, showModal, onClose, ...props }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log('Converting from ', show, true )
    setShow(true)
  }, [showModal])


  return (
    <>
      <CModal show={show} onClose={() => onClose(false)} size="lg">
        <CModalHeader closeButton>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{props.children}</CModalBody>
      </CModal>
    </>
  )
}

export default Modal
