import React, { useState } from 'react'
import { CButton, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import GroupRecord from './GroupRecord'

const GroupContainer = (props) => {
  const [groupRecordList, setGroupRecordList] = useState([1564135]) // Stores ID of each record.
  const [error, setError] = useState('')

  const handleAddWarehouseClick = (e) => {
    setError('')
    setGroupRecordList((prevList) => {
      return prevList.concat(Math.floor(Math.random() * 100000000 + 1))
    })
  }

  const handleDelete = (id) => {
    if (groupRecordList.length === 1) {
      setError('At least one attribute field is required.')
      return
    }
    setGroupRecordList((prevList) => {
      return prevList.filter((groupRecordId) => groupRecordId !== id)
    })
  }

  return (
    <div>
      {groupRecordList.map((groupRecordId) => (
        <GroupRecord groupRecordId={groupRecordId} onDelete={handleDelete} />
      ))}

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <CButton
            className="mb-0"
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={handleAddWarehouseClick}
          >
            <div style={{ marginRight: 14 }}>
              <CIcon content={freeSet.cilPlus} size={'lg'} />
            </div>
            Add Attribute
          </CButton>
        </div>
        <div>
          <div style={{ marginRight: '5rem' }}>
            <CIcon name="cilSettings" />
            &nbsp;
            <span>Add multiple values seperated by comma ‘,’</span>
          </div>
        </div>
      </div>
      <div className="my-3 text-danger small">{error}</div>
    </div>
  )
}

export default GroupContainer
