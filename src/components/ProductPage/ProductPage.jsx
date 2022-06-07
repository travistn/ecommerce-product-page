import ProductDetails from '../ProductDetails/ProductDetails';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className='productPage__wrapper'>
      <div className='productPage__container'>
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductPage;
