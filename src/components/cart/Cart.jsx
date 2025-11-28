import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="cart-empty-link">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      {
        cart.map((productCart) => (
          <div key={productCart.id} className="cart-item">
            <img src={productCart.image} alt={productCart.name} />
            <div className="cart-item-info">
              <p className="cart-item-name">{productCart.name}</p>
              <p className="cart-item-price">Precio c/u: ${productCart.price}</p>
              <p className="cart-item-quantity">Cantidad: {productCart.quantity}</p>
              <p className="cart-item-subtotal">Subtotal: ${productCart.price * productCart.quantity}</p>
            </div>
            <button 
              className="cart-item-delete" 
              onClick={() => deleteProductById(productCart.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      }
      
      <div className="cart-summary">
        <h2 className="cart-total">Total: ${totalPrice()}</h2>
        <div className="cart-actions">
          <button className="cart-clear" onClick={deleteCart}>
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="cart-checkout">
            Continuar con la compra
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Cart