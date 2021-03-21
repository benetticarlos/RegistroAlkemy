import React, { Fragment, useState, useEffect, setState } from "react";
import Formulario from "./Formulario";


const BalanceActual = (props) => {
    console.log(props.addBalance);
    let ultimo = props.addBalance.length;

    // useState para modificar el valor del balance total, se compone de dos funciones, Aumentar y Disminuir
    const [Balance, setBalance] = useState(17300);
    const Aumentar = () => {
        setBalance(Balance + parseInt(props.addBalance[ultimo - 1].monto));
    };
    const Disminuir = () => {
        setBalance(Balance - parseInt(props.addBalance[ultimo - 1].monto));
    };
    console.log(props.addBalance[ultimo - 1].monto);

    // Función que ejecuta Aumentar() o Disminuir() dependiendo el tipo del registro (si es ingreso o egreso)
    const SignoMontos = () => {
        props.addBalance.map((Registro) => {
            if (Registro.tipo === "ingreso") {
                Aumentar();
            } else {
                Disminuir();
            }
        });

        console.log(props.addBalance);
    };

    return (
        <Fragment>
            <h2>Balance actual:</h2>
            <h2 id="valorBalance">{Balance}</h2>
            <button onClick={SignoMontos} id="ActualizarBalance" className="btn">
                Actualizar
      </button>
        </Fragment>
    );
};

export default BalanceActual;
