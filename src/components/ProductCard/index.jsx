import React from 'react'
import './ProductCard.css'
const ProductCard = ({ name, description, url, price }) => {
    return (
        <div className='card'>
            <div className="card-top">
                <img src={url} alt="" />
                <p>{name}</p>
            </div>
            <div className="card-bottom">
                <p className='card-bottom-price'>${price}</p>
                <p>{description}</p>
                <button>Destroy</button>
            </div>
        </div>
    )
}

export default ProductCard
