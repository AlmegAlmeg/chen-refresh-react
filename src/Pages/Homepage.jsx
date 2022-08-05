import { useEffect, useState } from 'react'
import axios from 'axios'

import Product from '../components/Product'
import './Homepage.scss'

const Homepage = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:1337/api/products')
            .then(res => setProducts(res.data.data))
    }, [])

    return (
        <div className="homepage">
            { products && products.map((prod, index) => <Product product={prod} key={index}/>) }
        </div>
    )
}

export default Homepage