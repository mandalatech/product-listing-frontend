import React, { useState } from 'react'
import { CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'

import TextField from 'src/components/TextField'

import {
  changeProductInput,
  setProductFieldError,
  clearProductFieldError,
} from 'src/reducers/actions/index'

import Modal from 'src/components/Modal'
import ChangeSKUSetting from 'src/views/SKU/'
import {
  checkASINUniquess,
  checkSKUUniquess,
  checkUPCUniquess,
} from 'src/api/ProductRequests'
import isEmpty from 'src/validations/isEmpty'

const ExtraAttributes = (props) => {
  const [showChangeSKUSettingModal, setShowChangeSKUSettingModal] =
    useState(false)
  const displayChangeSKUSettingModal = (e) => {
    console.log('Button clicked', showChangeSKUSettingModal)
    setShowChangeSKUSettingModal(true)
  }

  const onProductInputChange_ = (e) => {
    console.log('event[product]', e)
    props.changeProductInput(e.target.name, e.target.value)
  }

  const checkSKU = async () => {
    const { sku } = props.product
    if (!isEmpty(sku)) {
      const controller = new AbortController()
      const signal = controller.signal
      await checkSKUUniquess(signal, { sku }).then(({ json, response }) => {
        if (response.ok) {
          if (!json?.unique) {
            props.setProductFieldError('sku', 'Not unique')
          } else {
            props.clearProductFieldError('sku')
          }
        }
      })
    } else {
      props.setProductFieldError('sku', 'Required')
    }
  }
  const checkASIN = async () => {
    const { asin } = props.product
    if (!isEmpty(asin)) {
      const controller = new AbortController()
      const signal = controller.signal
      await checkASINUniquess(signal, { asin }).then(({ json, response }) => {
        if (response.ok) {
          if (!json?.unique) {
            props.setProductFieldError('asin', 'Not unique')
          } else {
            props.clearProductFieldError('asin')
          }
        }
      })
    }
  }
  const checkUPC = async () => {
    const { upc } = props.product
    if (!isEmpty(upc)) {
      const controller = new AbortController()
      const signal = controller.signal
      await checkUPCUniquess(signal, { upc }).then(({ json, response }) => {
        if (response.ok) {
          if (!json?.unique) {
            props.setProductFieldError('upc', 'Not unique')
          } else {
            props.clearProductFieldError('upc')
          }
        }
      })
    }
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="3" lg="2">
          {showChangeSKUSettingModal ? (
            <Modal
              title="Change SKU Setting"
              onClose={setShowChangeSKUSettingModal}
            >
              <ChangeSKUSetting isModal={true} />
            </Modal>
          ) : null}
          <TextField
            name="sku"
            value={props.product.sku}
            onChange={(e) => onProductInputChange_(e)}
            label="SKU"
            placeholder="E.g SKU16708945"
            error={props.product.errors.sku}
            disabled={props.autoSKU && !props.edit}
            helpText={
              props.autoSKU && !props.edit
                ? 'Auto populated based on your input'
                : null
            }
            secondaryLabel={props.edit ? null : 'Edit Setting'}
            secondaryLabelClick={
              props.edit ? null : displayChangeSKUSettingModal
            }
            onBlur={checkSKU}
          />
        </CCol>

        <CCol xs="12" md="2">
          <TextField
            name="mpn"
            label="MPN"
            value={props.product.mpn}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Manufacturer Pin Number"
            error={props.product.errors.mpn}
          />
        </CCol>

        <CCol xs="12" md="6">
          <TextField
            name="upc"
            label="UPC"
            value={props.product.upc}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Universal Product Code"
            labelTag="(Must be unique)"
            error={props.product.errors.upc}
            onBlur={checkUPC}
          />
        </CCol>

        <CCol xs="12" md="2">
          <TextField
            name="asin"
            label="ASIN"
            value={props.product.asin}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Amazon Standard Number"
            error={props.product.errors.asin}
            onBlur={checkASIN}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    autoSKU: state.settings.sku,
  }
}

export default connect(mapStateToProps, {
  changeProductInput,
  clearProductFieldError,
  setProductFieldError,
})(ExtraAttributes)
