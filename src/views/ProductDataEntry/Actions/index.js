import React from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import { validateProductCreation } from '../../../validations/addProduct'
import { connect } from 'react-redux'
import { setProductErrors } from '../../../reducers/actions/index'
import { addNewProduct } from '../../../api/ProductRequests'

const Actions = props => {
  // Handler for submitting form.
  const submitAddProductData_ = () => {
    const productData = props.product

    console.log(' product [err] ', productData)

    const abortController = new AbortController()
    const signal = abortController.signal

    let { isValid, errors } = validateProductCreation(productData)
    if (!isValid) {
      // When form is not valid.
      console.log(' add product errors [err] ', errors)
      props.setProductErrors(errors)
    } else {
      // When form is valid, send API request.
      const images = productData.images.map(image => {
        return {
          image: image.base64,
        }
      })

      // add product api request data format
      const payload = {
        product_group: productData.group,
        title: productData.productname,
        short_description: productData.short_description,
        description: productData.description,
        manufacturer: productData.manufacturer,
        brand: productData.brand,
        meta: {
          title: productData.mtitle,
          description: productData.mdescription,
          keyword: productData.mkeyword,
        },
        weight: {
          weight_name: productData.weight_name,
          major_weight: productData.major_weight,
          minor_weight: productData.minor_weight,
        },
        dimension: {
          dimension_name: productData.dimension_name,
          height: productData.height,
          length: productData.length,
          width: productData.width,
        },
        images: images,
        extras: {
          property1: null,
          property2: null,
        },
      }

      if (productData.isSimpleProduct) {
        payload.sku = productData.sku
        payload.asin = productData.asin
        payload.mpn = productData.mpn
        payload.upc = productData.upc
      }

      console.log('Payload : ', payload)

      const response = addNewProduct(signal, payload)
      console.log(' product add response ', response)
    }
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
