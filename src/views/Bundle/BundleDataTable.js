import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import { ACTIONS } from 'src/constants'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { updateBundles } from 'src/reducers/actions/bundleAction'

import Modal from '../components/Modal'
import DeleteBundle from './DeleteBundle'
import AddBundle from './AddBundle'

import { getAllBundles } from 'src/api/bundleRequests'
import { setLoader } from 'src/reducers/actions/SettingsAction'

const BundleDataTable = (props) => {
  useEffect(() => {
    props.setLoader(true)
    getAllBundles().then(({ response, json }) => {
      if (response.ok) {
        props.updateBundles(json)
      }
      props.setLoader(false)
    })
  }, [])

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

  const getProductByID = (id) =>
    props.products && props.products.filter((product) => product.id === id)

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
              title={`${action} ${selectedItem.product_one} & ${selectedItem.product_two}`}
              onClose={setShowModal}
              size={action === 'EDIT' ? 'xl' : 'lg'}
            >
              {action === 'DELETE' ? (
                <DeleteBundle item={selectedItem} />
              ) : null}
              {action === 'EDIT' ? (
                <AddBundle item={selectedItem} isModal={true} edit={true} />
              ) : null}
            </Modal>
          ) : null}
          <CDataTable
            items={props.bundles}
            fields={fields}
            columnFilter
            tableFilter
            itemsPerPageSelect
            itemsPerPage={10}
            hover
            sorter
            pagination
            scopedSlots={{
              id: (item) => <td>{item.id}</td>,
              product_one: (item) => (
                <td>
                  {getProductByID(item.product_one) &&
                    getProductByID(item.product_one)[0].title}
                </td>
              ),
              product_two: (item) => (
                <td>
                  {getProductByID(item.product_two) &&
                    getProductByID(item.product_two)[0].title}
                </td>
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
    products: state.root.products,
  }
}

export default connect(mapStatetoProps, { updateBundles, setLoader })(
  BundleDataTable
)
