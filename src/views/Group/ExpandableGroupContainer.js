import { CButton, CCol, CRow } from '@coreui/react'
import React, { useState } from 'react'
import HorizontalRule from 'src/components/HorizontalRule'
import GroupContainer from './GroupContainer'

const ExpandableGroupContainer = () => {
  const [show, setShow] = useState(false)
  const toggleShow = (e) => {
    setShow((prevShow) => !prevShow)
  }

  return (
    <div>
      <HorizontalRule />
      <div className="d-flex justify-content-end">
        <CButton onClick={toggleShow} draggable={true}>
          {show ? 'Collapse ⬆' : 'Expand ⬇'}
        </CButton>
      </div>
      {show ? (
        <div>
          <GroupContainer />
          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark">
                Cancel
              </CButton>
            </CCol>
            <CCol sm="2" md="2">
              <CButton block color="dark">
                Save
              </CButton>
            </CCol>
          </CRow>
        </div>
      ) : null}
    </div>
  )
}

export default ExpandableGroupContainer
