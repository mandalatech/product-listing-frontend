import { CIcon } from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { Multiselect } from 'multiselect-react-dropdown'
import React from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFilterProduct, searchProduct } from '../../../api/ProductRequests'
import {
  setProductHeaders,
  setProductList,
} from '../../../reducers/actions/index'
import { SET_PROD_TABLE_LOADER } from '../../../reducers/types/product'
import FilterMenu from '../../../reusable/Filter/FilterMenu'
import store from '../../../store'

function ProductTop(props) {
  const [filter, setFilter] = React.useState('')
  const productLists = store.getState().product.productList
  const [selectedValue, setSelectedValue] = React.useState([])
  const [selectedVal, setSelectedVal] = React.useState([])

  const columns = [
    {
      name: 'image',
      id: 2,
    },
    {
      name: 'name',
      id: 3,
    },
    {
      name: 'description',
      id: 4,
    },
    {
      name: 'cost',
      id: 5,
    },
    {
      name: 'price',
      id: 6,
    },
    {
      name: 'sku',
      id: 7,
    },
    {
      name: 'variants',
      id: 8,
    },
    {
      name: 'producttype',
      id: 9,
    },
    {
      name: 'inventorytype',
      id: 10,
    },
  ]

  const searchProduct_ = async data => {
    const controller = new AbortController()
    const signal = controller.signal
    console.log(' search data ', data)
    store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: true })
    await searchProduct(signal, `&search=${data}`)
      .then(searcchRes => {
        if (searcchRes.response.ok) {
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
          props.setProductList(searcchRes.json)
        } else {
          console.log('res[search]', searcchRes)
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
        }
      })
      .catch(err => {
        console.log('err[search]', err)
        store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
      })
  }

  const onSelect_ = (selectedList, selectedItem) => {
    console.log('select[multiselect]', selectedItem, selectedList)
    props.setProductHeaders(selectedList)
  }

  const onRemove_ = (selectedList, removedItem) => {
    console.log('remove[multiselect]', selectedList, removedItem)
    props.setProductHeaders(selectedList)
  }

  const onFilterChange_ = async data => {
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
      .then(filterRes => {
        console.log(' filter values ', filterRes)
        if (filterRes.response.ok) {
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
          props.setProductList(filterRes.json)
        } else {
          store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
          console.log(' filter not success ')
        }
      })
      .catch(err => {
        store.dispatch({ type: SET_PROD_TABLE_LOADER, payload: false })
        console.log('err', err)
        throw err
      })
    setFilter(data.label)
  }

  return (
    <>
      <CRow className="c-row">
        <CCol md="12">
          <h5 className="outside-card-title">All Products</h5>
        </CCol>
      </CRow>
      <CRow className="c-row">
        <CCol
          md="2"
          className="c-row"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', flex: 0.2 }}>
            <AiFillPlusSquare style={{ fontSize: '40px', color: 'blue' }} />
          </div>

          <Multiselect
            style={{
              chips: {
                display: 'none',
              },
              multiselectContainer: {
                maxWidth: '120px',
              },
            }}
            id="custom_checkbox"
            showCheckbox={true}
            placeholder="Edit column...."
            options={columns}
            selectedValues={props.productHeaderList}
            onSelect={onSelect_}
            onRemove={onRemove_}
            displayValue="name"
          />
        </CCol>
        <CCol md="4">
          <CInputGroup>
            <CInputGroupPrepend>
              <CInputGroupText style={{ backgroundColor: '#ffffff' }}>
                <CIcon name="cil-magnifying-glass" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              onChange={e => searchProduct_(e.target.value)}
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

const mapStateToProps = state => {
  return {
    productHeaderList: state.product.productHeaderList,
  }
}

export default connect(
  mapStateToProps,
  { setProductList, setProductHeaders }
)(withRouter(ProductTop))
