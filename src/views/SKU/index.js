import React from 'react'
import AutoGeneration from './AutoGeneration'
import SKUFormulation from './SKUFormulation'

const SKU = () => {
  return (
    <div>
      <h4 className="outside-card-title mb-4">SKU</h4>
      <AutoGeneration />
      <h4 className="mt-5 mb-3 font-weight-bold">SKU Formulation</h4>
      <SKUFormulation />
    </div>
  )
}

export default SKU
