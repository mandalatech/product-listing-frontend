import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import Avatar from 'react-avatar'
import { ACTIONS } from 'src/constants'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { updateWarehouses } from 'src/reducers/actions/index'

import Modal from '../components/Modal'
import DeleteWarehouse from './DeleteWarehouse'

import callAPI from 'src/api'
import { WAREHOUSE_URL } from 'src/constants/urls'

const WarehouseDataTable = (props) => {
  useEffect(() => {
    callAPI(WAREHOUSE_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateWarehouses(res)
      }
    })
  }, [])

  const fields = [
    { key: 'id', _style: { width: '3%' }, filter: false },
    { key: 'name', label: 'Name', _style: { width: '20%' } },
    { key: 'address', label: 'Address', _style: { width: '10%' } },
    { key: 'city', label: 'City', _style: { width: '10%' } },
    { key: 'state', label: 'State', _style: { width: '10%' } },
    { key: 'phone', label: 'Phone Number', _style: { width: '10%' } },
    { key: 'zip_code', label: 'ZIP Code', _style: { width: '10%' } },
    { key: 'action', _style: { width: '30%' }, sorter: false, filter: false },
  ]

  const [action, setAction] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  const image = (item) => (
    <>
      {item.image ? (
        <img src={item.structure_iamge} height="50px" alt={item.name} />
      ) : (
        <Avatar
          value={item.name}
          round={true}
          size="50px"
        />
      )}
    </>
  )

  const actions = (item) => (
    <>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.VIEW)
          setShowModal(true)
        }}
      >
        <img src={viewIcon} alt="View" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.EDIT)
          setShowModal(true)
        }}
      >
        <img src={editIcon} alt="Edit" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.DELETE)
          setShowModal(true)
        }}
      >
        <img src={trashIcon} alt="Delete" />
      </CButton>
    </>
  )

  return (
    <>
      <CCard>
        <CCardBody
          style={{ background: 'white', borderRadius: '10px', padding: '2rem' }}
        >
          {showModal ? (
            <Modal
              showModal={showModal}
              title={`${action} ${selectedItem.name}`}
              onClose={setShowModal}
            >
              {action === 'DELETE' ? (
                <DeleteWarehouse item={selectedItem} />
              ) : null}
            </Modal>
          ) : null}
          <CDataTable
            items={props.warehouses}
            fields={fields}
            columnFilter
            tableFilter
            itemsPerPageSelect
            itemsPerPage={10}
            hover
            sorter
            pagination
            scopedSlots={{
              image: (item) => <td>{image(item)}</td>,
              action: (item) => <td>{actions(item)}</td>,
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    warehouses: state.root.warehouses,
  }
}

export default connect(mapStatetoProps, { updateWarehouses })(WarehouseDataTable)
