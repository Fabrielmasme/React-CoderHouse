import ItemCount from "../ItemCount/ItenCount";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <h2 className="product-description">{product.description}</h2>
        <h2 className="product-price">{product.price}</h2>

        <ItemCount stock={product.stock} addToCart = {addToCart} />
      </div>
    </div>
  )
}

export default ItemDetail