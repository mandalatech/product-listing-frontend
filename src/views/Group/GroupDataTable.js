import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllProductGroups } from 'src/api/groupRequests'
import editIcon from 'src/assets/icons/edit.svg'
import infoIcon from 'src/assets/icons/info.svg'
import trashIcon from 'src/assets/icons/trash.svg'
import viewIcon from 'src/assets/icons/view.svg'
import { ACTIONS } from 'src/constants'
import {
  clearProductGroupAttributes,
  updateProductGroups,
} from 'src/reducers/actions/index'
import { setLoader } from 'src/reducers/actions/settings.actions'
import Modal from '../../components/Modal'
import DeleteGroup from './DeleteGroup'
import EditGroup from './EditGroup'

const GroupDataTable = (props) => {
  useEffect(() => {
    props.setLoader(true)
    getAllProductGroups().then(({ response, json }) => {
      if (response.ok) {
        props.updateProductGroups(json)
      }
      props.setLoader(false)
    })
  }, [])

  const fields = [
    { key: 'id', _style: { width: '3%' }, filter: false },
    { label: 'Product Group', key: 'name', _style: { width: '20%' } },
    {
      key: 'possibleValues',
      label: 'Attributes & Possible values',
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

  const attributesAndPossibleValues = (item) => {
    return item.fields.length > 0 ? (
      item.fields.map((attr) => (
        <tr>
          <td className="font-weight-bold" style={{ width: '50%' }}>
            {attr.description}
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
          props.clearProductGroupAttributes()
          setSelectedItem(item)
          setAction(ACTIONS.VIEW)
          setShowModal(true)
        }}
        title="View Group"
      >
        <img src={viewIcon} alt="View" />
      </CButton>
      <CButton
        onClick={() => {
          props.clearProductGroupAttributes()
          setSelectedItem(item)
          setAction(ACTIONS.EDIT)
          setShowModal(true)
        }}
        title="Edit Group"
      >
        <img src={editIcon} alt="Edit" />
      </CButton>
      <CButton
        onClick={() => {
          setSelectedItem(item)
          setAction(ACTIONS.DELETE)
          setShowModal(true)
        }}
        title="Delete Group"
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
            size={action === 'EDIT' ? 'xl' : 'lg'}
          >
            {action === 'DELETE' ? <DeleteGroup item={selectedItem} /> : null}
            {action === 'EDIT' ? (
              <EditGroup item={selectedItem} isModal={true} edit={true} />
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
                {attributesAndPossibleValues(item)}
              </table>
            ),
            action: (item) => <td>{actions(item)}</td>,
          }}
        />

        <div className="d-flex align-items-center">
          <img src={infoIcon} alt="Info" style={{ paddingRight: '0.5rem' }} />
          <span>
            Editing and deleting are restricted if products are populated for
            those product groups.
          </span>
        </div>
      </CCardBody>
    </CCard>
  )
}

const mapStatetoProps = (state) => {
  return {
    groups: state.root.productGroups,
  }
}

export default connect(mapStatetoProps, {
  updateProductGroups,
  setLoader,
  clearProductGroupAttributes,
})(GroupDataTable)
