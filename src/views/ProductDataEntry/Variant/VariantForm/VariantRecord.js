import React from 'react'
import { CCol, CRow, CInput } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import Dropzone from 'src/views/components/Dropzone'
import { connect } from 'react-redux'
import { onVariantValueChange } from '../../../../reducers/actions/index'

const VariantRecord = props => {
  const { symbol, state } = props

  const removeRecord = id => {
    props.removeRecord(id)
  }
  console.log(' varient dataaaa  ', props.product.varientsData)
  console.log(' varient dataa  ', props.product.variant)

  const variantModel = [...props.product.variantModel]
  let changedModel = []
  variantModel.forEach(element => {
    changedModel.push(
      element
        .toLowerCase()
        .split(' ')
        .join('_')
    )
  })

  const setVariantData_ = (e, id) => {
    console.log(' evv;shit ', e.target.name, ' : ', e.target.value)
    props.onVariantValueChange(e.target.name, e.target.value, id)
  }

  console.log(' props.state : ', props.state)

  return (
    <div>
      <CRow className="variant-attributes">
        {[...props.product.variantModel].map((data, index) => {
          let stateKeys = Object.keys(state)
          let stateValues = Object.values(state)

          console.log(' state keys : ', stateKeys)
          console.log(' state keys :val ', stateValues)
          let value =
            data === 'Variant Name'
              ? state.variant_name
              : data === 'SKU'
              ? state.sku
              : data === 'MPN'
              ? state.mpn
              : data === 'UPC'
              ? state.upc
              : data === 'ASIN'
              ? state.asin
              : data === 'Major weight'
              ? state.major_weight
              : data === 'Minor weight'
              ? state.minor_weight
              : props.product.variant.map((dataa, indexx) => {
                  console.log(' dataaa : ', stateKeys)
                  const ind = stateKeys.findIndex(dat => dat === dataa)
                  console.log('dataaa :ind ', stateValues[ind])
                  return data === dataa ? stateValues[ind] : ''
                })

          return data === 'ID' ? (
            <CCol
              md="1"
              className="text-bold d-flex flex-column justify-content-around"
              // style={{ marginRight: '-5rem' }}
            >
              <div>{symbol}</div>
              <CIcon
                name="cilPencil"
                onClick={() => {
                  removeRecord(state.id)
                }}
              />
            </CCol>
          ) : data === 'Image' ? (
            <CCol className="variant-image">
              <Dropzone />
            </CCol>
          ) : (
            <CCol>
              <CInput
                onChange={e => setVariantData_(e, state.id)}
                value={value}
                placeholder={`${data.toLowerCase()}`}
                name={`${data
                  .toLowerCase()
                  .split(' ')
                  .join('_')}`}
                type={
                  data === 'Major weight' || data === 'Minor weight'
                    ? 'number'
                    : null
                }
              />
            </CCol>
          )
        })}
        {/* <CCol
          md="1"
          className="text-bold d-flex flex-column justify-content-around"
          style={{ marginRight: '-5rem' }}
        >
          <div>{symbol}</div>
          <CIcon
            name="cilPencil"
            onClick={() => {
              removeRecord(state.id)
            }}
          />
        </CCol>
        <CCol className="variant-image">
          <Dropzone />
        </CCol>
        <CCol>
          <CInput placeholder="Variant Name" />
        </CCol>
        <CCol>
          <CInput placeholder="SKU" />
        </CCol>
        <CCol>
          <CInput placeholder="MPN" />
        </CCol>
        <CCol>
          <CInput placeholder="UPC" />
        </CCol>
        <CCol>
          <CInput placeholder="ASIN" />
        </CCol>
        <CCol>
          <CInput placeholder="Major Weight" type="number" />
        </CCol>
        <CCol>
          <CInput placeholder="Minor Weight" type="number" />
        </CCol> */}
      </CRow>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  { onVariantValueChange }
)(VariantRecord)
