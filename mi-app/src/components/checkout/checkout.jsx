import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";   
import {  addDoc, collection } from "firebase/firestore";
import db  from "../../data/db";
import FormCheckout from "../FormCheckout/FormCheckout";

const Checkout = () => { 
    const [dataForm, setDataForm] = useState({
        fullname: '',
        phone: '',
        email: ''
    });
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const sendOrder = (event) => {
        event.preventDefault();


        const order = {
            buyer :{...dataForm},
            products : [...cart],
            total : totalPrice()
        }
        uploadOrder(order);
    }

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection (db, "orders");
            const response = await addDoc(orderRef, order);
            
            setOrderId (response.id);

        }catch (error) {

        }
    }

    return (
        <div>
            {
                orderId ? (
                    <div>
                        <h2> Orden generada correctamente </h2>
                        <p> Su número de orden es : {orderId} </p>
                    </div>
                ) : (
                    <FormCheckout 
                        dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}
                    />
                )
            }          
        </div>
    );
};

export default Checkout;