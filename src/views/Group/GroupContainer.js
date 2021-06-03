import { freeSet } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import infoIcon from 'src/assets/icons/info.svg'
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

  useEffect(() => {
    if (props.edit) {
      handleAddGroupClick()
    }
  }, [])

  return (
    <div>
      {props.attributeLists.map((record) => (
        <GroupRecord record={record} edit={props.edit} />
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
          <div
            className="d-flex align-items-center"
            style={{ marginRight: '5rem' }}
          >
            <img src={infoIcon} alt="Info" style={{ paddingRight: '0.5rem' }} />
            <span>Add multiple keyword seperated by “,” comma</span>
          </div>
        </div>
      </div>
    </div>
  )
}

GroupContainer.defaultProps = {
  edit: false,
}

const mapStatetoProps = (state) => {
  return {
    attributeLists: state.group.attributes,
  }
}

export default connect(mapStatetoProps, { setProductGroupAttributes })(
  GroupContainer
)
