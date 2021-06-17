import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'
import { connect } from 'react-redux'
import { changeProductType } from 'src/reducers/actions/index'
import CommonAttributes from './CommonAttributes'
import ExtraAttributes from './ExtraAttributes'

const BasicInfo = (props) => {
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title">Add Product</h4>
        <CCard>
          <CCardBody>
            <div className="addpro-custom-card">
              <CommonAttributes />
              {props.isSimpleProduct ? (
                <ExtraAttributes edit={props.edit} />
              ) : null}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const mapStateToProps = (state) => {
  return {
    isSimpleProduct: state.product.isSimpleProduct,
  }
}

export default connect(mapStateToProps, { changeProductType })(BasicInfo)
