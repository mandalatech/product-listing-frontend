import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'

import TextField from 'src/views/components/TextField'

import { changeProductInput } from 'src/reducers/actions/index'

const ExtraAttributes = (props) => {
  const onProductInputChange_ = (e) => {
    console.log('event[product]', e)
    props.changeProductInput(e.target.name, e.target.value)
  }

  console.log(' errors : ', props.product.errors)

  return (
    <>
      <CRow>
        <CCol xs="3">
          <TextField
            name="sku"
            value={props.product.sku}
            onChange={(e) => onProductInputChange_(e)}
            label="SKU"
            placeholder="E.g SKU16708945"
            error={props.product.errors.sku}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="mpn"
            label="MPN"
            value={props.product.mpn}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Manufacturer Pin Number"
            error={props.product.errors.mpn}
          />
        </CCol>

        <CCol xs="3">
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

        <CCol xs="3">
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
  }
}

export default connect(mapStateToProps, {
  changeProductInput,
})(ExtraAttributes)
