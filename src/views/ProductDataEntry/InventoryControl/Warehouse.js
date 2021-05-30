import React, { useState, useEffect } from 'react'
import { CRow, CCol, CButton } from '@coreui/react'

import ComboInput from '../../components/ComboInput'
import TextField from 'src/views/components/TextField'
import CIcon from '@coreui/icons-react'

import { connect } from 'react-redux'

import { setInventoryWarehouseOptions } from 'src/reducers/actions/index'

const Warehouse = ({ options, record, ...props }) => {
  const [warehouse, setWarehouse] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [warehouseError, setWarehouseError] = useState('')
  const [quantityError, setQuantityError] = useState('')

  useEffect(() => {
    setWarehouse(record.warehouse)
    setQuantity(record.quantity)
  }, [])

  useEffect(() => {
    if (
      props.errors.warehouses &&
      props.errors.warehouses.hasOwnProperty(record.id)
    ) {
      const _errors = props.errors.warehouses[record.id]
      if (_errors && _errors.warehouse) {
        setWarehouseError(_errors.warehouse)
      }
      if (_errors && _errors.quantity) {
        setQuantityError(_errors.quantity)
      }
    }
  }, [props.errors])

  const handleWarehouseChange = (val) => {
    setWarehouse(val.id)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  useEffect(() => {
    let changedIndex = props.warehouseOptions.findIndex(
      (option) => option.id === record.id
    )
    let newWarehouseOptions = [...props.warehouseOptions]
    const changedRecord = {
      id: record.id,
      warehouse,
      quantity,
    }
    newWarehouseOptions[changedIndex] = changedRecord
    props.setInventoryWarehouseOptions(newWarehouseOptions)
  }, [warehouse, quantity])

  const handleDelete = () => {
    props.setInventoryWarehouseOptions(
      props.warehouseOptions.filter((option) => option.id !== record.id)
    )
  }

  return (
    <div>
      <CRow className="mb-4 d-flex justify-content-between align-items-center">
        <CCol xs="4">
          <ComboInput
            name="wareHouse"
            label="Name"
            placeholder="Select Warehouse Name"
            onChange={(val) => {
              handleWarehouseChange(val)
            }}
            options={options}
            error={warehouseError}
            value={record.warehouse}
          />
        </CCol>

        <CCol xs="4">
          <TextField
            name="quanitu"
            label="Quantity"
            placeholder="Quantity"
            type="number"
            onChange={(e) => {
              handleQuantityChange(e)
            }}
            error={quantityError}
            value={record.quantity}
          />
        </CCol>

        <CCol xs="4">
          <CButton
            variant="outline"
            type="reset"
            size="sm"
            color="danger"
            onClick={handleDelete}
          >
            <CIcon name="cil-trash" /> Delete
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    warehouseOptions: state.product.warehouses,
    errors: state.product.errors,
  }
}

export default connect(mapStateToProps, { setInventoryWarehouseOptions })(
  Warehouse
)
