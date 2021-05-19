import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'

import ComboInput from './../../components/ComboInput'
import TextField from '../../components/TextField'

import * as actionTypes from '../../../reducers/actions'

const SimpleProduct = (props) => {
  const _getProductGroup = (value) => {
    props.updateBasicInfo({ product_group: value.id })
  }

  const _getManufacturer = (value) => {
    props.updateBasicInfo({ manufacturer: value.id })
  }

  const _getBrand = (value) => {
    props.updateBasicInfo({ brand: value.id })
  }

  const _getValue = (payload) => {
    let name = Object.keys(payload)[0]
    let obj = {}
    obj[name] = payload[name]
    props.updateBasicInfo({ ...obj })
  }

  return (
    <>
      <TextField
        name="name"
        label="Product Name"
        placeholder="Product Name e.g Crop tee"
        _onChange={_getValue}
      />

      <CRow className="mb-4">
        <CCol xs="4">
          <ComboInput
            name="group"
            label="Group"
            placeholder="Select Group"
            options={props.productGroups}
            _getValue={_getProductGroup}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
            options={props.manufacturers}
            _getValue={_getManufacturer}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            name="brand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
            _getValue={_getBrand}
          />
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="3">
          <TextField
            name="sku"
            label="SKU"
            placeholder="E.g SKU16708945"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="mpn"
            label="MPN"
            placeholder="Manufacturer Pin Number"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="upc"
            label="UPC"
            placeholder="Universal Product Code"
            labelTag="(Must be unique)"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="asin"
            label="ASIN"
            placeholder="Amazon Standard Number"
            _onChange={_getValue}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productGroups: state.productGroups,
    brands: state.brands,
    manufacturers: state.manufacturers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBasicInfo: (payload) => {
      dispatch({
        type: actionTypes.UPDATE_BASIC_INFO,
        payload: payload,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleProduct)
