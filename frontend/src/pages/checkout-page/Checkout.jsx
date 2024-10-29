import React, { useState } from 'react'
import './checkout.css'
import Navigation from '../../Components/global/navigation/Navigation'
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material';
import visaLogo from "../../assets/images/visa-logo-removebg-preview.png";
import mastercardLogo from  "../../assets/images/mastercard-logo-removebg-preview.png";
import verveLogo from "../../assets/images/verve-logo.png";
import { CheckRounded } from '@mui/icons-material';
function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();
    const {product, detail} = location.state;
    console.log(location.state)

    const saveInfoHandler = (e) =>{
        e.preventDefault();
    }

    const [paymentOption, setPaymentOption] = useState('cdc');
    const onOptionChange = (e) =>{
        setPaymentOption(e.target.value);
        console.log(e.target.value)
    }

    const [selectedCard, setSelectedCard] = useState(0);
    const selectCardHandler = (index) => setSelectedCard(index);
    const selectedCardStyle = {
        border: '1.5px solid #090c9b',
    }



    const [expiry, setExpiry] = useState('');

    // Handle input change
    const handleChange = (event) => {
      let value = event.target.value;
      
      // Remove any non-digit characters
      value = value.replace(/\D/g, '');
  
      // Add the slash '/' after the second digit
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
  
      // Limit input length to 5 characters (MM/YY)
      if (value.length <= 5) {
        setExpiry(value);
      }
    };


    const [cardNumber, setCardNumber] = useState('');

  // Handle input change and format card number
  const handleChanger = (event) => {
    let value = event.target.value;

    // Remove all non-digit characters
    value = value.replace(/\D/g, '');

    // Format the number in groups of 4 digits
    const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();

    // Set the formatted value to state
    setCardNumber(formattedValue);
  };

  const productPrice = (product.price * detail.quantity).toFixed(2);
  const taxes = (parseFloat(productPrice) / 10).toPrecision(2);
  const couponDiscount = 0.00;
  const shippingCost = 0.00;
  const total = ((parseFloat(productPrice) - couponDiscount) + shippingCost); 

  const [modalOpen, setModalOpen] = useState(false)

  const payHandler = (e) =>{
    e.preventDefault();
    setModalOpen(true)
  }

  const closeModalHandler = () => {
    setModalOpen(false);
    navigate('/')
  };
  return (
    <div className='checkoutContainer'>
      <div className="header">
            <Navigation/>
            <hr/>
        </div>
        <form className="checkout-content" onSubmit={() => console.log('submitted')}>
            <div className="ct-lft">
                <div className="lft-top">
                    <h1>Review Item and Shipping</h1>
                    <div className="product-detail">
                        <div className="detail-lft">
                            <div className="detail-image">
                                <img src={product.image} alt="product"/>
                            </div>
                            <div className="detail-desc">
                                <p>{product.name}</p>
                                <p>Color: {detail.color}</p>
                            </div>
                        </div>
                        <div className="detail-rgt">
                            <p>${productPrice}</p>
                            <p>Quantity: {detail.quantity}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="lft-bottom">
                    <div className="lb-top">
                        <h1>Delivery Information</h1>
                        <button className='saveInfo-btn' onClick={saveInfoHandler} type="button">Save Information</button>
                    </div>
                    <div className="input-section">
                        <div className="info-input">
                            <label htmlFor="firstName">First Name*</label>
                            <input required placeholder='Type here...' aria-label='First Name' type="text" name="firstName" id="" />
                        </div>
                        <div className="info-input">
                            <label htmlFor="lastName">Last Name*</label>
                            <input required placeholder='Type here...' aria-label='Last Name' type="text" name="lastName" id="" />
                        </div>
                    </div>
                    <div className="input-section">
                        <div className="info-input">
                            <label htmlFor="address">Address*</label>
                            <input required placeholder='Type here...' aria-label='address' type="text" name="address" id="" />
                        </div>
                    </div>
                    <div className="input-section">
                        <div className="info-input">
                            <label htmlFor="city">City/Town*</label>
                            <input required placeholder='Type here...' aria-label='city' type="text" name="city" id="" />
                        </div>
                        <div className="info-input">
                            <label htmlFor="zip-code">Zip Code*</label>
                            <input required placeholder='Type here...' aria-label='zip-code' type="text" name="zip-code" id="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct-rgt">
                <h1>Order Summary</h1>
                <hr color='#D8D8D8' />
                <div className="couponContainer">
                    <input placeholder='Enter coupon code' aria-label='coupon' type="text" name="" id="" className="coupon-input" />
                    <button type="button" className="ac-btn">Apply Coupon</button>
                </div>
                <h2>Payment Details</h2>
                <hr color='#D8D8D8' />
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue='cdc'
                    name="radio-buttons-group"
                    onChange={onOptionChange}
                    className='payment-options'
                >
                    <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery"/>
                    <FormControlLabel value="cdc" control={<Radio />} label="Credit or Debit Card" />
                </RadioGroup>
                {paymentOption === 'cdc' && <div className='cardPay'>
                <div className="cardOptions">
                    <div
                    onClick={selectCardHandler.bind(this, 0)}
                    style={selectedCard === 0 ? selectedCardStyle : null}
                     className="cardOption">
                        <img src={visaLogo} alt="visa" />
                    </div>
                    <div 
                    onClick={selectCardHandler.bind(this, 1)}
                    style={selectedCard === 1 ? selectedCardStyle : null}
                    className="cardOption">
                        <img src={mastercardLogo} alt="mastercard" />
                    </div>
                    <div 
                    onClick={selectCardHandler.bind(this, 2)}
                    style={selectedCard === 2 ? selectedCardStyle : null}
                    className="cardOption">
                        <img src={verveLogo} alt="verve" />
                    </div>
                </div>
                <div className="info-input">
                    <label htmlFor="email">Email*</label>
                    <input required placeholder='Type here...' aria-label='email' type="email" name="email" id="" />
                </div>
                <div className="info-input">
                    <label htmlFor="card-name">Card Holder Name*</label>
                    <input required placeholder='Type here...' aria-label='card-name' type="text" name="card-name" id="" />
                </div>
                <div className="info-input">
                    <label htmlFor="cardNumber">Card Number*</label>
                    <input
                        required
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={handleChanger}
                        maxLength="19" // Max length for card number with spaces
                        inputMode="numeric" // Shows numeric keyboard on mobile
                    />
                </div>
                <div className="input-section">
                    <div className="info-input">
                        <label htmlFor="expiry">Expiry</label>
                        <input
                            required
                            type="text"
                            id="expiry"
                            name="expiry"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={handleChange}
                            maxLength="5"
                            inputMode="numeric" // Mobile keyboard for numeric input
                        />
                    </div>
                    <div className="info-input">
                        <label htmlFor="cvc">CVC</label>
                        <input required maxLength={3} placeholder='000' aria-label='cvc' inputMode='numeric' name="cvc" id="" />
                    </div>
                </div>
                </div>}
                <div style={{marginTop:60}} className="costbreakdown-comp">
                    <p><b>Sub Total</b></p>
                    <p>${productPrice}</p>
                </div>
                <div className="costbreakdown-comp">
                    <p><b>Tax(10%)</b></p>
                    <p>${taxes}</p>
                </div>
                <div className="costbreakdown-comp">
                    <p><b>Coupon Discount</b></p>
                    <p>-${couponDiscount}</p>
                </div>
                <div className="costbreakdown-comp">
                    <p><b>Shipping Cost</b></p>
                    <p>${shippingCost}</p>
                </div>
                <hr style={{marginTop:20}} color='#D8D8D8' />
                <div className="costbreakdown-comp subTotal">
                    <p>Total</p>
                    <p>=${total}</p>
                </div>
                <button
                onClick={payHandler}
                type='submit'
                style={{
                    backgroundColor: '#090c9b',
                    color:'#ffffff',
                    border: 'none',
                    width:'100%',
                    height: 55,
                    fontSize:'1rem',
                    borderRadius:30,
                    marginTop:30,
                    cursor:'pointer'
                }}
                >
                    Pay ${total}
                </button>
                <Modal
                 style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }} open={modalOpen}>
                    <div
                    className='modalContainer'
                    style={{
                        backgroundColor:'#ffffff',
                        padding: 15,
                        borderRadius: 20,
                        height:500,
                        width:500,
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                        border:'none'
                    }}
                    >
                        <CheckRounded style={{
                            fontSize: 70,
                            fontWeight:'700',
                            backgroundColor:'#7BFE34',
                            padding: 20,
                            borderRadius:'50%',
                            color:'#ffffff'
                        }}/>
                        <h2
                        style={{
                            marginTop: 80
                        }}
                        >Your order has been <br />accepted</h2>
                        <button
                        style={{
                            width:'70%',
                            height: 55,
                            backgroundColor:'#090c9b',
                            color:'white',
                            borderRadius:20,
                            border:'none',
                            marginTop: 40,
                            cursor:'pointer'
                        }}
                        onClick={closeModalHandler}
                        >Continue Shopping</button>
                    </div>
                </Modal>
            </div>
        </form>
    </div>
  )
}

export default Checkout
