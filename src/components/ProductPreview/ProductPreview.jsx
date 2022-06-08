import { useState } from 'react';

import './ProductPreview.css';
import product1 from '../../assets/image-product-1.jpg';
import product2 from '../../assets/image-product-2.jpg';
import product3 from '../../assets/image-product-3.jpg';
import product4 from '../../assets/image-product-4.jpg';

const productImages = [
  { id: 'product1', src: product1 },
  { id: 'product2', src: product2 },
  { id: 'product3', src: product3 },
  { id: 'product4', src: product4 },
];

const ProductPreview = () => {
  const [image, setImage] = useState(productImages[0].src);
  const [active, setActive] = useState('product1');

  const clickHandler = (e) => {
    const product = productImages.find((item) => item.id === e.currentTarget.id);
    setImage(product.src);
    setActive(e.currentTarget.id);
  };

  return (
    <div className='productPreview__container'>
      <div className='productPreview-image'>
        <img src={image} alt='product-pic' />
      </div>
      {
        <div className='productPreview-thumbnails'>
          {productImages.map((product) => (
            <img
              src={product.src}
              alt={`${product.id}-thumbnail`}
              id={product.id}
              onClick={clickHandler}
              key={product.id}
              className={product.id === active ? 'active-thumbnail' : ''}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default ProductPreview;
