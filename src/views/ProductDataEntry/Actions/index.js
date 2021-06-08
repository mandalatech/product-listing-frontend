import React from 'react'
import { CCol, CRow, CButton, CSpinner } from '@coreui/react'
import { validateProductCreation } from '../../../validations/product.validation'
import { validateVariantData } from '../../../validations/productVariant.validation'
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
  // console.log(' fp2 ', props.product.images)
  // const fp = props.product.images.map((data, index) => {
  //   console.log(' fp3 ', data)
  //   return { image: data.image.encoded, type: data.type }
  // })
  // console.log(' fp : ', fp)
  // Handler for submitting form.
  const submitAddProductData_ = async () => {
    const productData = props.product
    const autoSKU = props.autoSKU
    // addToast(ToastComp)
    props.setVariantError({})
    props.setProductErrors({})

    console.log(' productData.warehouses ', productData.warehouses)
    console.log(' all product [err] ', props.product)
    const abortController = new AbortController()
    const signal = abortController.signal

    let { isValid, errors } = validateProductCreation(productData, autoSKU)

    let isVariantValid = []
    let variantErrors = []

    if (props.product.varientsData.length !== 0) {
      props.product.varientsData.forEach(data => {
        console.log(' product [err] ', data)
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
      let isAllVarientValid = true
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

      // Prepare payload for warehouse.
      const warehouses = productData.warehouses.map(warehouseOption => {
        return {
          warehouse: warehouseOption.warehouse,
          quantity: warehouseOption.quantity,
        }
      })

      let sku = productData.sku
      if (autoSKU || !productData.isSimpleProduct) {
        sku = getUniqueSKU(signal, productData, props.groups)
      }

      const filterImages = productData.images.map((data, index) => {
        console.log(' fp3 ', data)
        return { image: data.image.encoded, type: data.type }
      })

      // add product api request data format
      const payload = {
        is_simple_product: productData.isSimpleProduct,
        product_group: productData.group,
        title: productData.productname,
        short_description: productData.short_description,
        sku: sku,
        description: productData.description,
        manufacturer: productData.manufacturer,
        brand: productData.brand,
        price: parseInt(productData.price) || 0,
        cost: parseInt(productData.cost) || 0,
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
          height: productData.height || 0,
          length: productData.length || 0,
          width: productData.width || 0,
        },
        inventory: {
          type: productData.inventoryType,
        },
        stock: {
          type: productData.stockType,
          manage_stock: productData.manage_stock,
        },
        images: filterImages,
        warehouses: warehouses,
        extras: productData.extras,
      }

      if (productData.isSimpleProduct) {
        payload.asin = productData.asin || ''
        payload.mpn = productData.mpn || ''
        payload.upc = productData.upc || ''
      }

      if (!productData.manage_stock) {
        delete payload.warehouses
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
                  console.log(' [tess] ', element.image)
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

                  let varsku = element.sku
                  if (autoSKU) {
                    varsku = getUniqueSKU(signal, element)
                  }
                  console.log(' variants sku ', varsku)
                  const variantData = {
                    product: res.json.id,
                    name: element.name,
                    sku: varsku,
                    asin: element.asin || '',
                    mpn: element.mpn || '',
                    upc: element.upc || '',
                    image:
                      element.image.length !== 0 ? element.image[0].image : '',
                    major_weight: element.major_weight,
                    cost: parseInt(element.cost) || 0,
                    price: parseInt(element.price) || 0,
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
    const autoSKU = props.autoSKU

    console.log(' product [update] ', props.product.varientsData)
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
          quantity: warehouseOption.quantity,
        }
      })

      const filterImages = productData.images.map((data, index) => {
        console.log(' fp3 ', data)
        return { image: data.image.encoded, type: data.type }
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
          height: productData.height || 0,
          length: productData.length || 0,
          width: productData.width || 0,
        },
        inventory: {
          type: productData.inventoryType,
        },
        stock: {
          type: productData.stockType,
          manage_stock: productData.manage_stock,
        },
        images: filterImages,
        warehouses: warehouses,
        extras: productData.extras,
      }

      if (productData.isSimpleProduct) {
        payload.sku = productData.sku
        payload.asin = productData.asin
        payload.mpn = productData.mpn
        payload.upc = productData.upc
      }

      if (!productData.manage_stock) {
        payload.warehouses = []
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
              res.json.variants,
              ': props.product.varientsData :',
              props.product.varientsData
            )
            // setSubmissionLoader(false)
            if (props.product.varientsData.length > 0) {
              console.log(' extra variants [variant-submit] ')

              if (res.json.variants.length !== 0) {
                props.product.varientsData.forEach(async element => {
                  let ExtraVarients = {}
                  console.log(' element[elem] ', element, props.product.variant)
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

                  if (element.new) {
                    console.log('newVarSku', element.sku)
                    const variantData = {
                      product: props.id,
                      name: element.name,
                      sku: element.sku,
                      asin: element.asin,
                      mpn: element.mpn,
                      upc: element.upc,
                      image:
                        element.image && element.image[0]
                          ? element.image[0].image.encoded
                          : '',
                      major_weight: element.major_weight,
                      minor_weight: element.minor_weight,
                      cost: element.cost,
                      price: element.price,
                      extras: ExtraVarients,
                    }

                    await submitProductVariant(signal, variantData)
                      .then(resp => {
                        if (resp.response.ok) {
                          console.log(
                            'variant ok [variant-submit-update]',
                            resp
                          )
                          Toast.fire({
                            icon: 'success',
                            title: ToastMessage(
                              'success',
                              'Successfully Added[variant-submit-update]'
                            ),
                          })
                          // props.clearAddProductData()
                          setSubmissionLoader(false)
                          window.scrollTo(0, 0)
                          // props.history.push('/product')
                        }
                      })
                      .catch(err => {
                        setSubmissionLoader(false)
                        console.log(' error[variant-submit] ', err)
                        throw err
                      })
                    console.log(' updating new variant ')
                    setSubmissionLoader(false)
                  } else {
                    const variantData = {
                      id: element.id,
                      product: props.id,
                      name: element.name,
                      sku: element.sku,
                      asin: element.asin,
                      mpn: element.mpn,
                      upc: element.upc,
                      image:
                        element.image && element.image[0]
                          ? element.image[0].image.encoded
                          : '',
                      major_weight: element.major_weight,
                      minor_weight: element.minor_weight,
                      cost: element.cost,
                      price: element.price,
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
                          // props.clearAddProductData()
                          setSubmissionLoader(false)
                          window.scrollTo(0, 0)
                          // props.history.push('/products')
                        } else {
                          setSubmissionLoader(false)
                          Toast.fire({
                            icon: 'error',
                            title: ToastMessage(
                              'error',
                              'Failed to update new variant'
                            ),
                          })
                        }
                      })
                      .catch(err => {
                        setSubmissionLoader(false)
                        console.log(' error[variant-submit] ', err)
                        Toast.fire({
                          icon: 'success',
                          title: ToastMessage('error', err),
                        })
                      })
                  }
                })
              } else {
                props.product.varientsData.forEach(async element => {
                  let ExtraVarients = {}
                  console.log(' element new[elem] ', element)
                  props.product.variant.map((data, index) => {
                    return (ExtraVarients = {
                      ...ExtraVarients,
                      [data]: resolve(data, element),
                    })
                  })

                  console.log(' extra variants new [elem] ', ExtraVarients)

                  const variantData = {
                    product: props.id,
                    name: element.name,
                    sku: element.sku,
                    asin: element.asin,
                    mpn: element.mpn,
                    upc: element.upc,
                    image: element.image[0] ? element.image[0].image : [],
                    major_weight: element.major_weight,
                    minor_weight: element.minor_weight,
                    extras: ExtraVarients,
                  }

                  await submitProductVariant(signal, variantData)
                    .then(res => {
                      if (res.response.ok) {
                        Toast.fire({
                          icon: 'success',
                          title: ToastMessage(
                            'success',
                            'Successfully updated'
                          ),
                        })
                        setSubmissionLoader(false)
                      } else {
                        Toast.fire({
                          icon: 'error',
                          title: ToastMessage(
                            'error',
                            'Failed to update[add new var]'
                          ),
                        })
                        setSubmissionLoader(false)
                      }
                    })
                    .catch(err => {
                      Toast.fire({
                        icon: 'error',
                        title: ToastMessage(
                          'error',
                          'Failed to update[add new var]'
                        ),
                      })
                      setSubmissionLoader(false)
                    })
                })
              }
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
              props.history.push('/products')
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
              disabled={submissionLoader}
              onClick={submitAddProductData_}
              block
              color="warning"
            >
              {submissionLoader ? (
                <CSpinner color="secondary" size="sm" />
              ) : (
                <span style={{ color: 'white' }}>Save & Finish</span>
              )}
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
    groups: state.root.productGroups,
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
