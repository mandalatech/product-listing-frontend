import React from 'react'
import {
  CCol,
  CRow,
  CButton,
  CToaster,
  CToastHeader,
  CToastBody,
  CToast,
} from '@coreui/react'
import { validateProductCreation } from '../../../validations/addProduct'
import { connect } from 'react-redux'
import { setProductErrors } from '../../../reducers/actions/index'
import {
  addNewProduct,
  submitProductVariant,
} from '../../../api/ProductRequests'
import resolve from '../../../helpers/getFromObj'
import store from 'src/store'
import Loader from '../../../reusable/loader/loader'
import ToastComp from '../../../reusable/Toast/Toast'

const Actions = props => {
  const [submissionLoader, setSubmissionLoader] = React.useState(false)
  const [toast, addToast] = React.useState(0)
  const toaster = React.useRef()
  const discardProductData_ = () => {
    console.log(' discard ')
  }
  // Handler for submitting form.
  const submitAddProductData_ = async () => {
    const productData = props.product
    addToast(ToastComp)
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
        inventory: {
          type: productData.inventoryType,
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
      setSubmissionLoader(true)
      await addNewProduct(signal, payload)
        .then(res => {
          console.log(' product add response [variant-submit] ', res)
          props.setProductErrors({})
          if (res.response.ok) {
            console.log(
              ' submit variant data now[variant-submit] ',
              res.json.id,
              ': props.product.varientsData :',
              props.product.varientsData
            )

            if (props.product.varientsData.length > 0) {
              console.log(' extra variants [variant-submit] ')

              props.product.varientsData &&
                props.product.varientsData.forEach(async element => {
                  let ExtraVarients = {}
                  props.product.variant.map((data, index) => {
                    // return ExtraVarients.push({ [data]: resolve(data, element) })
                    return (ExtraVarients = {
                      ...ExtraVarients,
                      [data]: resolve(data, element),
                    })
                  })

                  console.log(
                    ' extra variants [variant-submit] ',
                    ExtraVarients
                  )

                  const variantData = {
                    product: res.json.id,
                    name: element.variant_name,
                    sku: element.sku,
                    asin: element.asin,
                    mpn: element.mpn,
                    upc: element.upc,
                    image: element.image,
                    major_weight: element.major_weight,
                    minor_weight: element.minor_weight,
                    extras: ExtraVarients,
                  }

                  await submitProductVariant(signal, variantData)
                    .then(resp => {
                      if (resp.response.ok) {
                        console.log('variant ok [variant-submit]', resp)
                        setSubmissionLoader(false)
                      }
                    })
                    .catch(err => {
                      setSubmissionLoader(false)
                      console.log(' error[variant-submit] ', err)
                      throw err
                    })
                })
              // ) //this one
            } else {
              setSubmissionLoader(false)
            }
          } else {
            setSubmissionLoader(false)
          }
        })
        .catch(err => {
          setSubmissionLoader(false)
          throw err
        })
    }
  }
  console.log(' [toast] ', toast)
  return (
    <>
      <CRow>
        <CCol sm="2" md="2">
          <CButton
            disabled={submissionLoader}
            block
            onClick={discardProductData_}
            style={{
              background: 'white',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            Discard
          </CButton>
        </CCol>

        <CCol sm="2" md="2">
          <CButton
            disabled={submissionLoader}
            onClick={submitAddProductData_}
            block
            color="warning"
          >
            {submissionLoader ? (
              <span style={{ width: '30px', height: '30px' }}>
                <Loader />
              </span>
            ) : (
              <span style={{ color: 'white' }}>Save & Finish</span>
            )}
          </CButton>
          <button onClick={() => addToast(ToastComp)}>click me</button>
        </CCol>
      </CRow>
      <CToaster ref={toaster} push={toast} placement="top-end" />
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
