import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import './App.css';

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  return (
    <div>
      <Navbar quantity={quantity} setQuantity={setQuantity} cartAmount={cartAmount} />
      <ProductPage quantity={quantity} setQuantity={setQuantity} setCartAmount={setCartAmount} />
    </div>
  );
};

export default App;
