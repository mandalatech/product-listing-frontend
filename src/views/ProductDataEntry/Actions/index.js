import React from 'react'
import { CCol, CRow, CButton, CSpinner } from '@coreui/react'
import { validateProductCreation } from '../../../validations/addProduct'
import { validateVariantData } from '../../../validations/productVariant'
import { connect } from 'react-redux'
import {
  setProductErrors,
  clearAddProductData,
  setVariantError,
} from '../../../reducers/actions/index'
import {
  addNewProduct,
  submitProductVariant,
  updateProductById,
  updateProductVariant,
  getUniqueSKU,
} from '../../../api/ProductRequests'
import resolve from '../../../helpers/getFromObj'
import { withRouter } from 'react-router-dom'
import Toast from '../../../reusable/Toast/Toast'
import { ToastMessage } from '../../../reusable/Toast/ToastMessage'

const Actions = props => {
  const [submissionLoader, setSubmissionLoader] = React.useState(false)
  console.log(' variantErrors ', props.product.variantErrors)
  const discardProductData_ = () => {
    console.log(' discard ')
  }
  // Handler for submitting form.
  const submitAddProductData_ = async () => {
    const productData = props.product
    const autoSKU = props.autoSKU
    // addToast(ToastComp)

    console.log(' product [err] ', productData)
    const abortController = new AbortController()
    const signal = abortController.signal

    let { isValid, errors } = validateProductCreation(productData, autoSKU)

    let isVariantValid = []
    let variantErrors = []

    if (props.product.varientsData.length !== 0) {
      props.product.varientsData.forEach(data => {
        console.log(' valll ', data)
        let { isValid, errors } = validateVariantData(data)
        isVariantValid.push(isValid)
        variantErrors.push(errors)
      })
    }

    console.log(
      'errors:isValid:[varient-validation]',
      errors,
      isValid,
      isVariantValid,
      variantErrors
    )

    console.log('errors:isValid:', errors, isValid)
    if (!isValid) {
      // When form is not valid.
      Toast.fire({
        icon: 'warning',
        title: ToastMessage('warning', 'Fill data properly'),
      })
      console.log(' add product errors [err] ', errors)
      props.setProductErrors(errors)
    } else {
      // When form is valid, send API request.
      let isAllVarientValid = false
      isVariantValid.forEach((data, index) => {
        console.log(' vdataaa ', data)
        if (!data) {
          props.setVariantError(variantErrors)
          Toast.fire({
            icon: 'warning',
            title: ToastMessage('warning', 'Fill variant data properly'),
          })
          return (isAllVarientValid = false)
        } else {
          return (isAllVarientValid = true)
        }
      })
      console.log(' isAllVarientValid ', isAllVarientValid)
      if (!isAllVarientValid) {
        return
      }

      const images = productData.images.map(image => {
        return {
          image: image.image,
        }
      })

      // Prepare payload for warehouse.
      const warehouses = productData.warehouses.map(warehouseOption => {
        return {
          warehouse: warehouseOption.warehouse,
          quantity: warehouseOption.stock,
        }
      })

      let sku = productData.sku
      if (autoSKU || !productData.isSimpleProduct) {
        sku = getUniqueSKU(signal, productData)
      }

      // add product api request data format
      const payload = {
        product_group: productData.group,
        title: productData.productname,
        short_description: productData.short_description,
        sku: sku,
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
        images: productData.images,
        warehouses: warehouses,
        extras: productData.extras,
      }

      if (productData.isSimpleProduct) {
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
                    name: element.name,
                    sku: element.sku,
                    asin: element.asin,
                    mpn: element.mpn,
                    upc: element.upc,
                    image: element.image[0].image || '',
                    major_weight: element.major_weight,
                    minor_weight: element.minor_weight,
                    extras: ExtraVarients,
                  }

                  await submitProductVariant(signal, variantData)
                    .then(resp => {
                      if (resp.response.ok) {
                        console.log('variant ok [variant-submit]', resp)
                        Toast.fire({
                          icon: 'success',
                          title: ToastMessage(
                            'success',
                            'Successfully Added[variant]'
                          ),
                        })
                        props.clearAddProductData()
                        setSubmissionLoader(false)
                        props.history.push('/products')
                      }
                    })
                    .catch(err => {
                      setSubmissionLoader(false)
                      console.log(' error[variant-submit] ', err)
                      throw err
                    })
                })
            } else {
              props.clearAddProductData()
              Toast.fire({
                icon: 'success',
                title: ToastMessage(
                  'success',
                  'Successfully Added[product data only]'
                ),
              })
              setSubmissionLoader(false)
              props.history.push('/products')
            }
          } else {
            if (res.json.asin) {
              props.setProductErrors({
                asin: res.json.asin[0] || '*not allowed',
              })
              Toast.fire({
                icon: 'error',
                title: ToastMessage('error', 'Failed to add[ASIN error]'),
              })
            }
            if (res.json.upc) {
              props.setProductErrors({
                upc: res.json.upc[0] || '*not allowed',
              })
              Toast.fire({
                icon: 'error',
                title: ToastMessage('error', 'Failed to add[UPC error]'),
              })
            } else {
              Toast.fire({
                icon: 'error',
                title: ToastMessage('error', 'Failed to add'),
              })
            }
            setSubmissionLoader(false)
          }
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: 'Producd addition failed',
          })
          setSubmissionLoader(false)
          throw err
        })
    }
  }

  const updateAddProductData_ = async () => {
    const productData = props.product

    console.log(' product [update] ', productData)
    const abortController = new AbortController()
    const signal = abortController.signal

    let { isValid, errors } = validateProductCreation(
      productData,
      props.autoSKU
    )
    console.log('errors:isValid:[update]', errors, isValid)
    if (!isValid) {
      // When form is not valid.
      Toast.fire({
        icon: 'warning',
        title: ToastMessage('warning', 'Fill data properly'),
      })
      console.log(' add product errors [update] ', errors)
      props.setProductErrors(errors)
    } else {
      // When form is valid, send API request.
      const images = productData.images.map(image => {
        return {
          image: image.base64,
        }
      })

      // Prepare payload for warehouse.
      const warehouses = productData.warehouses.map(warehouseOption => {
        return {
          warehouse: warehouseOption.warehouse,
          quantity: warehouseOption.stock,
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
        warehouses: warehouses,
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
      await updateProductById(signal, props.id, payload)
        .then(res => {
          console.log(' product add response [update] ', res)
          props.setProductErrors({})
          if (res.response.ok) {
            console.log(
              ' submit variant data now[update] ',
              res.json.variant,
              ': props.product.varientsData :',
              props.product.varientsData
            )

            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Successfully Added'),
            })
            setSubmissionLoader(false)
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
                    ' extra variants [variant-update] ',
                    ExtraVarients
                  )

                  const variantData = {
                    id: element.id,
                    product: props.id,
                    name: element.name,
                    sku: element.sku,
                    asin: element.asin,
                    mpn: element.mpn,
                    upc: element.upc,
                    image: element.image || [],
                    major_weight: element.major_weight,
                    minor_weight: element.minor_weight,
                    extras: ExtraVarients,
                  }

                  await updateProductVariant(
                    signal,
                    `${element.id}/`,
                    variantData
                  )
                    .then(resp => {
                      if (resp.response.ok) {
                        console.log('variant ok [variant-submit]', resp)
                        Toast.fire({
                          icon: 'success',
                          title: ToastMessage(
                            'success',
                            'Successfully Added[from variant]'
                          ),
                        })
                        props.clearAddProductData()
                        setSubmissionLoader(false)
                      }
                    })
                    .catch(err => {
                      setSubmissionLoader(false)
                      console.log(' error[variant-submit] ', err)
                      throw err
                    })
                })
            } else {
              props.clearAddProductData()
              Toast.fire({
                icon: 'success',
                title: ToastMessage(
                  'success',
                  'Successfully Added[from product]'
                ),
              })
              setSubmissionLoader(false)
            }
          } else {
            Toast.fire({
              icon: 'error',
              title: ToastMessage('error', 'Failed to add'),
            })
            setSubmissionLoader(false)
          }
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: 'Producd addition failed',
          })
          setSubmissionLoader(false)
          throw err
        })
    }
  }

  return (
    <>
      <CRow>
        {props.edit ? null : (
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
        )}
        <CCol sm="2" md="2">
          {props.edit ? (
            <CButton
              disabled={submissionLoader}
              onClick={updateAddProductData_}
              block
              color="warning"
            >
              {submissionLoader ? (
                <CSpinner color="secondary" size="sm" />
              ) : (
                <span style={{ color: 'white' }}>Update & Finish</span>
              )}
            </CButton>
          ) : (
            <CButton
              // disabled={submissionLoader}
              onClick={submitAddProductData_}
              block
              color="warning"
            >
              {/* {submissionLoader ? (
                <CSpinner color="secondary" size="sm" />
              ) : ( */}
              <span style={{ color: 'white' }}>Save & Finish</span>
              {/* )} */}
            </CButton>
          )}
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
    autoSKU: state.settings.sku,
  }
}

export default connect(
  mapStateToProps,
  {
    setProductErrors,
    clearAddProductData,
    setVariantError,
  }
)(withRouter(Actions))
