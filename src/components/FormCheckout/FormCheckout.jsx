import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";   
import {  addDoc, collection } from "firebase/firestore";
import db  from "../../data/db";
import "./FormCheckout.css";

const FormCheckout = ( {dataForm, handleChangeInput, sendOrder} ) => {
    return(
        <form className="checkout-form" onSubmit={sendOrder}>
            <input 
                type="text" 
                name="fullname" 
                value={dataForm.fullname} 
                onChange={handleChangeInput}
                placeholder="Ingrese su nombre"
            />
            <input 
                type="tel" 
                name="phone" 
                value={dataForm.phone} 
                onChange={handleChangeInput}
                placeholder="Ingrese su teléfono"
            />
            <input 
                type="email" 
                name="email" 
                value={dataForm.email} 
                onChange={handleChangeInput}
                placeholder="Ingrese su correo"
            />
            <button type="submit">Enviar Orden</button>
        </form>
    )
}

export default FormCheckout;