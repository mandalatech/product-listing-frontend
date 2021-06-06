import CIcon from '@coreui/icons-react'
import { CButton, CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'
import ComboInput from 'src/components/ComboInput'
import TextField from 'src/components/TextField'
import {
  removeBundleItem,
  setBundleItem,
} from 'src/reducers/actions/bundle.actions'
import isEmpty from 'src/validations/isEmpty'
import React, { useState, useEffect } from 'react'
import ErrorBody from 'src/reusable/ErrorBody'
import {
  getProductStock,
  getProductTitle,
  getProductThumbnail,
  getProductPrice,
  getProductWeight,
} from './helpers'
import productPlacholder from 'src/assets/images/productPlaceholder.png'

const BundleRecord = ({ record, ...props }) => {
  const [productError, setProductError] = useState(null)
  const [quantityError, setQuantityError] = useState(null)

  const makeOptions = (arr) => {
    if (isEmpty(arr)) {
      return []
    }
    // const bundleItemsProductID = props.bundleItems.map((item) => item.product)
    // const filteredArr = arr.filter(
    //   (pr_) => !bundleItemsProductID.includes(pr_.id)
    // )
    // console.log('Filted arr', filteredArr, bundleItemsProductID)
    return arr.map((pr) => {
      pr.name = pr.title
      return pr
    })
  }

  useEffect(() => {
    setProductError('')
    setQuantityError('')
    if (props.error.hasOwnProperty(record.id)) {
      const _error = props.error[record.id]
      if (_error && _error.product) {
        setProductError(_error.product)
      }
      if (_error && _error.quantity) {
        setQuantityError(_error.quantity)
      }
    }
  }, [props.error])

  const handleDelete = () => {
    props.removeBundleItem(record.id)
  }

  const handleValueChange = (e) => {
    props.setBundleItem({
      ...record,
      quantity: e.target.value,
    })
  }

  const handleSelectionChange = (pr) => {
    props.setBundleItem({
      ...record,
      product: pr.id,
    })
  }

  const getThumbnail = () => {
    let thumbnail = productPlacholder
    // let thumbnail =
    //   getProductThumbnail(props.products, record.product) || productPlacholder
    return thumbnail
  }

  return (
    <div>
      <CRow className="d-flex align-items-start">
        <CCol>
          <ComboInput
            label="Product"
            placeholder="Select Product"
            name="product"
            options={makeOptions(props.products)}
            onChange={handleSelectionChange}
            value={record.product}
          />

          {!isEmpty(record.product) ? (
            <div className="d-flex mb-4">
              <div>
                <img
                  src={getThumbnail()}
                  alt={getProductTitle(props.products, record.product)}
                />
              </div>
              <div style={{ marginLeft: '1rem' }}></div>
              <div class="d-flex flex-column justify-content-evenly align-items-start">
                <p className="font-weight-bold" style={{ margin: '0' }}>
                  {getProductTitle(props.products, record.product)}
                </p>
                <p>
                  Total Available Stock:{' '}
                  {getProductStock(props.products, record.product)}
                </p>
              </div>
            </div>
          ) : null}
          <ErrorBody>{productError}</ErrorBody>
        </CCol>
        <CCol>
          <TextField
            type="number"
            label="Bundle Quantity"
            placeholder="Enter quantity"
            name="bundleQuantity"
            onChange={handleValueChange}
            value={record.quantity}
            error={quantityError}
          />
          {!isEmpty(record.quantity) ? (
            <div>
              <p className="my-0">
                Weight:{' '}
                <b>
                  {getProductWeight(props.products, record.product)} *{' '}
                  {record.quantity} ={' '}
                  {getProductWeight(props.products, record.product) *
                    record.quantity}
                </b>
              </p>
              <p className="my-0">
                Quantity:{' '}
                <b>
                  {getProductStock(props.products, record.product)} /{' '}
                  {record.quantity} ={' '}
                  {Math.floor(
                    getProductStock(props.products, record.product) /
                      record.quantity
                  )}
                </b>
              </p>
              <p className="my-0">
                Price:{' '}
                <b>
                  {getProductPrice(props.products, record.product)} *{' '}
                  {record.quantity} ={' '}
                  {getProductPrice(props.products, record.product) *
                    record.quantity}
                </b>
              </p>
            </div>
          ) : null}
        </CCol>
        <CCol md="1" className="pt-4">
          <CButton onClick={handleDelete}>
            <CIcon className="text-danger" name="cil-x-circle" />
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    products: state.root.products,
    bundle: state.bundle,
    error: state.bundle.error,
    bundleItems: state.bundle.bundleItems,
  }
}

export default connect(mapStatetoProps, { removeBundleItem, setBundleItem })(
  BundleRecord
)
