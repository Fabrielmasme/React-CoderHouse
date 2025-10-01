import { useState } from "react";

const EjemploContador = () => {
    const [ contador, setContador] = useState(1);

    const sumar =()=>{
        setContador(contador + 1);
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <p>Cantidad de productos: {contador}</p>
            <button onClick={sumar}> + </button>
        </div>
    )
}
export default EjemploContador