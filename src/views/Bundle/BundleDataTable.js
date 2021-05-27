import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import { ACTIONS } from 'src/constants'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { updateBundles } from 'src/reducers/actions/bundleAction'

import Modal from '../components/Modal'
import DeleteBundle from './DeleteBundle'

const BundleDataTable = (props) => {
  const fields = [
    { key: 'id', _style: { width: '3%' }, label: 'ID' },
    { key: 'product_one', _style: { width: '30%' }, label: 'Item One' },
    { key: 'product_two', _style: { width: '40%' }, label: 'Item Two' },
    { key: 'quantity', label: 'Quantity', _style: { width: '5%' } },
    { key: 'action', _style: { width: '20%' }, sorter: false, filter: false },
  ]

  const [action, setAction] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

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
                <DeleteBundle item={selectedItem} />
              ) : null}
            </Modal>
          ) : null}
          <CDataTable
            items={props.bundles}
            fields={fields}
            columnFilter
            tableFilter
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots={{
              id: (item) => <td>{item.id}</td>,
              product_one: (item) => (
                <td>{props.getProduct(item.product_one)[0].title}</td>
              ),
              product_two: (item) => (
                <td>{props.getProduct(item.product_two)[0].title}</td>
              ),
              quantity: (item) => <td>{item.quantity}</td>,
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
    bundles: state.root.bundles,
    getProduct: (id) =>
      state.root.products.filter((product) => product.id === id),
  }
}

export default connect(mapStatetoProps, { updateBundles })(BundleDataTable)
