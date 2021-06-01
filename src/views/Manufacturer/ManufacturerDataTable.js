import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import Avatar from 'react-avatar'
import { ACTIONS } from 'src/constants'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { updateManufacturers } from 'src/reducers/actions/index'

import Modal from '../../components/Modal'
import DeleteManufacturer from './DeleteManufacturer'
import AddManufacturer from './AddManufacturer'
import { getAllManufacturers } from 'src/api/manufacturerRequests'
import { setLoader } from 'src/reducers/actions/SettingsAction'

const ManufacturerDataTable = (props) => {
  useEffect(() => {
    props.setLoader(true)
    getAllManufacturers().then(({ response, json }) => {
      if (response.ok) {
        props.updateManufacturers(json)
      }
      props.setLoader(false)
    })
  }, [])

  const fields = [
    { key: 'id', _style: { width: '3%' }, filter: false },
    { key: 'name', _style: { width: '40%' }, filter: false },
    { key: 'logo', label: 'Manufacturer Logo', sorter: false, filter: false },
    {
      key: 'shortcut_name',
      label: 'Manufacturer Shortcut Name',
      _style: { width: '20%' },
      filter: false,
    },
    { key: 'action', _style: { width: '20%' }, sorter: false, filter: false },
  ]

  const [action, setAction] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  const logo = (item) => (
    <>
      {item.logo ? (
        <img src={item.logo.url} height="50px" alt={item.name} />
      ) : (
        <Avatar
          color={Avatar.getRandomColor('sitebase', [
            'red',
            'green',
            'blue',
            'pink',
          ])}
          value={item.shortcut_name}
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
        title="View Manufacturer"
      >
        <img src={viewIcon} alt="View" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.EDIT)
          setShowModal(true)
        }}
        title="Edit Manufacturer"
      >
        <img src={editIcon} alt="Edit" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.DELETE)
          setShowModal(true)
        }}
        title="Delete Manufacturer"
      >
        <img src={trashIcon} alt="Delete" />
      </CButton>
    </>
  )

  return (
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
              <DeleteManufacturer item={selectedItem} />
            ) : null}
            {action === 'EDIT' ? (
              <AddManufacturer item={selectedItem} isModal={true} edit={true} />
            ) : null}
          </Modal>
        ) : null}
        <CDataTable
          items={props.manufacturers}
          fields={fields}
          columnFilter
          tableFilter
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination
          scopedSlots={{
            logo: (item) => <td>{logo(item)}</td>,
            action: (item) => <td>{actions(item)}</td>,
          }}
        />
      </CCardBody>
    </CCard>
  )
}

const mapStatetoProps = (state) => {
  return {
    manufacturers: state.root.manufacturers,
  }
}

export default connect(mapStatetoProps, { updateManufacturers, setLoader })(
  ManufacturerDataTable
)
