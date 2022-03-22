import React from 'react';
import "./ProductCard.css"

function ProductCard ( props ) {
    return(
        <div className="card-component">
                <img src = { props.image } alt = { props.alt } />
            <div className="card-details" >
                <h3>{ props.productName }</h3>
                <p>{ props.price }</p>
                <p>{ props.sellingPrice }</p>
            </div>
        </div>
    )
}

export default ProductCard;