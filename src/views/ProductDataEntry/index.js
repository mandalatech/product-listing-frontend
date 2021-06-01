import React, { useEffect, useState } from 'react'
import BasicInfo from './BasicInfo'
import Description from './Description'
import InventoryControl from './InventoryControl'
import Measurement from './Measurement'
import Images from './Images'
import MetaDescription from './MetaDescription'
import Variant from './Variant'
import Actions from './Actions'
import EmptyGap from '../../components/EmptyGap'
import { getProductById, getVariantById } from '../../api/ProductRequests'
import { setLoader } from '../../reducers/actions/SettingsAction'
import ProductGroupFields from './ProductGroupFields'
import resolve from '../../helpers/getFromObj'
import {
  setAllProductInput,
  addVriantProductState,
  setVariantModel,
  clearAddProductData,
  setDefaults,
} from '../../reducers/actions/index'
import { connect } from 'react-redux'
import Overlay from 'src/reusable/overlay/Overlay'

const DataEntry = props => {
  console.log(' product [edit] ', props.edit, props)

  const [imageFiles, setImageFiles] = useState([])
  const [variantImage, setVariantImage] = useState([])

  const setVariantImage_ = image => {
    console.log('image[var-img]', image)
    setVariantImage(image)
  }

  const setImages_ = (images, type) => {
    if (type) {
      setImageFiles(images)
    } else {
      setImageFiles(prev => {
        return prev.concat(images)
      })
    }
  }

  useEffect(() => {
    ;(async () => {
      props.setDefaults()
      if (props.match.params.id) {
        console.log('edit product form')
        const controller = new AbortController()
        const signal = controller.signal
        props.setLoader(true)
        setImageFiles([])
        await getProductById(signal, props.match.params.id)
          .then(async ProductResponse => {
            if (ProductResponse.response.ok) {
              console.log(' product response ', ProductResponse)
              props.setLoader(false)
              let variantsMod = props.product.variantModel.map(data => {
                return data.toLowerCase()
              })
              console.log(' var mode[test] ', variantsMod)
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
                props.setVariantModel(varientsModal)
              }
              console.log(' varmod  ', varientsModal)
              setImageFiles(ProductResponse.json.images)
              props.setAllProductInput(ProductResponse.json)
              console.log('PRODUCT RESPONSE ---', ProductResponse.json)
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
  console.log(' product state data ', props.product.extras)
  return (
    <>
      {props.settings.topLoader ? <Overlay /> : null}
      <BasicInfo edit={props.edit} />
      <ProductGroupFields edit={props.edit} />
      <InventoryControl edit={props.edit} />
      <Description />
      <Measurement />
      <Images
        imageFiles={imageFiles}
        setImages={setImages_}
        edit={props.edit}
      />
      <MetaDescription />
      <Variant
        variantImage={variantImage}
        setVariantImage={setVariantImage_}
        edit={props.edit}
      />
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
    setDefaults,
  }
)(DataEntry)
