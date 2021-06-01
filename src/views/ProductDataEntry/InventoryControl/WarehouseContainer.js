import React, { useState, useEffect } from 'react'

import { CButton } from '@coreui/react'
import WarehouseRecord from './WarehouseRecord'
import HorizontalRule from 'src/components/HorizontalRule'
import Modal from 'src/components/Modal'
import AddWarehouse from 'src/views/Warehouse/AddWarehouse'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import infoIcon from 'src/assets/icons/info.svg'
import { connect } from 'react-redux'
import {
  updateWarehouses,
  setInventoryWarehouseOptions,
} from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import { getAllWarehouses } from 'src/api/warehouseRequests'

const WarehouseContainer = (props) => {
  const [showAddWarehouseModal, setShowAddWarehouseModal] = useState(false)

  useEffect(() => {
    getAllWarehouses().then(({ response, json }) => {
      if (response.ok) {
        props.updateWarehouses(json)
      }
    })
  }, [])

  const handleAddWarehouseClick = () => {
    if (props.warehouseOptions.length === props.warehouses.length) {
      Toast.fire({
        icon: 'warning',
        title: ToastMessage(
          'warning',
          `Can't add more warehouse options. The available warehouses is ${props.warehouses.length}`
        ),
      })
      return
    }
    // Handle the add warehouse button click.
    const newRecordID = Math.floor(Math.random() * 100000000 + 1)
    const newRecord = {
      id: newRecordID,
      warehouse: null,
      quantity: '',
    }
    props.setInventoryWarehouseOptions([...props.warehouseOptions, newRecord])
  }

  return (
    <div>
      <HorizontalRule />
      <div className="mb-4">
        {showAddWarehouseModal ? (
          <Modal
            title="Add Warehouse"
            onClose={setShowAddWarehouseModal}
            size="xl"
          >
            <AddWarehouse isModal={true} />
          </Modal>
        ) : null}
        <div className="d-flex align-items-baseline">
          <h4 style={{ color: 'black' }}>Warehouse</h4>
          <div
            className="font-weight-bold text-secondary ml-5"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowAddWarehouseModal(true)
            }}
          >
            {'+ Add Warehouse'}
          </div>
        </div>

        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)' }} className="d-flex align-items-center">
          <img src={infoIcon} alt="Info" style={{ paddingRight: '0.5rem' }} />
          Inventory can be set to multiple warehouses
        </p>
      </div>

      {props.warehouseOptions.map((warehouse) => (
        <WarehouseRecord options={props.warehouses} record={warehouse} />
      ))}
      <HorizontalRule />

      <CButton
        className="mb-0"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleAddWarehouseClick}
      >
        <div style={{ marginRight: 14 }}>
          <CIcon content={freeSet.cilPlus} size={'lg'} />
        </div>
        Add Another Warehouse
      </CButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    warehouses: state.root.warehouses,
    warehouseOptions: state.product.warehouses,
  }
}

export default connect(mapStateToProps, {
  updateWarehouses,
  setInventoryWarehouseOptions,
})(WarehouseContainer)
