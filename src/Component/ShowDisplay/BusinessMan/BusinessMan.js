import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowDisplay from '../ShowDisplay/ShowDisplay';
import './Businessman.css';

const BusinessMan = () => {

    const [businessMan, setBusinessMan] = useState([]);

    const [cart, setCart] = useState([]);
  useEffect(() =>{
    fetch('https://forbes400.herokuapp.com/api/forbes400/')
    .then(res => res.json())
    .then(data => setBusinessMan(data));
  },[])

  const cartHandle = (richest) =>{
    const newCart = [...cart, richest];
    setCart(newCart);
    // console.log([...cart, richest]);
  }
    return (
        <div>
            <div className='b-container'>
              <div className='gridM'>
                {
                    businessMan.map(man => <
                      ShowDisplay
                      man={man}
                      cartHandle={cartHandle}
                      ></ShowDisplay>)
                }
              </div>
              <div>
                <Cart cart={cart}></Cart>
              </div>

            </div>
        </div>
    );
};

export default BusinessMan;