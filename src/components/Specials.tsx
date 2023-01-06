import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../data/data'

function Specials() {
  return (
    <div>
        <h1>Specials</h1>
        <div className='grid three-col-grid'>
            {products.map(product =>
                <ProductCard product={product} />
                )}
        </div>
    </div>
  )
}

export default Specials