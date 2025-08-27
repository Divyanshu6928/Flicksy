import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div>
        <div className='card-container'>
            <div className="card-header">
                <img src="https://res.cloudinary.com/depyc5ywg/image/upload/v1756273556/812ySd81W_L_1_n8wf2p.png" alt="" />
                <p className='itemname'>Maggi Cuppa Masala Cup Noodles</p>
                <p className='pricename'>₹ 45</p>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button className='decreaseQuantity me-2' id='decreaseQuantity'>-</button>
                        <span className='fw-bold'>1</span>
                        <button className='increaseQuantity ms-2' id='increaseQuantity'>+</button>
                    </div>
                    <div className='cart-btn-container'>
                        <button className='cart-btn'>Add to Cart</button>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Card;