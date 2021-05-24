import React, { useState, useEffect } from 'react'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import { connect } from 'react-redux'
import { setProductGroupAttributes } from 'src/reducers/actions/index'

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

  const getEachRecordState = (record) => {
    const changedRecord = props.attributes.filter((el) => el.id !== record.id)
    props.setProductGroupAttributes(changedRecord.concat(record))
  }

  useEffect(() => {
    // Remove data of id `id` from groupRecordContentList if element `id` of
    // groupRecord gets deleted.
    props.setProductGroupAttributes(
      props.attributes.filter((el) => groupRecordList.includes(el.id))
    )
  }, [groupRecordList])

  return (
    <div>
      {groupRecordList.map((groupRecordId) => (
        <GroupRecord
          groupRecordId={groupRecordId}
          onDelete={handleDelete}
          getRecord={getEachRecordState}
        />
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

const mapStatetoProps = (state) => {
  return {
    attributes: state.group.attributes,
  }
}

export default connect(mapStatetoProps, { setProductGroupAttributes })(
  GroupContainer
)
