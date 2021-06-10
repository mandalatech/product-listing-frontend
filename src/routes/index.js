import React from 'react'

const Products = React.lazy(() => import('src/views/Products/Products'))
const Dashboard = React.lazy(() => import('src/views/Dashboard'))
const ProductDataEntry = React.lazy(() => import('src/views/ProductDataEntry'))
const Bundle = React.lazy(() => import('src/views/Bundle'))
const Group = React.lazy(() => import('src/views/Group'))
const Manufacturer = React.lazy(() => import('src/views/Manufacturer'))
const Brand = React.lazy(() => import('src/views/Brand'))
const Warehouse = React.lazy(() => import('src/views/Warehouse'))
const Color = React.lazy(() => import('src/views/Color'))
const SKU = React.lazy(() => import('src/views/SKU'))
const Profile = React.lazy(() => import('src/views/Profile'))

const routes = [
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
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/', exact: true, name: 'Home' },
]

export default routes
