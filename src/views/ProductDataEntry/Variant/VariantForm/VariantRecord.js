import React from 'react'
import { CCol, CRow, CInput } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import resolve from '../../../../helpers/getFromObj'
import Dropzone from 'src/views/components/Dropzone'
import PLdropzone from 'src/views/components/PLdropzone'
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
import Swal from 'sweetalert2'
import Del from '../../../../reusable/Toast/DeleteToast/Del'
import { deleteProductVariant } from '../../../../api/ProductRequests'

const VariantRecord = props => {
  const { symbol, state } = props
  console.log(' imageFiles [var-img]', props.imageFiles)

  const removeRecord = id => {
    if (props.edit && !state.new) {
      Del.fire()
        .then(async result => {
          if (result.isConfirmed) {
            await deleteProductVariant(id)
              .then(resp => {
                if (resp.response.ok) {
                  let filteredVarients = props.product.varientsData.filter(
                    data => {
                      return data.id !== id
                    }
                  )
                  console.log(' filteredData : ', filteredVarients)
                  props.removeVarient(filteredVarients)
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                } else {
                  Swal.fire('Failed!', 'Variant deletion failed!', 'error')
                }
              })
              .catch(err => {
                Swal.fire('Failed!', err.message, 'error')
              })
          }
        })
        .catch(err => {
          console.log(' del modal err ', err)
          Swal.fire('Failed!', err.message, 'error')
        })
    } else {
      let filteredVarients = props.product.varientsData.filter(data => {
        return data.id !== id
      })
      console.log(' filteredData : ', filteredVarients)
      props.removeVarient(filteredVarients)
    }
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

  const updateVariantImageFiles_ = (file, type, id) => {
    console.log(' variant image [var-img] ', file, type)
    if (type === 'add') {
      props.setVariantImage(file)
      props.onVariantValueChange(
        'image',
        { image: file[0].image.encoded, url: file[0].image.url },
        id
      )
    } else {
      console.log('var update', file)
      props.onVariantValueChange('image', file, id)
    }
  }

  // const setImages_ = image => {
  //   setImageFiles(image)
  // }

  console.log('[var-img]', props.product.varientsData)

  console.log(
    ' varientsData: ',
    props.product.varientsData,
    props.product.variantModel
  )
  console.log(' props.edit ', props.edit)
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
            console.log(' dataModals [var-test] ', data)
            console.log(' variant value[var-test] ', props.product.variant)
            console.log(' state keys :[edit] ', state)
            console.log(' state keys :val ', stateValues)
            let errorMsg = {}
            props.product.variantErrors.forEach((data, index) => {
              if (data.id === state.id) {
                errorMsg = data
              }
            })
            console.log(' error msg : ', errorMsg)
            // let autoSku = props.settings.sku ? true:false):false)

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
                ? state.image && state.image[0] && state.image[0].url
                : props.product.variant.forEach(dataa => {
                    console.log(' inside variant[var-tests] ', data, dataa)
                    if (data === dataa) {
                      console.log('resolve[var-tests]', resolve(data, state))
                      return resolve(data, state)
                    } else {
                      return ''
                    }
                  })
            console.log(' valueee here [var-tests] ', value)
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
                <div style={{ paddingRight: '5px' }}>{symbol}</div>
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
                {props.edit ? (
                  <PLdropzone
                    type="PRODUCT_VARIANT_IMAGE"
                    update={true}
                    setImageFiles={(files, type) =>
                      updateVariantImageFiles_(files, type, state.id)
                    }
                    imageFiles={state.image}
                    setImages={props.setVariantImage}
                  />
                ) : (
                  <Dropzone
                    type="PRODUCT_VARIANT_IMAGE"
                    setImageFiles={image => setVariantImage_(image, state.id)}
                  />
                )}
              </CCol>
            ) : (
              <CCol>
                <CInput
                  disabled={data === 'sku' && !props.edit && props.settings.sku}
                  onChange={e => setVariantData_(e, state.id)}
                  value={value}
                  placeholder={
                    data === 'sku' && props.settings.sku && !props.edit
                      ? '*auto'
                      : `${data.toLowerCase()}`
                  }
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
    settings: state.settings,
  }
}

export default connect(
  mapStateToProps,
  { onVariantValueChange, removeVarient, changeProductInput }
)(VariantRecord)
