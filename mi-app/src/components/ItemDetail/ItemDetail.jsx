import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <h2 className="product-description">{product.description}</h2>
        <h2 className="product-price">{product.price}</h2>
      </div>
    </div>
  )
}

export default ItemDetail