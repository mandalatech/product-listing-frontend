import React from 'react'
import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'
import Del from '../../../reusable/Toast/DeleteToast/Del'
import { deleteProduct } from '../../../api/ProductRequests'
import store from '../../../store'
import { SET_PRODUCT_LIST } from 'src/reducers/types/product'
import Swal from 'sweetalert2'
import { CButton } from '@coreui/react'

export default function ActionFormatter(props) {
  const deleteProduct_ = async (id) => {
    Del.fire()
      .then(async (result) => {
        if (result.isConfirmed) {
          await deleteProduct(id)
            .then((resp) => {
              if (resp.response.ok) {
                let filteredProductList = store
                  .getState()
                  .product.productList.filter((data) => {
                    return data.id !== id
                  })
                console.log(' filteredProductList ', filteredProductList)
                store.dispatch({
                  type: SET_PRODUCT_LIST,
                  payload: filteredProductList,
                })
                Swal.fire('Deleted!', 'Product has been deleted.', 'success')
              } else {
                Swal.fire('Failed!', 'Product deletion failed!', 'error')
              }
            })
            .catch((err) => {
              Swal.fire('Failed!', err.message, 'error')
            })
        }
      })
      .catch((err) => {
        console.log(' del modal err ', err)
        Swal.fire('Failed!', err.message, 'error')
      })
  }

  return (
    <div style={{ display: 'flex' }}>
      <CButton title="View Product">
        <img src={viewIcon} alt="View" />
      </CButton>
      <CButton
        onClick={() => props.history.push('/products/' + props.id)}
        title="Edit Product"
      >
        <img src={editIcon} alt="View" />
      </CButton>
      <CButton onClick={() => deleteProduct_(props.id)} title="Delete Product">
        <img src={trashIcon} alt="View" />
      </CButton>
    </div>
  )
}
