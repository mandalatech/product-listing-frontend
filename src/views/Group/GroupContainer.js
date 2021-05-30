import React, { useState, useEffect } from 'react'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import { connect } from 'react-redux'
import { setProductGroupAttributes } from 'src/reducers/actions/index'

import GroupRecord from './GroupRecord'

const GroupContainer = (props) => {
  const handleAddGroupClick = () => {
    // Handle the add warehouse button click.
    const newRecordID = Math.floor(Math.random() * 100000000 + 1)
    const newRecord = {
      id: newRecordID,
      name: null,
      values: [],
    }
    props.setProductGroupAttributes(props.attributeLists.concat(newRecord))
  }

  return (
    <div>
      {props.attributeLists.map((record) => (
        <GroupRecord record={record} />
      ))}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <CButton
            className="mb-0"
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={handleAddGroupClick}
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
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    attributeLists: state.group.attributes,
  }
}

export default connect(mapStatetoProps, { setProductGroupAttributes })(
  GroupContainer
)
