import React from 'react'
import { CCol, CRow, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'

import TextField from '../../components/TextField'
import ComboInput from './../../components/ComboInput'

import * as actionTypes from '../../../reducers/actions'

const Configurable = (props) => {
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
    const name = Object.keys(payload)[0]
    let obj = {}
    obj[name] = payload[name]
    props.updateBasicInfo({ ...obj })
  }

  return (
    <>
      <CFormGroup className="mb-4">
        <TextField
          name="title"
          label="Product Name"
          placeholder="Product Name e.g Crop tee"
          _onChange={_getValue}
        />
      </CFormGroup>

      <CRow>
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
            name="configBrand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
            _getValue={_getBrand}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productGroups: state.data.productGroups,
    brands: state.data.brands,
    manufacturers: state.data.manufacturers,
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

export default connect(mapStateToProps, mapDispatchToProps)(Configurable)
