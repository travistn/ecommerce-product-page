import { Modal } from '@mui/material';
import { IoCloseSharp } from 'react-icons/io5';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import './ProductModal.css';

const ProductModal = ({
  productImages,
  clickHandler,
  active,
  openModal,
  setOpenModal,
  current,
  productImage,
  leftClick,
  rightClick,
}) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal((prevState) => !prevState)}>
      <div className='productModal__container'>
        <div className='productModal-image'>
          <div className='productModal-closeIcon'>
            <IoCloseSharp
              className='closeIcon'
              onClick={() => setOpenModal((prevState) => !prevState)}
            />
          </div>
          <MdKeyboardArrowLeft className='left-arrow' onClick={leftClick} />
          <MdKeyboardArrowRight className='right-arrow' onClick={rightClick} />
          {productImages.map(
            (image, index) => index === current && <img src={productImage} alt='product-pic' />
          )}
        </div>
        {
          <div className='productModal-thumbnails'>
            {productImages?.map((product) => (
              <img
                src={product?.src}
                alt={`${product?.id}-thumbnail`}
                id={product?.id}
                onClick={clickHandler}
                key={product?.id}
                className={product?.id === active ? 'active-thumbnail' : ''}
              />
            ))}
          </div>
        }
      </div>
    </Modal>
  );
};

export default ProductModal;
