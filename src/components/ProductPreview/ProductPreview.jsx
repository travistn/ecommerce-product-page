import { useState } from 'react';

import './ProductPreview.css';
import product1 from '../../assets/image-product-1.jpg';
import product2 from '../../assets/image-product-2.jpg';
import product3 from '../../assets/image-product-3.jpg';
import product4 from '../../assets/image-product-4.jpg';
import product1_thumbnail from '../../assets/image-product-1-thumbnail.jpg';
import product2_thumbnail from '../../assets/image-product-2-thumbnail.jpg';
import product3_thumbnail from '../../assets/image-product-3-thumbnail.jpg';
import product4_thumbnail from '../../assets/image-product-4-thumbnail.jpg';

const productImages = [
  { id: 'product1', src: product1 },
  { id: 'product2', src: product2 },
  { id: 'product3', src: product3 },
  { id: 'product4', src: product4 },
];

const ProductPreview = () => {
  const [image, setImage] = useState(productImages[0].src);

  const clickHandler = (e) => {
    const product = productImages.find((item) => item.id === e.currentTarget.id);
    setImage(product.src);
  };

  return (
    <div className='productPreview__container'>
      <div className='productPreview-image'>
        <img src={image} alt='product1' />
      </div>
      <div className='productPreview-thumbnails'>
        <img
          src={product1_thumbnail}
          alt='product1-thumbnail'
          id='product1'
          onClick={clickHandler}
        />
        <img
          src={product2_thumbnail}
          alt='product2-thumbnail'
          id='product2'
          onClick={clickHandler}
        />
        <img
          src={product3_thumbnail}
          alt='product3-thumbnail'
          id='product3'
          onClick={clickHandler}
        />
        <img
          src={product4_thumbnail}
          alt='product4-thumbnail'
          id='product4'
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};

export default ProductPreview;
