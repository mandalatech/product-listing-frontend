import React from 'react'
import { CCard, CRow, CCardBody, CDataTable } from '@coreui/react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import ActionFormatter from './ActionFormatter'
import IsEmpty from '../../components/IsEmpty'
import isEmpty from '../../../validations/isEmpty'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function ProductTable(props) {
  // React.useEffect(() => {
  //   ;(async () => {
  //     const controller = new AbortController()
  //     const signal = controller.signal
  //     props.setLoader(true)
  //     await getAllProducts(signal)
  //       .then(res => {
  //         console.log('resp :[product-list] ', res.json)
  //         if (res.response.ok) {
  //           props.setLoader(false)
  //           props.setProductList(res.json)
  //         } else {
  //           props.setLoader(false)
  //         }
  //       })
  //       .catch(err => {
  //         props.setLoader(false)
  //         console.log(' err ', err)
  //         throw err
  //       })
  //     return () => {
  //       controller.abort()
  //     }
  //   })()
  // })

  const actionsFormatter = (cell, row) => (
    <ActionFormatter history={props.history} id={row.id} />
  )
  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
    },
    {
      dataField: 'image',
      text: 'Image',
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'description',
      text: 'Description',
    },
    {
      dataField: 'quantity',
      text: 'Quantity',
    },
    {
      dataField: 'price',
      text: 'Price',
    },
    {
      dataField: 'brand',
      text: 'Brand',
    },
    {
      dataField: 'variants',
      text: 'Variants',
    },
    {
      dataField: 'actions',
      text: 'Actions',
      isDummyField: true,
      csvExport: false,
      formatter: actionsFormatter,
    },
  ]

  let products = [
    {
      id: '1',
      image: '-',
      name: 'productA',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '2',
      image: '-',
      name: 'productB',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '3',
      image: '-',
      name: 'productC',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '4',
      image: '-',
      name: 'productD',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '5',
      image: '-',
      name: 'productA',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '6',
      image: '-',
      name: 'productB',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '7',
      image: '-',
      name: 'productC',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '8',
      image: '-',
      name: 'productD',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '9',
      image: '-',
      name: 'productA',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '10',
      image: '-',
      name: 'productB',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '11',
      image: '-',
      name: 'productC',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
    {
      id: '12',
      image: '-',
      name: 'productD',
      description: 'some description',
      quantity: '10',
      price: '10$',
      brand: 'brandA',
      variants: '2',
      actions: '-',
    },
  ]

  const variantsColumn = [
    {
      dataField: 'id',
      text: 'Id',
    },
    {
      dataField: 'image',
      text: 'Image',
    },
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'sku',
      text: 'SKU',
    },
    {
      dataField: 'mpn',
      text: 'MPN',
    },
    {
      dataField: 'asin',
      text: 'ASIN',
    },
    {
      dataField: 'upc',
      text: 'UPC',
    },
    {
      dataField: 'major_weight',
      text: 'Weight-a',
    },
    {
      dataField: 'minor_weight',
      text: 'Weight-b',
    },
  ]

  const variantsData = [
    {
      id: '11',
      image: '-',
      name: 'variantA',
      sku: 'SKU',
      mpn: 'MPN',
      asin: 'ASIN',
      upc: 'upc',
      major_weight: '10kg',
      minor_weight: '7kg',
    },
    {
      id: '22',
      image: '-',
      name: 'variantb',
      sku: 'SKU2',
      mpn: 'MPN2',
      asin: 'ASIN2',
      upc: 'UPC2',
      major_weight: '5kg',
      minor_weight: '4kg',
    },
  ]

  const productDataa = []
  props.product.productList &&
    props.product.productList.forEach((data, index) => {
      productDataa.push({
        id: data.id,
        image: (data.image && data.image[0].image) || '',
        name: data.title,
        description: data.short_description,
        quantity: '-',
        proce: '-',
        brand: data.brand,
        variants: data.variants.length || '',
        actions: '-',
      })
    })

  const [activeRow, setActiveRow] = React.useState(0)

  const expandRow = {
    renderer: row => (
      <>
        {console.log(' rooo : ', row)}
        <br />
        <BootstrapTable
          keyField="id"
          data={variantsData}
          columns={variantsColumn}
          rowClasses="VariantRow"
          hover
          bordered={true}
        />
        {isEmpty(variantsData) && (
          <>
            <IsEmpty>Data not available</IsEmpty>
            <br />
            <br />
          </>
        )}
      </>
    ),
    onExpand: row => {
      setActiveRow(row.id)
    },
  }

  console.log(' active row :[product table] ', activeRow)
  return (
    <CRow className="prod-table-container">
      <CCard className="table-card">
        <CCardBody>
          <BootstrapTable
            keyField="id"
            hover={false}
            rowClasses="CustomRow"
            headerClasses="HeaderClass"
            bordered={false}
            data={productDataa}
            columns={columns}
            expandRow={expandRow}
            pagination={paginationFactory()}
          />
        </CCardBody>
      </CCard>
    </CRow>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}
export default connect(
  mapStateToProps,
  {}
)(withRouter(ProductTable))
