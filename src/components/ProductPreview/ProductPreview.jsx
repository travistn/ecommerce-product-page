import { useState, useRef } from 'react';

import ProductModal from '../ProductModal/ProductModal';
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
  const [productImage, setProductImage] = useState(productImages[0].src);
  const [active, setActive] = useState('product1');
  const [openModal, setOpenModal] = useState(false);

  const [current, setCurrent] = useState(0);
  const length = productImages.length;

  const productRef = useRef();

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    const product = productImages.find((product) => product.id === productRef.current.id);
    setActive(product.id);
    setProductImage(product.src);
  };

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    const product = productImages.find((product) => product.id === productRef.current.id);
    setActive(product.id);
    setProductImage(product.src);
  };

  const clickHandler = (e) => {
    const product = productImages.find((item) => item.id === e.currentTarget.id);
    setProductImage(product.src);
    setActive(e.currentTarget.id);
  };

  return (
    <div className='productPreview__container'>
      <div className='productPreview-image'>
        {productImages.map(
          (image, index) =>
            index === current && (
              <img
                src={productImage}
                alt='product-pic'
                onClick={() => setOpenModal(true)}
                key={image.id}
                id={image.id}
                ref={productRef}
              />
            )
        )}
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
      <div className='productPreview-modal'>
        {openModal && (
          <ProductModal
            productImages={productImages}
            clickHandler={clickHandler}
            active={active}
            closeModal={setOpenModal}
            leftClick={prevImage}
            rightClick={nextImage}
            current={current}
            productImage={productImage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
