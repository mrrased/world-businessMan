import React from 'react';
import './ShowDisplay.css';

const ShowDisplay = (props) => {
    const {personName, rank} = props.man;
    const {squareImage} =  props.man.person;
    
    return (
        <div className='cart'>
            <img className='' src={squareImage} alt="" srcset="" />
            <h3>{personName}</h3>
            <p>World: <span className='rank-color'>{rank}</span> rank</p>
            <button onClick={()=> props.cartHandle(props.man)}>Details</button>
        </div>
    );
};

export default ShowDisplay;