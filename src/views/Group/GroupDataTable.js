import React from 'react'
import { CButton, CCard, CCardBody, CDataTable } from '@coreui/react'
import { connect } from 'react-redux'

import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

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
          <td className="font-weight-bold">{attr.name}</td>
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

  return (
    <CCard>
      <CCardBody
        style={{ background: 'white', borderRadius: '10px', padding: '2rem' }}
      >
        <CDataTable
          items={props.groups}
          fields={fields}
          tableFilter
          itemsPerPageSelect
          itemsPerPage={5}
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
            action: (item) => (
              <td>
                <CButton>
                  <img src={viewIcon} alt="View" />
                </CButton>
                <CButton>
                  <img src={editIcon} alt="Edit" />
                </CButton>
                <CButton>
                  <img src={trashIcon} alt="Delete" />
                </CButton>
              </td>
            ),
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
