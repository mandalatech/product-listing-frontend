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

  return (
    <div>
      <CRow className="d-flex align-items-center">
        <CCol>
          <ComboInput
            label="Product"
            placeholder="Select Product"
            name="product"
            options={makeOptions(props.products)}
            onChange={handleSelectionChange}
            value={record.product}
          />
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
        </CCol>
        <CCol md="1">
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
