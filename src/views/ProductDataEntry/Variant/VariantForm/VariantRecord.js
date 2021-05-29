import React from 'react'
import { CCol, CRow, CInput } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import resolve from '../../../../helpers/getFromObj'
import Dropzone from 'src/views/components/Dropzone'
import { connect } from 'react-redux'
import {
  onVariantValueChange,
  removeVarient,
  addVriantProductState,
  changeProductInput,
  // onVariantValueChange,
} from '../../../../reducers/actions/index'
import { AiOutlineDeleteRow } from 'react-icons/ai'
import ErrorBody from '../../../../reusable/ErrorBody'

const VariantRecord = props => {
  const { symbol, state } = props

  const removeRecord = id => {
    let filteredVarients = props.product.varientsData.filter(data => {
      return data.id !== id
    })
    console.log(' filteredData : ', filteredVarients)
    props.removeVarient(filteredVarients)
  }
  // console.log(' variantMOdel [edit] ', props.product.variantModel)
  // const variantModel = [...props.product.variantModel] || []
  // let changedModel = []
  // variantModel.forEach(element => {
  //   changedModel.push(
  //     element
  //       .toLowerCase()
  //       .split(' ')
  //       .join('_')
  //   )
  // })

  const setVariantData_ = (e, id) => {
    props.onVariantValueChange(e.target.name, e.target.value, id)
  }

  const setVariantImage_ = (image, id) => {
    console.log(' variant image : variant id : ', image, ' : ', id)
    props.onVariantValueChange('image', image, id)
  }

  console.log('[variant-err]', props.product.variantErrors)

  console.log(
    ' varientsData: ',
    props.product.varientsData,
    props.product.variantModel
  )
  return (
    <div>
      <CRow className="variant-attributes">
        {props.product.variantModel &&
          [...props.product.variantModel].map((data, index) => {
            data = data
              .split('_')
              .join(' ')
              .toLowerCase()
            let stateKeys = Object.keys(state)
            let stateValues = Object.values(state)

            console.log(' state keys :[edit] ', stateKeys)
            console.log(' state keys :val ', stateValues)
            let errorMsg = {}
            props.product.variantErrors.forEach((data, index) => {
              if (data.id === state.id) {
                errorMsg = data
              }
            })
            console.log(' error msg : ', errorMsg)
            let value =
              data === 'name'
                ? state.name
                : data === 'sku'
                ? state.sku
                : data === 'mpn'
                ? state.mpn
                : data === 'upc'
                ? state.upc
                : data === 'asin'
                ? state.asin
                : data === 'major weight'
                ? state.major_weight
                : data === 'minor weight'
                ? state.minor_weight
                : data === 'id'
                ? state.id
                : data === 'image'
                ? state.image && state.image[0] && state.image[0].preview
                : props.product.variant.forEach(dataa => {
                    if (data === dataa) {
                      return resolve(data, state)
                    } else {
                      return ''
                    }
                  })
            return data === 'id' ? (
              <CCol
                md="1"
                className="text-bold d-flex flex-row "
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ paddingRight: '5px' }}>{value}</div>
                <AiOutlineDeleteRow
                  name="remove-variant-row"
                  style={{
                    fontSize: '40px',
                    color: '#E76154',
                    cursor: 'pointer',
                    borderLeftStyle: 'solid',
                    paddingLeft: '5px',
                    borderLeftWidth: '2px',
                    borderColor: 'rgba(0,0,0,0.3)',
                  }}
                  onClick={() => removeRecord(state.id)}
                />
              </CCol>
            ) : data === 'image' ? (
              <CCol className="variant-image">
                <Dropzone
                  type="PRODUCT_VARIANT_IMAGE"
                  setImageFiles={image => setVariantImage_(image, state.id)}
                />
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
                    data === 'major weight' || data === 'minor weight'
                      ? 'number'
                      : null
                  }
                />
                <ErrorBody>
                  {data === 'sku'
                    ? errorMsg.sku
                    : data === 'mpn'
                    ? errorMsg.mpn
                    : data == 'name'
                    ? errorMsg.name
                    : data === 'major weight'
                    ? errorMsg.major_weight
                    : data === 'minor weight'
                    ? errorMsg.minor_weight
                    : ''}
                </ErrorBody>
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
  { onVariantValueChange, removeVarient, changeProductInput }
)(VariantRecord)
