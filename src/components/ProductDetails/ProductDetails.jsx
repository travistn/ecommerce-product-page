import './ProductDetails.css';

const ProductDetails = () => {
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
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <p className='productDetails-price-original'>$250.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
