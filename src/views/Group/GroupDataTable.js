import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { ACTIONS } from 'src/constants'

import Modal from '../components/Modal'
import DeleteGroup from './DeleteGroup'
import AddGroup from './AddGroup'

const GroupDataTable = (props) => {
  const fields = [
    { key: 'id', _style: { width: '3%' }, filter: false },
    { key: 'name', _style: { width: '20%' } },
    {
      key: 'attributes',
      label: 'Attributes',
      _style: { width: '30%' },
    },
    {
      key: 'possibleValues',
      label: 'Possible values',
      _style: { width: '30%' },
    },
    { key: 'action', _style: { width: '20%' }, sorter: false, filter: false },
  ]

  const [action, setAction] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  const attributes = (item) => {
    return item.fields.length > 0 ? (
      <span>{item.fields.map((attr) => attr.name).join(', ')}</span>
    ) : (
      <span className="text-warning">No attributes set yet. </span>
    )
  }

  const possibleValues = (item) => {
    return item.fields.length > 0 ? (
      item.fields.map((attr) => (
        <tr>
          <td className="font-weight-bold" style={{ width: '50%' }}>
            {attr.name}
          </td>
          {attr.datatype === 'enum' ? (
            attr.enum_group.values && (
              <td>
                {attr.enum_group.values.map((attr) => attr.value).join(', ')}
              </td>
            )
          ) : (
            <td>Takes input from user.</td>
          )}
        </tr>
      ))
    ) : (
      <span className="text-warning">Please set attributes first.</span>
    )
  }

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
            {action === 'DELETE' ? <DeleteGroup item={selectedItem} /> : null}
            {action === 'EDIT' ? (
                <AddGroup item={selectedItem} isModal={true} edit={true} />
              ) : null}
          </Modal>
        ) : null}
        <CDataTable
          items={props.groups}
          fields={fields}
          tableFilter
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination
          scopedSlots={{
            attributes: (item) => <td>{attributes(item)}</td>,
            possibleValues: (item) => (
              <table style={{ width: '100%' }} className="table">
                {possibleValues(item)}
              </table>
            ),
            action: (item) => <td>{actions(item)}</td>,
          }}
        />
      </CCardBody>
    </CCard>
  )
}

const mapStatetoProps = (state) => {
  return {
    groups: state.root.productGroups,
  }
}

export default connect(mapStatetoProps, null)(GroupDataTable)
