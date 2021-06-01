import React from 'react'
import {
  CCol,
  CButton,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
  CRow,
} from '@coreui/react'
import FilterMenu from '../../../reusable/Filter/FilterMenu'
import { CIcon } from '@coreui/icons-react'
import { withRouter } from 'react-router-dom'
import store from '../../../store'
import { getFilterProduct, searchProduct } from '../../../api/ProductRequests'
import { setProductList } from '../../../reducers/actions/index'
import { connect } from 'react-redux'
import { SET_PROD_TABLE_LOADER } from '../../../reducers/types/product'

function ProductTop(props) {
  const [filter, setFilter] = React.useState('')
  const productLists = store.getState().product.productList

  const searchProduct_ = async (data) => {
    const controller = new AbortController()
    const signal = controller.signal
    console.log(' search data ', data)
    store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: true })
    await searchProduct(signal, `&title=${data}`)
      .then((searcchRes) => {
        if (searcchRes.response.ok) {
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
          props.setProductList(searcchRes.json)
        } else {
          console.log('res[search]', searcchRes)
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
        }
      })
      .catch((err) => {
        console.log('err[search]', err)
        store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
      })
  }

  const onFilterChange_ = async (data) => {
    console.log(' [prod-filter] ', filter, productLists)
    let query = ''
    const filterValue =
      data.label === 'with variants'
        ? 'yes'
        : data.label === 'without variants'
        ? 'no'
        : ''
    if (data.label === 'all') {
      query = ``
    } else {
      query = `&has_variant=${filterValue}`
    }
    store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: true })
    await getFilterProduct(query)
      .then((filterRes) => {
        console.log(' filter values ', filterRes)
        if (filterRes.response.ok) {
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
          props.setProductList(filterRes.json)
        } else {
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
          console.log(' filter not success ')
        }
      })
      .catch((err) => {
        store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
        console.log('err', err)
        throw err
      })
    setFilter(data.label)
  }

  return (
    <>
      <CRow className="c-row">
        <CCol md="2" className="c-row">
          <h5 className="outside-card-title">
            All Products({store.getState().product.productList.length || 0})
          </h5>
        </CCol>
        <CCol md="4">
          <CInputGroup>
            <CInputGroupPrepend>
              <CInputGroupText style={{ backgroundColor: '#ffffff' }}>
                <CIcon name="cil-magnifying-glass" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              onChange={(e) => searchProduct_(e.target.value)}
              placeholder="Search Product"
            />
          </CInputGroup>
        </CCol>
        <CCol
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          //   className="d-flex justify-content-center align-items-between"
          md="6"
        >
          <span style={{ fontSize: '15px', fontWeight: 400 }}>Filter by :</span>
          <CCol md="5">
            <FilterMenu
              label="Filter by :"
              name="product_filter"
              value={filter}
              onChange={onFilterChange_}
              selectValueByLabel={true}
              valueByLabel={filter}
              options={[
                { label: 'with variants', value: 'with_variant' },
                { label: 'without variants', value: 'without_variants' },
                { label: 'all', value: 'all' },
              ]}
            />
          </CCol>
          <CCol md="4">
            <CButton
              block
              color="warning"
              onClick={() => {
                props.history.push('/add-products')
              }}
            >
              <span style={{ color: '#fff', fontWeight: 600 }}>
                + &nbsp;Add Product
              </span>
            </CButton>
          </CCol>
        </CCol>
      </CRow>
    </>
  )
}

export default connect(null, { setProductList })(withRouter(ProductTop))
