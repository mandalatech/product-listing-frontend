import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import Avatar from 'react-avatar'
import { ACTIONS } from 'src/constants'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { updateColors } from 'src/reducers/actions/index'

import Modal from '../../components/Modal'
import DeleteColor from './DeleteColor'

import AddColor from './AddColor'
import { getAllColors } from 'src/api/colorRequests'
import { setLoader } from 'src/reducers/actions/SettingsAction'

const ColorDataTable = (props) => {
  useEffect(() => {
    props.setLoader(true)
    getAllColors().then(({ response, json }) => {
      if (response.ok) {
        props.updateColors(json)
      }
      props.setLoader(false)
    })
  }, [])

  console.log(props.colors)

  const fields = [
    { key: 'id', _style: { width: '3%' }, filter: false },
    {
      key: 'name',
      label: 'Color Name',
      _style: { width: '30%' },
      filter: false,
    },
    {
      key: 'code',
      label: 'Color Hex Code',
      _style: { width: '10%' },
      filter: false,
    },
    { key: 'image', label: 'Color Image', sorter: false, filter: false },
    {
      key: 'shortcut_name',
      label: 'Color Shortcut Name',
      _style: { width: '20%' },
      filter: false,
    },
    { key: 'action', _style: { width: '20%' }, sorter: false, filter: false },
  ]

  const [action, setAction] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  const image = (item) => (
    <>
      {item.image.url ? (
        <img src={item.image.url} height="50px" alt={item.name} />
      ) : (
        <Avatar
          color={item.code}
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
              {action === 'DELETE' ? <DeleteColor item={selectedItem} /> : null}
              {action === 'EDIT' ? (
                <AddColor item={selectedItem} isModal={true} edit={true} />
              ) : null}
            </Modal>
          ) : null}
          <CDataTable
            items={props.colors}
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
    colors: state.root.colors,
  }
}

export default connect(mapStatetoProps, { updateColors, setLoader })(
  ColorDataTable
)
