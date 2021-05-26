import React, { useEffect } from 'react'
import BasicInfo from './BasicInfo'
import Description from './Description'
import InventoryControl from './InventoryControl'
import Measurement from './Measurement'
import Images from './Images'
import MetaDescription from './MetaDescription'
import Variant from './Variant'
import Actions from './Actions'
import EmptyGap from '../components/EmptyGap'
import { getProductById, getVariantById } from '../../api/ProductRequests'
import ProductGroupFields from './ProductGroupFields'

const DataEntry = (props) => {
  console.log(' product [edit] ', props.edit, props)

  useEffect(() => {
    ;(async () => {
      const controller = new AbortController()
      const signal = controller.signal

      const ProductResponse = await getProductById(
        signal,
        props.match.params.id
      )
      const VariantResponse = await getVariantById(
        signal,
        props.match.params.id
      )
      console.log(' ProductResponse [edit] ', ProductResponse)
      console.log(' VariantResponse [edit] ', VariantResponse)
    })()
  })

  return (
    <>
      <BasicInfo />
      <ProductGroupFields />
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
