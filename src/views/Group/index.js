import React from 'react'
import AddGroup from './AddGroup'
import GroupDataTable from './GroupDataTable'
import GroupHeader from './GroupHeader'

const Group = () => {
  return (
    <>
      <GroupHeader />
      <AddGroup isModal={false} />
      <h4 className="mt-5 mb-3 font-weight-bold">All Group</h4>
      <GroupDataTable />
    </>
  )
}

export default Group
