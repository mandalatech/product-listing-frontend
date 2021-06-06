import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllBundles } from 'src/api/bundleRequests'
import { getAllProducts } from 'src/api/ProductRequests'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'
import viewIcon from 'src/assets/icons/view.svg'
import { ACTIONS } from 'src/constants'
import { updateProducts } from 'src/reducers/actions/index'
import { updateBundles } from 'src/reducers/actions/bundle.actions'
import { setLoader } from 'src/reducers/actions/settings.actions'
import Modal from '../../components/Modal'
import AddBundle from './AddBundle'
import DeleteBundle from './DeleteBundle'
import { getProductTitle } from './helpers'

const BundleDataTable = (props) => {
  useEffect(() => {
    props.setLoader(true)
    getAllBundles().then(({ response, json }) => {
      if (response.ok) {
        props.updateBundles(json)
      }
      getAllProducts().then(({ response, json }) => {
        if (response.ok) {
          props.updateProducts(json)
        }
        props.setLoader(false)
      })
    })
  }, [])

  const fields = [
    { key: 'id', _style: { width: '3%' }, label: 'ID', filter: false },
    { key: 'name', _style: { width: '20%' }, label: 'Name', filter: false },
    {
      key: 'items',
      _style: { width: '40%' },
      label: 'Bundle Items',
      filter: false,
    },
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
        title="View Bundle"
      >
        <img src={viewIcon} alt="View" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.EDIT)
          setShowModal(true)
        }}
        title="Edit Bundle"
      >
        <img src={editIcon} alt="Edit" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.DELETE)
          setShowModal(true)
        }}
        title="Delete Bundle"
      >
        <img src={trashIcon} alt="Delete" />
      </CButton>
    </>
  )

  const bundleItems = (item) =>
    item.items.map((bundleItem) => (
      <tr>
        <td className="font-weight-bold" style={{ width: '50%' }}>
          {getProductTitle(props.products, bundleItem.product)}
        </td>
        <td style={{ width: '50%' }}>{bundleItem.quantity}</td>
      </tr>
    ))

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
              items: (item) => (
                <table style={{ width: '100%' }} className="table">
                  {bundleItems(item)}
                </table>
              ),
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

export default connect(mapStatetoProps, {
  updateBundles,
  setLoader,
  updateProducts,
})(BundleDataTable)
