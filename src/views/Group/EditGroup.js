import { CButton, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TextField from 'src/components/TextField'
import {
  populateExistingGroupAttributes,
  setProductGroupAttributes,
  setProductGroupName,
  updateProductGroups,
} from 'src/reducers/actions/index'
import isEmpty from 'src/validations/isEmpty'
import ExistingGroupContainer from './ExistingGroupContainer'
import GroupContainer from './GroupContainer'

const EditGroup = ({ edit, item, isModal, ...props }) => {
  useEffect(() => {
    if (edit && !isEmpty(item)) {
      console.log('SELECTED ITEM', item)
      if (!isEmpty(item.fields)) {
        props.populateExistingGroupAttributes(item.fields)
        props.setProductGroupName(item.name)
      }
    }
  }, [item])

  return (
    <div>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Group</h4>
        )}
        <CCardBody>
          <TextField
            name="name"
            label="Group name"
            placeholder="Enter group name here"
            value={props.group.name}
          />
          <ExistingGroupContainer />
          <GroupContainer />
          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark">
                Cancel
              </CButton>
            </CCol>

            <CCol sm="2" md="2">
              <CButton block color="dark">
                Update
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    group: state.group,
  }
}

export default connect(mapStatetoProps, {
  setProductGroupName,
  updateProductGroups,
  setProductGroupAttributes,
  populateExistingGroupAttributes,
})(EditGroup)
