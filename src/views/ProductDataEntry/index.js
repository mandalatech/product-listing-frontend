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
import { setAllProductInput } from '../../reducers/actions/index'
import { connect } from 'react-redux'

const DataEntry = props => {
  console.log(' product [edit] ', props.edit, props)

  useEffect(() => {
    ;(async () => {
      if (props.match.params.id) {
        console.log('edit product form')
        const controller = new AbortController()
        const signal = controller.signal

        await getProductById(signal, props.match.params.id)
          .then(async ProductResponse => {
            console.log(
              ' ProductResponse.response.ok [edit]',
              ProductResponse.response.ok
            )
            if (ProductResponse.response.ok) {
              console.log(' ok[edit] ')
              props.setAllProductInput(ProductResponse.json)
              await getVariantById(signal, props.match.params.id)
                .then(VariantResponse => {
                  console.log(' VariantResponse [edit] ', VariantResponse)
                  if (VariantResponse.response.ok) {
                    console.log(' ok2[edit] ', VariantResponse.json)
                  } else {
                    console.log(' No variant data available')
                  }
                })
                .catch(err => {
                  console.log(err)
                  throw err
                })
            }
            console.log(' ProductResponse [edit] ', ProductResponse)
            // console.log(' VariantResponse [edit] ', VariantResponse)
          })
          .catch(err => {
            console.log('err[edit]', err)
            throw err
          })

        // const VariantResponse = await getVariantById(
        //   signal,
        //   props.match.params.id
        // )
      } else {
        console.log(' add product form [edit] ')
      }
    })()
  }, [props.match.params.id])

  return (
    <>
      <BasicInfo />
      <InventoryControl />
      <Description />
      <Measurement />
      <Images edit={props.edit} />
      <MetaDescription />
      <Variant />
      <Actions edit={props.edit} id={props.match.params.id} />
      <EmptyGap y={5} />
    </>
  )
}

export default connect(
  null,
  { setAllProductInput }
)(DataEntry)
