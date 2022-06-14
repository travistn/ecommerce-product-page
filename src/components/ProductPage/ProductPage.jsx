import ProductDetails from '../ProductDetails/ProductDetails';
import ProductPreview from '../ProductPreview/ProductPreview';
import './ProductPage.css';

const ProductPage = ({ quantity, setQuantity, setCartAmount }) => {
  return (
    <div className='productPage__wrapper'>
      <div className='productPage__container'>
        <ProductPreview />
        <ProductDetails
          quantity={quantity}
          setQuantity={setQuantity}
          setCartAmount={setCartAmount}
        />
      </div>
    </div>
  );
};

export default ProductPage;
