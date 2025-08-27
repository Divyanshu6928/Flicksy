import React from 'react'
import '../styles/SpecialCardBlue.css';
import Card from './Card';

const SpecialCardBlue = (props) => {
  return (
    <div className='special-card-container'>
      <div className="special-card" style={{backgroundColor : "#00aae4"}}>
        <div className='top-special-card'>
          <h1>{props.dealname}</h1>
          <span className='bi bi-arrow-right fs-3'></span>
        </div>
        
        <div className='special-card-section'>
            <span className='arrow-btn bi bi-arrow-left-circle fs-3'></span>
            <div className='item-container'>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <span className='arrow-btn bi bi-arrow-right-circle fs-3'></span>
        </div>
        </div>
    </div>
  );
};

export default SpecialCardBlue;