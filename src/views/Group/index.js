import React, { useState } from 'react'
import AddGroup from './AddGroup'
import GroupDataTable from './GroupDataTable'
import GroupHeader from './GroupHeader'

const Group = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <>
      <GroupHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddGroup isModal={false} _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <h4 className="mt-5 mb-3 font-weight-bold">All Group</h4>
      <GroupDataTable />
    </>
  )
}

export default Group
