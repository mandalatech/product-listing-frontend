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
    // const data = {
    //   product_group: parseInt(productData.group),
    //   title: productData.productname,
    //   short_description: productData.short_description,
    //   description: productData.description,
    //   manufacturer: parseInt(productData.manufacturer),
    //   brand: parseInt(productData.brand),
    //   sku: productData.sku,
    //   asin: productData.asin,
    //   mpn: productData.mpn,
    //   upc: productData.upc,
    //   meta: {
    //     title: productData.mtitle,
    //     description: productData.mdescription,
    //     keyword: productData.mkeyword,
    //   },
    //   weight: {
    //     weight_name: productData.weight_name,
    //     major_weight: parseInt(productData.major_weight),
    //     minor_weight: parseInt(productData.minor_weight),
    //   },
    //   dimension: {
    //     dimension_name: productData.dimension_name,
    //     height: parseInt(productData.height),
    //     length: parseInt(productData.length),
    //     width: parseInt(productData.width),
    //   },
    //   images: productData.images,
    //   extras: {},
    // }

    const response = addNewProduct(signal, data)
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
