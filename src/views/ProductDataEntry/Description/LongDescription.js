import React from 'react'
import { connect } from 'react-redux'

import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'
import TextEditor from '../../components/TextEditor'

import * as actionTypes from 'src/reducers/actions'

const LongDescription = (props) => {
  const _getValue = (payload) => {
    props.updateLongDescription(payload)
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Long Description</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextEditor
                  name="description"
                  label="Long Description"
                  placeholder="Detail description about Product"
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
    updateLongDescription: (payload) => {
      dispatch({
        type: actionTypes.UPDATE_LONG_DESCRIPTION,
        payload: payload,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(LongDescription)
