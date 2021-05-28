import React, { useEffect } from 'react'

import { CCol, CRow, CCardBody, CCard, CButton } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import ComboInput from 'src/views/components/ComboInput'
import TextField from 'src/views/components/TextField'

import productPlacholder from 'src/assets/images/productPlaceholder.png'

import { connect } from 'react-redux'
import ErrorBody from 'src/reusable/ErrorBody'
import isEmpty from 'src/validations/isEmpty'

import {
  setBundleInput,
  setBundleInputError,
  clearBundleInput,
  updateBundles,
} from 'src/reducers/actions/bundleAction'
import { getAllBundles } from 'src/api/bundleRequests'

import { validateBundleCreation } from 'src/validations/addBundle'

import { addNewBundle } from 'src/api/bundleRequests'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const AddBundle = ({ _setShowCreateForm, isModal, edit, item, ...props }) => {
  useEffect(() => {
    // Clear Bundle Data on store on loading.
    props.clearBundleInput()
  }, [])

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
    return arr.map((product) => {
      product.name = product.title
      return product
    })
  }

  const onSelectionInput_ = (product, bundlePosition) => {
    if (bundlePosition == BUNDLE_POSITION.FIRST) {
      props.setBundleInput({ productOne: product })
    } else if (bundlePosition == BUNDLE_POSITION.SECOND) {
      props.setBundleInput({ productTwo: product })
    }
  }

  const handleBundleQuantityChange = (e) => {
    props.setBundleInput({ bundleQuantity: e.target.value })
  }

  const submitPayload = async () => {
    let { isValid, errors } = validateBundleCreation(props.bundle)
    props.setBundleInputError(errors)
    if (isValid) {
      const payload = {
        product_one: props.bundle.productOne.id,
        product_two: props.bundle.productTwo.id,
        quantity: props.bundle.bundleQuantity,
      }
      console.log('[PAYLOAD] for Bundle', payload)

      const abortController = new AbortController()
      const signal = abortController.signal

      await addNewBundle(signal, payload).then(({ json, response }) => {
        if (response.ok) {
          console.log('Request succesfully sent.')
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Bundle created.'),
          })
          props.clearBundleInput()
          getAllBundles().then(({ response, json }) => {
            if (response.ok) {
              props.updateBundles(json)
            }
          })
        } else {
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
                value={props.bundle.product_one}
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
                      {props.bundle.productOne && props.bundle.productOne.title}
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
                value={props.bundle.product_two}
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
                      {props.bundle.productTwo && props.bundle.productTwo.title}
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
              <div>
                <CIcon name="cilSettings" />
                &nbsp;
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
              <CButton block color="dark" onClick={submitPayload}>
                Create Bundle
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
