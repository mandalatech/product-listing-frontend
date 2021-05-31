import React from 'react'
import ProductTop from './ProductTop/ProdutTop'
import ProductTable from './ProductTable/ProductTable'
import { getAllProducts2, getProductBrands } from '../../api/ProductRequests'
import { connect } from 'react-redux'
import { setProductList, setDefaults } from '../../reducers/actions/index'
import { setLoader } from '../../reducers/actions/SettingsAction'
import Overlay from '../../reusable/overlay/Overlay'

const Products = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  React.useEffect(async () => {
    ;(async () => {
      const controller = new AbortController()
      const signal = controller.signal
      props.setDefaults()
      props.setLoader(true)
      const response = await getAllProducts2(signal)
      if (response.response.ok) {
        props.setLoader(false)
        console.log(' fetched product data  ', response.json)
        props.setProductList(response.json)
      } else {
        props.setLoader(false)
      }
      console.log(' resp [loader] ', response)
    })()
  }, [])

  return (
    <>
      <ProductTop />
      <ProductTable />
    </>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  { setProductList, setLoader, setDefaults }
)(Products)
