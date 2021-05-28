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
import { setLoader } from '../../reducers/actions/SettingsAction'
import ProductGroupFields from './ProductGroupFields'
import resolve from '../../helpers/getFromObj'
import {
  setAllProductInput,
  addVriantProductState,
  setVariantModel,
  clearAddProductData,
} from '../../reducers/actions/index'
import { connect } from 'react-redux'
import Overlay from 'src/reusable/overlay/Overlay'

const DataEntry = props => {
  console.log(' product [edit] ', props.edit, props)

  useEffect(() => {
    ;(async () => {
      if (props.match.params.id) {
        console.log('edit product form')
        const controller = new AbortController()
        const signal = controller.signal
        props.setLoader(true)
        await getProductById(signal, props.match.params.id)
          .then(async ProductResponse => {
            if (ProductResponse.response.ok) {
              console.log(' ok[edit] ')
              props.setLoader(false)
              let models = ProductResponse.json.variants
              let varientsModal = []
              if (models.length !== 0) {
                varientsModal = Object.keys(models[0])
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
                  varientsModal.splice(2, 0, ...Object.keys(extra))
                  console.log(' extras [edit] ', extra)
                }
                console.log(' variant [edit] ', models)
              }
              console.log(' varmod  ', varientsModal)
              props.setVariantModel(varientsModal)
              props.setAllProductInput(ProductResponse.json)
            } else {
              props.setLoader(false)
            }
          })
          .catch(err => {
            props.setLoader(false)
            console.log('err[edit]', err)
            throw err
          })
      } else {
        console.log(' add product form [edit] ')
        props.clearAddProductData()
      }
    })()
  }, [props.match.params.id])

  return (
    <>
      {props.settings.topLoader ? <Overlay /> : null}
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
    settings: state.settings,
  }
}

export default connect(
  mapStateToProps,
  {
    setAllProductInput,
    addVriantProductState,
    setVariantModel,
    setLoader,
    clearAddProductData,
  }
)(DataEntry)
