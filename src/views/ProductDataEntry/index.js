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

import {
  setAllProductInput,
  addVriantProductState,
  setVariantModel,
} from '../../reducers/actions/index'
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
              ProductResponse.json
            )
            if (ProductResponse.response.ok) {
              console.log(' ok[edit] ')
              let models = ProductResponse.json.variants
              console.log(' models[edit] ', Object.keys(models[0]))
              const varientsModal = Object.keys(models[0])
                .map((data, index) => {
                  return data === 'product'
                    ? null
                    : data === 'values'
                    ? null
                    : data === 'extras'
                    ? null
                    : data
                        .split('_')
                        .join(' ')
                        .toLowerCase()
                })
                .filter(data => data !== null)
              let extra = models[0].extras
              if (extra !== null) {
                console.log(' extras [edit] ', extra)
              }
              console.log(' variant [edit] ', models)
              props.setVariantModel(varientsModal)
              props.setAllProductInput(ProductResponse.json)
              // await getVariantById(signal, props.match.params.id)
              //   .then(VariantResponse => {
              //     console.log(
              //       ' VariantResponse [edit] ',
              //       VariantResponse.json.results
              //     )
              //     let currentVarientData = VariantResponse.json.results.filter(
              //       (data, index) => {
              //         console.log(
              //           ' V-data [edit]',
              //           data,
              //           props.match.params.id,
              //           data.product
              //         )
              //         return (
              //           data.product.toString() ===
              //           props.match.params.id.toString()
              //         )
              //       }
              //     )
              //     console.log(' variant dataaaaaaa [edit] ', currentVarientData)
              //     if (currentVarientData.length !== 0) {
              //       console.log(' ok2[edit] ', currentVarientData[0])
              //       const defaultModals = [...props.product.variantModel].map(
              //         data => data.toLowerCase()
              //       )
              //       const varientsModal = Object.keys(
              //         currentVarientData[0]
              //       ).map((data, index) => {
              //         return data === 'name'
              //           ? 'variant name'
              //           : data
              //               .split('_')
              //               .join(' ')
              //               .toLowerCase()
              //       })

              //       let commonModals = varientsModal.filter(x =>
              //         defaultModals.includes(x)
              //       )
              //       let extraModals = varientsModal.filter(
              //         x => !defaultModals.includes(x)
              //       )

              //       console.log(
              //         ' keys [edit] ',
              //         varientsModal,
              //         defaultModals,
              //         extraModals,
              //         commonModals
              //       )
              //       props.addVriantProductState(currentVarientData[0])
              //     } else {
              //       console.log(' No variant data available')
              //     }
              //   })
              //   .catch(err => {
              //     console.log(err)
              //     throw err
              //   })
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
      <ProductGroupFields />
      <InventoryControl />
      <Description />
      <Measurement />
      <Images edit={props.edit} />
      <MetaDescription />
      <Variant edit={props.edit} />
      <Actions edit={props.edit} id={props.match.params.id} />
      <EmptyGap y={5} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  { setAllProductInput, addVriantProductState, setVariantModel }
)(DataEntry)
