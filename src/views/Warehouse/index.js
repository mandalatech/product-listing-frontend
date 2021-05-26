import React, { useState } from 'react'

import AddWarehouse from './AddWarehouse'
import WarehouseDataTable from './WarehouseDataTable'
import WarehouseHeader from './WarehouseHeader'

const Warehouse = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <div>
      <WarehouseHeader _setShowCreateForm={setShowCreateForm} />
      {showCreateForm ? (
        <AddWarehouse _setShowCreateForm={setShowCreateForm} />
      ) : null}
      <WarehouseDataTable />
    </div>
  )
}

export default Warehouse
