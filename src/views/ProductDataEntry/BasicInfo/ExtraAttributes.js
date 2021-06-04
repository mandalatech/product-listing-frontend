import React, { useState } from 'react'
import { CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'

import TextField from 'src/components/TextField'

import { changeProductInput } from 'src/reducers/actions/index'

import Modal from 'src/components/Modal'
import ChangeSKUSetting from 'src/views/SKU/'

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

  console.log(' edit : ', props.edit)

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
})(ExtraAttributes)
