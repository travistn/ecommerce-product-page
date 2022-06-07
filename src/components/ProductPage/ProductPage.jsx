import ProductDetails from '../ProductDetails/ProductDetails';
import ProductPreview from '../ProductPreview/ProductPreview';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className='productPage__wrapper'>
      <div className='productPage__container'>
        <ProductPreview />
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductPage;
