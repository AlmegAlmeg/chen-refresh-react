import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './ProductPage.scss'

const ProductPage = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [showPrice, setShowPrice] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products/${id}`)
            .then(res => setProduct(res.data.data))
    }, [])

    return (
        <div className="product-page">
            <h1>{ product && product.attributes.title }</h1>
            { showPrice ? <h4>{ product && product.attributes.price }$</h4> : 'Price is hidden'}
            <button onClick={() => setShowPrice(true) }>Show me the price</button>
        </div>
    )
}

export default ProductPage