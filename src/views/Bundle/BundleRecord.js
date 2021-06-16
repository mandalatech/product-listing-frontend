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
import { BASE_URL } from 'src/constants'

const BundleRecord = ({ record, ...props }) => {
  const [productError, setProductError] = useState(null)
  const [quantityError, setQuantityError] = useState(null)

  const makeOptions = (arr) => {
    if (isEmpty(arr)) {
      return []
    }
    const bundleItemsProductID = props.bundleItems.map((item) => item.product)
    const filteredArr = arr.filter(
      (pr_) => !bundleItemsProductID.includes(pr_.id)
    )
    return filteredArr.map((pr) => {
      const tinyList = {
        id: pr.id,
        name: pr.title,
      }
      return tinyList
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
    let thumbnail = getProductThumbnail(props.products, record.product)
    if (isEmpty(thumbnail)) {
      thumbnail = productPlacholder
    } else {
      thumbnail = BASE_URL + thumbnail
    }
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
                  height="50"
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
              <table className="table table-sm table-striped mt-0">
                <thead>
                  <tr>
                    <th scope="col">Total Quantity</th>
                    <th scope="col">Bundle Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{getProductStock(props.products, record.product)}</td>
                    <td>
                      {getProductStock(props.products, record.product)} /{' '}
                      {record.quantity} ={' '}
                      {Math.floor(
                        getProductStock(props.products, record.product) /
                          record.quantity
                      )}
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">Unit Weight</th>
                    <th scope="col">Bundle Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{getProductWeight(props.products, record.product)}</td>
                    <td>
                      {getProductWeight(props.products, record.product)} *{' '}
                      {record.quantity} ={' '}
                      {getProductWeight(props.products, record.product) *
                        record.quantity}
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Bundle Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{getProductPrice(props.products, record.product)}</td>
                    <td>
                      {getProductPrice(props.products, record.product)} *{' '}
                      {record.quantity} ={' '}
                      {getProductPrice(props.products, record.product) *
                        record.quantity}
                    </td>
                  </tr>
                </tbody>
              </table>
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
