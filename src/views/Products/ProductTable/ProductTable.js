import React from 'react'
import { CCard, CRow, CCardBody, CDataTable, CBadge } from '@coreui/react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import ActionFormatter from './ActionFormatter'
import IsEmpty from '../../../components/IsEmpty'
import isEmpty from '../../../validations/isEmpty'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import TableLoader from '../../../reusable/loader/TableLoader'

function ProductTable(props) {
  const actionsFormatter = (cell, row) => (
    <ActionFormatter history={props.history} id={row.id} />
  )

  const filterColumns = props.product.productHeaderList.map((data, index) => {
    return {
      ...data,
      dataField: data.name,
      text:
        data.name === 'producttype'
          ? 'Product type'
          : data.name === 'inventorytype'
          ? 'Inventory type'
          : data.name,
      sort: true,
      headerAlign: 'left',
      headerStyle: (colum, colIndex) => {
        return {
          width: data.name === 'description' ? '250px' : '100px',
          textAlign: 'center',
        }
      },
    }
  })

  const allFilterColumns = [
    ...filterColumns,
    {
      dataField: 'actions',
      text: 'Actions',
      isDummyField: true,
      csvExport: false,
      formatter: actionsFormatter,
      headerStyle: (colum, colIndex) => {
        return { width: '100px', textAlign: 'center' }
      },
    },
  ]

  // const columns = [
  //   {
  //     dataField: 'id',
  //     text: '#',
  //     sort: true,
  //     headerAlign: 'left',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '70px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'image',
  //     text: 'Image',
  //     headerAlign: 'center',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '70px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'name',
  //     text: 'Name',
  //     sort: true,
  //     headerAlign: 'left',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '100px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'description',
  //     text: 'Description',
  //     headerAlign: 'left',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '250px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'cost',
  //     text: 'Cost',
  //     headerAlign: 'left',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '70px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'price',
  //     text: 'Price',
  //     headerAlign: 'left',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '70px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'sku',
  //     text: 'SKU',
  //     headerAlign: 'left',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '100px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'variants',
  //     text: 'Variants',
  //     headerAlign: 'center',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '90px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'producttype',
  //     text: 'Product Type',
  //     headerAlign: 'center',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '100px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'inventorytype',
  //     text: 'Inventory Type',
  //     headerAlign: 'center',
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '100px', textAlign: 'center' }
  //     },
  //   },
  //   {
  //     dataField: 'actions',
  //     text: 'Actions',
  //     isDummyField: true,
  //     csvExport: false,
  //     formatter: actionsFormatter,
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '100px', textAlign: 'center' }
  //     },
  //   },
  // ]

  const variantsColumn = [
    {
      dataField: 'id',
      text: 'Id',
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
  const productDataa = []

  props.product.productList &&
    props.product.productList.forEach((data, index) => {
      console.log(' data.images ', data.images, data.title)
      productDataa.push({
        id: data.id,
        image:
          data.images.length !== 0 && data.images[0].image ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                margin: '0px',
                borderRadius: '10px',
                backgroundColor: '#F4F4F4',
              }}
            >
              <object
                style={{ width: '100%', height: '100%' }}
                data={data.images[0].image.url}
                type="image/png"
              >
                <img
                  src={data.images[0].image.url}
                  style={{ width: '100%', height: '100%' }}
                />
              </object>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                margin: '0px',
                borderRadius: '10px',
                backgroundColor: '#F4F4F4',
              }}
            >
              <img
                src="https://www.saffronwaldenprinting.com/global/images/PublicShop/ProductSearch/prodgr_default_300.png"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ),
        name: data.title,
        description: data.short_description,
        cost: data.cost,
        price: data.price,
        sku: data.sku,
        producttype: data.is_simple_product ? (
          <CBadge
            style={{
              width: '75px',
              backgroundColor: '#07b963',
              padding: '10px',
              color: 'white',
            }}
          >
            Simple
          </CBadge>
        ) : (
          <CBadge
            style={{
              width: '75px',
              backgroundColor: '#fcbc40',
              padding: '10px',
              color: 'white',
            }}
          >
            Config
          </CBadge>
        ),
        inventorytype: data.inventory ? (
          <CBadge
            style={{
              width: '75px',
              backgroundColor:
                data.inventory.type === 'VIRTUAL'
                  ? '#fcbc40'
                  : data.inventory.type === 'PHYSICAL'
                  ? '#07b963'
                  : '#0739b9',
              padding: '10px',
              color: 'white',
            }}
          >
            {data.inventory.type}
          </CBadge>
        ) : (
          '-'
        ),
        variants: data.variants.length || '',
        actions: '-',
        variantData: data.variants,
      })
    })

  const expandRow = {
    renderer: row => (
      <>
        {console.log(' rooo : ', row.variantData)}
        <br />
        <BootstrapTable
          keyField="id"
          data={row.variantData}
          columns={variantsColumn}
          rowClasses="VariantRow"
          hover
          bordered={true}
        />
        {isEmpty(row.variantData) && (
          <>
            <IsEmpty>Variants not available</IsEmpty>
            <br />
            <br />
          </>
        )}
      </>
    ),
  }

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
            columns={allFilterColumns}
            expandRow={expandRow}
            wrapperClasses="table-responsive"
            noDataIndication={() => (
              <>
                {props.product.productTableLoader ? (
                  <TableLoader />
                ) : (
                  <IsEmpty>Products not available</IsEmpty>
                )}
              </>
            )}
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
