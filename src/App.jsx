import React from 'react'
import ProductsList from './features/products/ProductsList'
import AddProducts from './features/products/AddProducts'

const App = () => {
  return (
    <div>
      <ProductsList />
      <AddProducts />
    </div>
  )
}

export default App