import React, { useEffect } from 'react'
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
  getBrandNameByID,
} from 'src/api/ProductRequests'
import isEmpty from 'src/validations/isEmpty'
import Switch from 'src/components/Switch'
import { updateSKUSetting } from 'src/api/skuRequests'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import { setSKUAutoGeneration } from 'src/reducers/actions/settings.actions'

const ExtraAttributes = (props) => {
  const onProductInputChange_ = (e) => {
    console.log('event[product]', e)
    props.changeProductInput(e.target.name, e.target.value)
  }

  useEffect(() => {
    if (props.autoSKU && !props.edit) {
      const brandShortCutName = getBrandNameByID(
        props.product.brand,
        props.brands
      )
      const mpn = props.product.mpn.toUpperCase()
      let fields = []
      if (!isEmpty(brandShortCutName)) {
        fields.push(brandShortCutName)
      }
      if (!isEmpty(mpn)) {
        fields.push(mpn)
      }
      fields.push('PK1')
      const sku_ = fields.join('-')
      props.changeProductInput('sku', sku_)
    }
  }, [props.product.brand, props.product.mpn, props.autoSKU])

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

  const handleSKUSettingChange = (event) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    const payload = {
      can_user_generate: !event.target.checked,
    }
    updateSKUSetting(signal, payload).then(({ json, response }) => {
      if (response.ok) {
        Toast.fire({
          icon: 'success',
          title: ToastMessage('success', 'SKU Settings saved.'),
        })
        props.setSKUAutoGeneration(!json.can_user_generate)
      } else {
        Toast.fire({
          icon: 'warning',
          title: ToastMessage('warning', 'Error saving SKU Setting'),
        })
        console.log(json, response)
      }
    })
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="2">
          <TextField
            name="mpn"
            label="MPN"
            value={props.product.mpn}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="MPN"
            error={props.product.errors.mpn}
          />
        </CCol>

        <CCol xs="12" md="5">
          <TextField
            name="upc"
            label="UPC"
            value={props.product.upc}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="UPC"
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
            placeholder="ASIN"
            error={props.product.errors.asin}
            onBlur={checkASIN}
          />
        </CCol>
        <CCol xs="12" md="4" lg="3">
          <TextField
            name="sku"
            value={props.product.sku}
            onChange={(e) => onProductInputChange_(e)}
            label="SKU"
            placeholder="SKU"
            error={props.product.errors.sku}
            secondaryLabel={
              props.edit ? null : (
                <Switch
                  labelOn="A"
                  labelOff="M"
                  color="success"
                  value={props.autoSKU}
                  defaultValue={props.autoSKU}
                  checked={props.autoSKU}
                  onChange={handleSKUSettingChange}
                />
              )
            }
            secondaryLabelClick={() => {}}
            onBlur={checkSKU}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    brands: state.root.brands,
    product: state.product,
    autoSKU: state.settings.sku,
  }
}

export default connect(mapStateToProps, {
  changeProductInput,
  clearProductFieldError,
  setProductFieldError,
  setSKUAutoGeneration,
})(ExtraAttributes)
