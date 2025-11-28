import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { Form, useParams } from "react-router-dom";
import{ doc, getDoc} from "firebase/firestore";
import db from "../../data/db.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);
      const data = {id: dataDb.id, ...dataDb.data() };
      setProduct(data);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer