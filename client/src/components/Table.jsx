import React, { useEffect } from "react";
import BalanceActual from "./balanceActual";
import Axios from "axios";
import axios from "axios";

const Table = (props) => {
    useEffect(() => {
        console.log("useEffect");
        axios
            .get("localhost:3001/")
            .then((result) => {
                console.log(result);
            })
            .catch(console.log());
    });

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/").then((response) => {
    //         console.log(FormData);
    //     })
    // })

    console.log(props.Registros);
    return (
        
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Monto</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha</th>
                </tr>
            </thead>

            {/* Toma los valores del formulario y crea la fila en la tabla */}
            <tbody>
                {props.Registros.length > 0 ? (
                    props.Registros.map((Registro) => (
                        <tr key={Registro.id}>
                            <th scope="row">{Registro.monto}</th>
                            <td>{Registro.concepto}</td>
                            <td>{Registro.tipo}</td>
                            <td>{Registro.fecha}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Sin registros</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
