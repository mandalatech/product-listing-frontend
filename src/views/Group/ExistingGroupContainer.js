import React from 'react'
import { connect } from 'react-redux'
import HorizontalRule from 'src/components/HorizontalRule'
import EditGroupRecord from './EditGroupRecord'

const ExistingGroupContainer = ({ attributes }) => {
  return (
    <div>
      <HorizontalRule />
      <h5 className="mb-4">Existing Attributes</h5>

      {attributes.map((attribute) => (
        <EditGroupRecord record={attribute} />
      ))}

      <HorizontalRule />
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    attributes: state.group.existingAttributes,
  }
}

export default connect(mapStatetoProps, null)(ExistingGroupContainer)
