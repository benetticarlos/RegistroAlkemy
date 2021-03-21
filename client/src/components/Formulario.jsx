// import { Fragment } from "react"
import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SignoMontos from "./balanceActual";
import Axios from "axios";
import axios from "axios";

export const Formulario = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    props.addRegistro(data);

    // limpiar campos
    e.target.reset();
  };

  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [concepto, setConcepto] = useState("");
  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");

  const submitReview = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        monto: monto,
        concepto: concepto,
        tipo: tipo,
        fecha: fecha,
      })
      .then(() => {
        alert("succesful insert");
      });
  };

  return (
    <div id="ContenedorFormulario">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        id="ContenidoFormulario"
      >
        <div className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              name="monto"
              placeholder="monto"
              ref={register({
                required: { value: true, message: "Campo requerido" },
              })}
              onChange={(e) => {
                setMonto(e.target.value);
              }}
            ></input>
            <div>{errors?.monto?.message}</div>
          </div>

          <div className="col-auto">
            <select
              className="form-select"
              name="tipo"
              id="autoSizingSelect"
              ref={register({
                required: { value: true, message: "Campo requerido" },
              })}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              <div>{errors?.tipo?.message}</div>
              <option value="ingreso">ingreso</option>
              <option value="egreso">egreso</option>
            </select>
          </div>

          <div className="col-auto">
            <input
              type="date"
              className="form-control"
              id="autoSizingInput"
              name="fecha"
              placeholder="fecha"
              ref={register({
                required: { value: true, message: "Campo requerido" },
              })}
              onChange={(e) => {
                setFecha(e.target.value);
              }}
            ></input>
            <div>{errors?.fecha?.message}</div>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            placeholder="concepto"
            class="form-control"
            id="exampleFormControlTextarea1"
            name="concepto"
            rows="3"
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
            onChange={(e) => {
              setConcepto(e.target.value);
            }}
          ></textarea>
          <div>{errors?.concepto?.message}</div>

          <button
            type="submit"
            class="btn btn-primary"
            id="BotonForm"
            onSubmit={SignoMontos}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
