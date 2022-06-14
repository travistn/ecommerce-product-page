import { useEffect, useCallback } from 'react';

import { BsCart3 } from 'react-icons/bs';
import { HiPlus, HiMinus } from 'react-icons/hi';

import './ProductDetails.css';

const ProductDetails = ({ quantity, setQuantity, setCartAmount }) => {
  const checkoutQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const checkoutQuantityDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = useCallback(() => {
    setCartAmount(quantity * 125);
  }, [quantity, setCartAmount]);

  useEffect(() => {
    addToCart();
  }, [quantity, addToCart]);

  return (
    <div className='productDetails__container'>
      <div className='productDetails'>
        <h5 className='productDetails-company'>SNEAKER COMPANY</h5>
        <h3 className='productDetails-name'>Fall Limited Edition Sneakers</h3>
        <p className='productDetails-paragraph'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className='productDetails-price'>
          <div className='productDetails-price-top'>
            <p>{`$${125}.00`}</p>
            <p>50%</p>
          </div>
          <p className='productDetails-price-original'>$250.00</p>
        </div>
        <div className='productDetails-checkout'>
          <div className='productDetails-checkout-quantity'>
            <HiMinus className='checkout-minus' onClick={checkoutQuantityDecrease} />
            {quantity}
            <HiPlus className='checkout-plus' onClick={checkoutQuantityIncrease} />
          </div>
          <button onClick={addToCart}>
            <BsCart3 /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
