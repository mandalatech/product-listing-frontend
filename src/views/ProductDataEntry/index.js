import React from 'react'

import BasicInfo from './BasicInfo'
import Description from './Description'
import InventoryControl from './InventoryControl'
import Measurement from './Measurement'
import Images from './Images'
import MetaDescription from './MetaDescription'
import Variant from './Variant'
import Actions from './Actions'
import EmptyGap from '../components/EmptyGap'

const DataEntry = () => {
  return (
    <>
      <BasicInfo />
      <InventoryControl />
      <Description />
      <Measurement />
      <Images />
      <MetaDescription />
      <Variant />
      <Actions />
      <EmptyGap y={5} />
    </>
  )
}

export default DataEntry
