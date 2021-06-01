import { CIcon } from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCol, CRow, CSpinner } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  createBundle,
  getAllBundles,
  updateBundle,
} from 'src/api/bundleRequests'
import productPlacholder from 'src/assets/images/productPlaceholder.png'
import ComboInput from 'src/components/ComboInput'
import TextField from 'src/components/TextField'
import {
  clearBundleInput,
  setBundleInput,
  setBundleInputError,
  updateBundles,
} from 'src/reducers/actions/bundleAction'
import ErrorBody from 'src/reusable/ErrorBody'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import { validateBundleCreation } from 'src/validations/addBundle'
import isEmpty from 'src/validations/isEmpty'
import infoIcon from 'src/assets/icons/info.svg'

const AddBundle = ({ _setShowCreateForm, isModal, edit, item, ...props }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Clear Bundle Data on store on loading.
    props.clearBundleInput()
  }, [])

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const getProductByID = (id) =>
    props.products && props.products.filter((product) => product.id === id)

  useEffect(() => {
    if (edit && !isEmpty(item)) {
      props.setBundleInput({ productOne: item.product_one })
      props.setBundleInput({ productTwo: item.product_two })
      props.setBundleInput({ bundleQuantity: item.quantity })
    }
  }, [])

  const BUNDLE_POSITION = Object.freeze({
    FIRST: 'FIRST',
    SECOND: 'SECOND',
  })

  const makeOptions = (arr) => {
    if (isEmpty(arr)) {
      return []
    }
    return arr.map((product) => {
      product.name = product.title
      return product
    })
  }

  const onSelectionInput_ = (product, bundlePosition) => {
    if (bundlePosition == BUNDLE_POSITION.FIRST) {
      props.setBundleInput({ productOne: product.id })
    } else if (bundlePosition == BUNDLE_POSITION.SECOND) {
      props.setBundleInput({ productTwo: product.id })
    }
  }

  const handleBundleQuantityChange = (e) => {
    props.setBundleInput({ bundleQuantity: e.target.value })
  }

  const submitPayload = async () => {
    let { isValid, errors } = validateBundleCreation(props.bundle)
    props.setBundleInputError(errors)
    if (isValid) {
      setLoading(true)
      const payload = {
        product_one: props.bundle.productOne,
        product_two: props.bundle.productTwo,
        quantity: props.bundle.bundleQuantity,
      }
      console.log('[PAYLOAD] for Bundle', payload)

      const abortController = new AbortController()
      const signal = abortController.signal

      if (!edit) {
        await createBundle(signal, payload).then(({ json, response }) => {
          if (response.ok) {
            console.log('Request succesfully sent.')
            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Bundle created.'),
            })
            props.clearBundleInput()
            setLoading(false)
            getAllBundles().then(({ response, json }) => {
              if (response.ok) {
                props.updateBundles(json)
              }
            })
          } else {
            setLoading(false)
            if (json.non_field_errors) {
              json.non_field_errors.forEach((error) => {
                Toast.fire({
                  icon: 'warning',
                  title: ToastMessage('warning', error),
                })
              })
            }
          }
        })
      } else {
        await updateBundle(signal, item.id, payload).then(
          ({ json, response }) => {
            if (response.ok) {
              console.log('Request succesfully sent.')
              Toast.fire({
                icon: 'success',
                title: ToastMessage('success', 'Bundle edited.'),
              })
              simulateEscape()
              props.clearBundleInput()
              setLoading(false)
              getAllBundles().then(({ response, json }) => {
                if (response.ok) {
                  props.updateBundles(json)
                }
              })
            } else {
              setLoading(false)
              if (json.non_field_errors) {
                json.non_field_errors.forEach((error) => {
                  Toast.fire({
                    icon: 'warning',
                    title: ToastMessage('warning', error),
                  })
                })
              }
            }
          }
        )
      }
    }
  }

  return (
    <>
      <CCard className="addpro-custom-card sm-pd">
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Bundle</h4>
        )}
        <CCardBody>
          <CRow>
            <CCol>
              <ComboInput
                name="product1ForBundle"
                label="Select item to create bundle for"
                placeholder="Eg: Product Name"
                options={makeOptions(props.products)}
                onChange={(product) =>
                  onSelectionInput_(product, BUNDLE_POSITION.FIRST)
                }
                value={props.bundle.productOne}
              />
              <ErrorBody>
                {props.error.productOne && props.error.productOne}
              </ErrorBody>
              {!isEmpty(props.bundle.productOne) ? (
                <div className="d-flex">
                  <div>
                    <img src={productPlacholder} alt="Polo Tshirt" />
                  </div>
                  <div style={{ marginLeft: '1rem' }}></div>
                  <div class="d-flex flex-column justify-content-evenly align-items-start">
                    <p className="font-weight-bold" style={{ margin: '0' }}>
                      {getProductByID(props.bundle.productOne) &&
                        getProductByID(props.bundle.productOne)[0].title}
                    </p>
                    <p style={{ margin: '0' }}>
                      Available Inventory Stock = Unknown
                    </p>
                  </div>
                </div>
              ) : null}
            </CCol>
            <CCol>
              <ComboInput
                name="product2ForBundle"
                label="Bundle With"
                placeholder="Eg: Product Name"
                options={makeOptions(props.products)}
                onChange={(product) =>
                  onSelectionInput_(product, BUNDLE_POSITION.SECOND)
                }
                value={props.bundle.productTwo}
              />
              <ErrorBody>
                {props.error.productTwo && props.error.productTwo}
              </ErrorBody>
              {!isEmpty(props.bundle.productTwo) ? (
                <div className="d-flex">
                  <div>
                    <img src={productPlacholder} alt="Polo Tshirt" />
                  </div>
                  <div style={{ marginLeft: '1rem' }}></div>
                  <div class="d-flex flex-column justify-content-evenly align-items-start">
                    <p className="font-weight-bold" style={{ margin: '0' }}>
                      {getProductByID(props.bundle.productTwo) &&
                        getProductByID(props.bundle.productTwo)[0].title}
                    </p>
                    <p style={{ margin: '0' }}>
                      Available Inventory Stock = Unknown
                    </p>
                  </div>
                </div>
              ) : null}
            </CCol>
          </CRow>
          <CRow className="mt-2 mb-4">
            <CCol>
              <ErrorBody>
                {props.error.sameProductOnBundle &&
                  props.error.sameProductOnBundle}
              </ErrorBody>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <TextField
                type="number"
                label="Bundle Quantity"
                placeholder="Enter quantity"
                name="bundleQuantity"
                value={props.bundle.bundleQuantity}
                onChange={handleBundleQuantityChange}
                error={props.error.bundleQuantity && props.error.bundleQuantity}
              />
              <div className="d-flex align-items-center">
                <img
                  src={infoIcon}
                  alt="Info"
                  style={{ paddingRight: '0.5rem' }}
                />
                <span>Info related to quantity selection criteria here.</span>
              </div>
            </CCol>
          </CRow>

          <CRow className="mt-5">
            <CCol sm="2" md="2">
              <CButton
                block
                variant="outline"
                color="dark"
                onClick={() => {
                  _setShowCreateForm(false)
                }}
              >
                Cancel
              </CButton>
            </CCol>

            <CCol sm="2" md="2">
              <CButton
                block
                color="dark"
                onClick={submitPayload}
                disabled={loading}
              >
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    products: state.root.products,
    bundle: state.bundle,
    error: state.bundle.error,
  }
}

AddBundle.defaultProps = {
  isModal: false,
  edit: false,
  item: null,
}

export default connect(mapStatetoProps, {
  setBundleInput,
  setBundleInputError,
  clearBundleInput,
  updateBundles,
})(AddBundle)
