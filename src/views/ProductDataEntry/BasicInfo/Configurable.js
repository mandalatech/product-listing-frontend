import React, { useEffect } from 'react'
import { CCol, CRow, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'
import {
  changeProductInput,
  updateBrands,
  updateManufacturers,
  updateProductGroups,
} from '../../../reducers/actions/index'
import TextField from '../../components/TextField'
import ComboInput from './../../components/ComboInput'

import {
  PRODUCT_GROUP_URL,
  BRAND_URL,
  MANUFACTURER_URL,
} from '../../../constants/urls'
import * as actionTypes from '../../../reducers/actions'

import callAPI from '../../../api'

const Configurable = props => {
  useEffect(() => {
    callAPI(PRODUCT_GROUP_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateProductGroups(res)
      }
    })
    callAPI(BRAND_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateBrands(res)
      }
    })
    callAPI(MANUFACTURER_URL, 'get').then(res => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateManufacturers(res)
      }
    })
  }, [])

  const onProductInputChange_ = e => {
    console.log('event[product]', e)
    props.changeProductInput(e.target.name, e.target.value)
  }

  const onSelectionInput_ = (e, name) => {
    console.log('options[product]', e)
    props.changeProductInput(name, e.value)
  }
  console.log(' prodddd: ', props.product)
  return (
    <>
      <CFormGroup className="mb-4">
        <TextField
          onChange={e => onProductInputChange_(e)}
          value={props.product.productname}
          name="productname"
          label="Product Name"
          placeholder="Product Name e.g Crop tee"
          error={props.product.errors.productname}
        />
      </CFormGroup>

      <CRow>
        <CCol xs="4">
          <ComboInput
            onChange={e => onSelectionInput_(e, 'group')}
            value={props.product.group}
            name="group"
            label="Group"
            placeholder="Select Group"
            options={props.productGroups}
            error={props.product.errors.group}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            onChange={e => onSelectionInput_(e, 'manufacturer')}
            value={props.product.manufacturer}
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
            options={props.manufacturers}
            error={props.product.errors.manufacturer}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            onChange={e => onSelectionInput_(e, 'brand')}
            value={props.product.brand}
            name="configBrand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
            error={props.product.errors.brand}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = state => {
  return {
    productGroups: state.productGroups,
    brands: state.brands,
    product: state.product,
    manufacturers: state.manufacturers,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updateProductGroups: groups =>
//       dispatch({
//         type: actionTypes.UPDATE_PRODUCT_GROUP,
//         payload: groups,
//       }),
//     updateBrands: groups =>
//       dispatch({
//         type: actionTypes.UPDATE_BRANDS,
//         payload: groups,
//       }),
//     updateManufacturers: groups =>
//       dispatch({
//         type: actionTypes.UPDATE_MANUFACTURERS,
//         payload: groups,
//       }),
//   }
// }

export default connect(
  mapStateToProps,
  { changeProductInput, updateBrands, updateManufacturers, updateProductGroups }
  // mapDispatchToProps
)(Configurable)
