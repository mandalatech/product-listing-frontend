import React from 'react'
import ProductTop from './ProductTop/ProdutTop'
import ProductTable from './ProductTable/ProductTable'
import { getAllProducts2 } from '../../api/ProductRequests'
import { connect } from 'react-redux'
import { setProductList } from '../../reducers/actions/index'
import { setLoader } from '../../reducers/actions/SettingsAction'
import Overlay from '../../reusable/overlay/Overlay'

const Products = props => {
  React.useEffect(async () => {
    ;(async () => {
      const controller = new AbortController()
      const signal = controller.signal
      props.setLoader(true)
      const response = await getAllProducts2(signal)
      if (response.response.ok) {
        props.setLoader(false)
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
  { setProductList, setLoader }
)(Products)
