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
            attributes: (item) => (
              <td>
                {item.fields.length > 0 ? (
                  item.fields.map((attr) => <span>{attr.name}, </span>)
                ) : (
                  <span className="text-warning">No attributes set yet. </span>
                )}
              </td>
            ),
            possibleValues: (item) => (
              <td>
                {item.fields.length > 0 ? (
                  item.fields.map((attr) => (
                    <div>
                      <span className="font-weight-bold">{attr.name} -> </span>
                      {attr.datatype === 'enum'
                        ? attr.enum_group.values &&
                          attr.enum_group.values.map((el) => (
                            <span>{el.value}, </span>
                          ))
                        : 'No possible values set.'}
                    </div>
                  ))
                ) : (
                  <span className="text-warning">
                    Please set attributes first.
                  </span>
                )}
              </td>
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
