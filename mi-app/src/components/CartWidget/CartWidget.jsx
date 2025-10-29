import { FaCartShopping } from 'react-icons/fa6';
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <FaCartShopping />
      <p>10</p>
    </div>
  )
}

export default CartWidget