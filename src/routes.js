import React from 'react'

const Products = React.lazy(() => import('./views/Products/Products'))
const Dashboard = React.lazy(() => import('./views/Dashboard'))
const ProductDataEntry = React.lazy(() => import('./views/ProductDataEntry'))
const Bundle = React.lazy(() => import('./views/Bundle'))
const Group = React.lazy(() => import('./views/Group'))
const Manufacturer = React.lazy(() => import('./views/Manufacturer'))
const Brand = React.lazy(() => import('./views/Brand'))
const Warehouse = React.lazy(() => import('./views/Warehouse'))
const Color = React.lazy(() => import('./views/Color'))
const SKU = React.lazy(() => import('./views/SKU'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/products', exact: true, name: 'Product List', component: Products },
  {
    path: '/add-products',
    name: 'AddProduct',
    component: (props) => <ProductDataEntry {...props} edit={false} />,
  },
  {
    path: '/products/:id',
    exact: true,
    name: 'Product Edit',
    component: (props) => <ProductDataEntry {...props} edit={true} />,
  },
  { path: '/bundle', name: 'Bundle', component: Bundle },
  { path: '/group', name: 'Group', component: Group },
  { path: '/manufacturer', name: 'Manufacturer', component: Manufacturer },
  { path: '/brand', name: 'Brand', component: Brand },
  { path: '/warehouse', name: 'Warehouse', component: Warehouse },
  { path: '/color', name: 'Color', component: Color },
  { path: '/sku', name: 'SKU', component: SKU },
]

export default routes
