import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import TextArea from '../../components/TextArea'
import TextField from '../../components/TextField'

import { connect } from 'react-redux'
import * as actionTypes from 'src/reducers/actions'

const MetaDescription = (props) => {
  const _getValue = (payload) => {
    const name = Object.keys(payload)[0]
    let obj = {}
    obj[name] = payload[name]
    props.updateMeta(obj)
  }
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">
            Meta Description (Optional)
          </h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextField
                  name="title"
                  label="Title"
                  placeholder="Meta title of product"
                  _onChange={_getValue}
                />
                <TextArea
                  name="description"
                  label="Description"
                  placeholder="Short meta description about product"
                  _onChange={_getValue}
                />
                <TextField
                  name="keyword"
                  label="Keywords"
                  placeholder="Keyword e.g. furniture, wood, chair"
                  _onChange={_getValue}
                />
                <div>
                  <CIcon name="cilSettings" />
                  &nbsp;
                  <span>Add multiple keyword seperated by “,” comma</span>
                </div>
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
    updateMeta: (payload) => {
      dispatch({
        type: actionTypes.UPDATE_META,
        payload: payload,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(MetaDescription)
