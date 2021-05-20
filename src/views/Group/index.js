import React from 'react'
import AddGroup from './AddGroup'
import GroupHeader from './GroupHeader'

const Group = () => {
  return (
    <>
      <GroupHeader />
      <AddGroup isModal={false}/>
    </>
  )
}

export default Group
