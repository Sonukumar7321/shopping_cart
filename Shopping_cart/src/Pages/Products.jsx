import React, { useState } from 'react'
import Data from '../../Data.json'
import Product from '../Components/Product'

const Products = () => {
    const [products, setProducts] = useState(Data.products)
  return (
    <div className="container mt-5 ">
      <div className='p-3'> <h3>Here, Every Product is discounted with 20%, Discount will be applied during purchaging time of the product</h3></div>
    <div className='row row-cols-1 row-cols-md-5 g-20'>
        {
            products.map(p => (
                <Product product = {p}/>
            ))
        }
    </div>
    </div>
  )
}

export default Products