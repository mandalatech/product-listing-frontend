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
    {
      key: 'product_one',
      _style: { width: '30%' },
      label: 'Item One',
      filter: false,
    },
    {
      key: 'product_two',
      _style: { width: '40%' },
      label: 'Item Two',
      filter: false,
    },
    {
      key: 'quantity',
      label: 'Quantity',
      _style: { width: '5%' },
      filter: false,
    },
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
