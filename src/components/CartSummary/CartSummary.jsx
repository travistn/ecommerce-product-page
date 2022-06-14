import { FaTrashAlt } from 'react-icons/fa';

import './CartSummary.css';
import productThumbnail from '../../assets/image-product-1-thumbnail.jpg';

const CartSummary = ({ quantity, setQuantity, cartAmount }) => {
  const deleteCart = () => {
    setQuantity(0);
  };

  return (
    <div className='cartSummary__container'>
      <h5>Cart</h5>
      <div className='cartSummary-content'>
        <img src={productThumbnail} alt='product-thumbnail' />
        <div className='cartSummary-content-text'>
          <p>Fall Limited Edition Sneakers</p>
          <p>
            {`$125.00 x ${quantity} = `}
            <span>{`${cartAmount}.00`}</span>
          </p>
        </div>
        <FaTrashAlt className='cartSummary-delete' onClick={deleteCart} />
      </div>
      <button className='cartSummary-button'>Checkout</button>
    </div>
  );
};

export default CartSummary;
