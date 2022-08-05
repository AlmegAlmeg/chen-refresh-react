import { Link } from 'react-router-dom'
import './Product.scss'

const Product = ({ product }) => {

    const { attributes } = product

    return (
        <div className='single-product'>
            <h2>{ attributes.title }</h2>
            <p>Price: { attributes.price }$</p>
            
            <Link to={`/product/${product.id}`}>Read more</Link>
            <button disabled={!attributes.inStock} onClick={() => console.log('Thank you for buying')}>Buy now</button>
        </div>
    )
}

export default Product