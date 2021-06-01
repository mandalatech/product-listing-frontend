import React from 'react'
import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'
import Del from '../../../reusable/Toast/DeleteToast/Del'
import { deleteProduct } from '../../../api/ProductRequests'
import store from '../../../store'
import { SET_PRODUCT_LIST } from 'src/reducers/types/product'
import Swal from 'sweetalert2'

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
      <img
        style={{ margin: '5px', cursor: 'pointer' }}
        src={viewIcon}
        alt="View"
      />
      <img
        style={{ margin: '5px', cursor: 'pointer' }}
        onClick={() => props.history.push('/products/' + props.id)}
        src={editIcon}
        alt="View"
      />
      <img
        style={{ margin: '5px', cursor: 'pointer' }}
        src={trashIcon}
        onClick={() => deleteProduct_(props.id)}
        alt="View"
      />
    </div>
  )
}
