import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'

import TextArea from '../../components/TextArea'

import { connect } from 'react-redux'
import * as actionTypes from 'src/reducers/actions'

const ShortDescription = (props) => {
  const _getValue = (payload) => {
    props.updateShortDescription(payload)
  }
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Short Description</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextArea
                  name="shortDescription"
                  label="Short Description"
                  placeholder="Short description about Product"
                  _onChange={_getValue}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateShortDescription: (payload) => {
      dispatch({
        type: actionTypes.UPDATE_SHORT_DESCRIPTION,
        payload: payload,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(ShortDescription)
