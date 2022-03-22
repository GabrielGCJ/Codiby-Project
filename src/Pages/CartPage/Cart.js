import React from 'react'
import "./Cart.css"
import { useEffect, useState } from 'react';
import { cheaperCartList } from '../../Services/cheaperCartList';
import { expesiveCartList }from '../../Services/expesiveCartList';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Cart = () => {

    const [productList, setProductList] = useState(cheaperCartList);

    let showProducts

    if(productList.length === 0){
        showProducts = (<h2>Loading...</h2>)
    } else {
        showProducts = (
            productList.items.map((product) => (
                <ProductCard
                    key={product.uniqueId}
                    image={product.imageUrl}
                    productName={product.name}
                    price={`R$ ${(product.price * 0.01).toFixed(2)}`}
                    sellingPrice={`R$ ${(product.sellingPrice * 0.01).toFixed(2)}`}
                />
            ))
        )
    };

    function getTotal(total, items) {
        return total + items.sellingPrice
    };

    let freeShipping = false;

    let totalValue;

    if( productList.length !== 0){
        totalValue = productList.items.reduce(getTotal, 0);
    };

    totalValue = totalValue * 0.01;

    if(totalValue > 10){
        freeShipping = true
    };

    let showFreeShippingMessage;

    if(freeShipping === true) {
        showFreeShippingMessage = (
            <h4 className="free-shipping-message">Parabéns, sua compra tem frete grátis!</h4>
        )
    };

    const handleSetCheaperCart = () => {
        setProductList(cheaperCartList)
    }

    const handleSetExpensiveCart = () => {
        setProductList(expesiveCartList)
    }

    return(

        
        <div className="cart">
            <div className='buttons-cars'>
                <button className='button-a1' onClick={handleSetCheaperCart}>- 10</button>
                <button className='button-a2'onClick={handleSetExpensiveCart}>+ 10</button>
            </div>
            <div className="cart-component">
                <header className="cart-header">
                    <h2 className='title'>Meu Carrinho</h2>
                </header>
                
                <main className="cart-details">

                    {showProducts}

                </main>
                
                <section className="cart-total-value">

                        <span> Total </span>

                        <span>R$ {totalValue.toFixed(2)}</span>
                   
                </section>
                    <div className='message-free-shipping'>
                        {showFreeShippingMessage}
                    </div>
                   
                <footer className="cart-footer">
                    <button className="button-finaly">Finalizar Compra</button>
                </footer>
            </div>
        </div>
    )
}

export default Cart