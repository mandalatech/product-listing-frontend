import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllBundles } from 'src/api/bundleRequests'
import editIcon from 'src/assets/icons/edit.svg'
import infoIcon from 'src/assets/icons/info.svg'
import trashIcon from 'src/assets/icons/trash.svg'
import viewIcon from 'src/assets/icons/view.svg'
import { ACTIONS } from 'src/constants'
import { updateBundles } from 'src/reducers/actions/bundle.actions'
import { setLoader } from 'src/reducers/actions/settings.actions'
import Modal from '../../components/Modal'
import AddBundle from './AddBundle'
import DeleteBundle from './DeleteBundle'

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
    { key: 'id', _style: { width: '3%' }, label: 'ID', filter: false },
    { key: 'name', _style: { width: '20%' }, label: 'Name', filter: false },
    { key: 'items', _style: { width: '40%' }, label: 'Bundle Items', filter: false },
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
          {bundleItem.product.title}
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
              items: (item) => (
                <table style={{ width: '100%' }} className="table">
                  {bundleItems(item)}
                </table>
              ),
              action: (item) => <td>{actions(item)}</td>,
            }}
          />
          <div className="d-flex align-items-center">
            <img src={infoIcon} alt="Info" style={{ paddingRight: '0.5rem' }} />
            <span>Only products that are unique together gets accepted.</span>
          </div>
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
})(BundleDataTable)
