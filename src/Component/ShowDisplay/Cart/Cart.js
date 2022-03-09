import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const [carts, setCarts] = useState({})
    useEffect(()=>{
        for(const details of cart){
            setCarts(details)
        }
    },[cart])
    console.log(carts);
    return (
        <div >
            { (carts.personName)? 
                <div className='cart-style'>
                <img src={carts.squareImage} alt="" />
                <h3>{carts.personName}</h3>
                <p>rank: <span>{carts.rank}</span></p>
                <p>Net worth: <span>${carts.finalWorth} B</span></p>
                <p>source: <span>{carts.source}</span></p>
                <p>State: <span>{carts.state}</span></p>
                <p>City: <span>{carts.city}</span></p>
                <p>country: <span>{carts.countryOfCitizenship}</span></p>
                </div>:<p style={{display:'none'}}></p>  
            }
        </div>
    );
};

export default Cart;