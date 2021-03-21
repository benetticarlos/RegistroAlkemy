import "./App.css";
import { Fragment, useState, useEffect } from "react";
import Table from "./components/Table";
import Formulario from "./components/Formulario";
import { v4 as uuidv4 } from "uuid";
import BalanceActual from "./components/balanceActual";
import axios from "axios";
import SignoMontos from "./components/balanceActual";

function App() {
  const registrosData = [
    {
      id: uuidv4(),
      monto: "12000",
      concepto: "alquiler",
      tipo: "egreso",
      fecha: "9 de marzo",
    },
    {
      id: uuidv4(),
      monto: "30000",
      concepto: "sueldo",
      tipo: "ingreso",
      fecha: "5 de marzo",
    },
    {
      id: uuidv4(),
      monto: "700",
      concepto: "comida",
      tipo: "egreso",
      fecha: "6 de marzo",
    },
  ];

  // state
  const [Registros, setRegistros] = useState(registrosData);

  // Agregar registro
  const addRegistro = (Registro) => {
    Registro.id = uuidv4();
    setRegistros([...Registros, Registro]);
  };

  return (

    
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Gastos <br></br>
            Personales
          </a>
        </div>
      </nav>

    
      <div className="container">
        <div className="cabecera d-flex bd-highlight">
          <div className="balanceActual p-2 flex-fill bd-highlight">
            <BalanceActual addBalance={Registros}></BalanceActual>
          </div>
          <div className="agregarRegistro p-2 flex-fill bd-highlight">
            <Formulario addRegistro={addRegistro}>
              <button
                type="submit"
                class="btn btn-primary"
                id="BotonForm"
                onSubmit={SignoMontos}
              >
                Submit
              </button>
            </Formulario>
          </div>
        </div>

        <div className="ultimosRegistros">
          <h2 id="tituloTabla">Últimos registros</h2>

          <Table Registros={Registros}></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
