import React from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import { validateProductCreation } from '../../../validations/addProjuct'
import { connect } from 'react-redux'
import { setProductErrors } from '../../../reducers/actions/index'

const Actions = props => {
  const submitAddProductData_ = () => {
    const productData = props.product
    console.log(' product [err] ', productData)
    let { isValid, errors } = validateProductCreation(productData)
    if (!isValid) {
      console.log(' add product errors [err] ', errors)
      props.setProductErrors(errors)
    }
    console.log(' product submission [ps] ', productData)
  }

  return (
    <>
      <CRow>
        <CCol sm="2" md="2">
          <CButton
            block
            style={{
              background: 'white',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            Discard
          </CButton>
        </CCol>

        <CCol sm="2" md="2">
          <CButton onClick={submitAddProductData_} block color="warning">
            <span style={{ color: 'white' }}>Save & Finish</span>
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  { setProductErrors }
)(Actions)
