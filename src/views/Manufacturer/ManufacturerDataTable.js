import React from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import Avatar from 'react-avatar'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

import { deleteManufacturer } from 'src/api/manufacturerRequests'
import { updateManufacturers } from 'src/reducers/actions/index'

const ManufacturerDataTable = (props) => {
  const fields = [
    { key: 'id', _style: { width: '3%' }, filter: false },
    { key: 'name', _style: { width: '40%' } },
    { key: 'logo', label: 'Manufacturer Logo', sorter: false, filter: false },
    {
      key: 'shortcut_name',
      label: 'Manufacturer Shortcut Name',
      _style: { width: '20%' },
    },
    { key: 'action', _style: { width: '20%' }, sorter: false, filter: false },
  ]

  const logo = (item) => (
    <>
      {item.logo ? (
        <img src={item.logo} height="50px" alt={item.name} />
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

  // Actions
  const deleteGroup = (item) => {
    console.log('[DELETE] group: ', item)
    const abortController = new AbortController()
    const signal = abortController.signal
    const deleteResponse = deleteManufacturer(signal, item.id)
  }

  const actions = (item) => (
    <>
      <CButton>
        <img src={viewIcon} alt="View" />
      </CButton>
      <CButton>
        <img src={editIcon} alt="Edit" />
      </CButton>
      <CButton
        onClick={() => {
          deleteGroup(item)
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
        <CDataTable
          items={props.manufacturers}
          fields={fields}
          columnFilter
          tableFilter
          itemsPerPageSelect
          itemsPerPage={5}
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

export default connect(mapStatetoProps, { updateManufacturers })(
  ManufacturerDataTable
)
