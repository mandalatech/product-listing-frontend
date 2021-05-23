import React from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import { validateProductCreation } from '../../../validations/addProjuct'
import { connect } from 'react-redux'
import { setProductErrors } from '../../../reducers/actions/index'
import { addNewProduct } from '../../../api/ProductRequests'

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
    const abortController = new AbortController()
    const signal = abortController.signal

    // add product api request data format
    // {
    //   "product_group": 0,
    //   "title": "string",
    //   "short_description": "string",
    //   "description": "string",
    //   "manufacturer": 0,
    //   "brand": 0,
    //   "sku": "string",
    //   "asin": "string",
    //   "mpn": "string",
    //   "upc": "string",
    //   "meta": {
    //     "title": "string",
    //     "description": "string",
    //     "keyword": "string"
    //   },
    //   "weight": {
    //     "weight_name": "LB",
    //     "major_weight": 0,
    //     "minor_weight": 0
    //   },
    //   "dimension": {
    //     "dimension_name": "INCH",
    //     "height": 0,
    //     "length": 0,
    //     "width": 0
    //   },
    //   "images": [
    //     {
    //       "image": "string"
    //     }
    //   ],
    //   "extras": {
    //     "property1": null,
    //     "property2": null
    //   }
    // }

    // const formData = new FormData()
    const response = addNewProduct(signal, { data: '' })
    console.log(' product add response ', response)
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
