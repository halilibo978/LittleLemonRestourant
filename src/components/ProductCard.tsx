import {Product, products} from '../../data/data'

function ProductCard({product} : {product : Product}) {
  return (
    <div className='product-card'>
        <img className='product-card-img' src={product.image} alt={product.title} />
        <div className='p-2'>
        <div className='flex justify-between'>
            <h3>{product.title}</h3>
            <p className='text-orange'>${product.price} 00</p>
        </div>
        
        <p className='product-card-description'>{product.description}</p>
        </div>
    </div>
  )
}

export default ProductCard