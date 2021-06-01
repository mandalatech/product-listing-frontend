import React from 'react'
import { connect } from 'react-redux'
import EditGroupRecord from './EditGroupRecord'

const ExistingGroupContainer = ({ attributes }) => {
  return (
    <div className="mt-5">
      <h5 className="mb-4">Existing Attributes</h5>
      {attributes.map((attribute) => (
        <EditGroupRecord record={attribute} />
      ))}
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    attributes: state.group.existingAttributes,
  }
}

export default connect(mapStatetoProps, null)(ExistingGroupContainer)
