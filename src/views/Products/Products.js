import React from 'react'
import ProductTop from './ProductTop/ProdutTop'
import ProductTable from './ProductTable/ProductTable'
import { getAllProducts2, getProductBrands } from '../../api/ProductRequests'
import { connect } from 'react-redux'
import { setProductList, setDefaults } from '../../reducers/actions/index'
import { setLoader } from '../../reducers/actions/settings.actions'
import Overlay from '../../reusable/overlay/Overlay'
import store from '../../store'

const Products = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  React.useEffect(async () => {
    ;(async () => {
      const controller = new AbortController()
      const signal = controller.signal
      props.setDefaults()
      store.dispatch({ type: 'SET_PROD_TABLE_LOADER', payload: true })
      props.setLoader(true)
      const response = await getAllProducts2(signal)
      if (response.response.ok) {
        props.setLoader(false)
        console.log(' fetched product data  ', response.json)
        props.setProductList(response.json)
        store.dispatch({ type: 'SET_PROD_TABLE_LOADER', payload: false })
      } else {
        props.setLoader(false)
        store.dispatch({ type: 'SET_PROD_TABLE_LOADER', payload: false })
      }
    })()
  }, [])

  return (
    <>
      <ProductTop />
      <ProductTable />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    product: state.product,
  }
}

export default connect(mapStateToProps, {
  setProductList,
  setLoader,
  setDefaults,
})(Products)
