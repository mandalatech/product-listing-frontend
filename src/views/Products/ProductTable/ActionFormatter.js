import React from 'react'
import viewIcon from 'src/assets/icons/view.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

export default function ActionFormatter(props) {
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
        alt="View"
      />
    </div>
  )
}
