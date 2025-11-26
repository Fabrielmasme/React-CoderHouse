import { FaCartShopping } from 'react-icons/fa6';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import "./cartwidget.css";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();
  return (
    <Link to="/cart" className="cartwidget">
      <FaCartShopping />
      <p>{ quantity !== 0 && quantity }</p>
    </Link>
  )
}

export default CartWidget