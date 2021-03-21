const express = require("express");
const app = express();
const { response, request } = require("express");
const path = require("path");

const mysql = require("mysql");

const conexion_db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alkemy_db",
});

// const registro_controller = require('./registroController')

const port = 3001;
const prueba = [];


// función que trae los registros de la tabla de datos

app.get("/", (req, res) => {
  conexion_db.query("SELECT * FROM registro_t", (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);

      // Este bucle recorre la tabla de datos y recoje los datos de cada registro para plasmarlos en consola 

      for (let i = 0; i < result.length; i++) {
        const registros = result[i];
        console.log("Datos del registro: " + registros.id + " " + registros.monto + " " + registros.concepto + " " + registros.tipo + " " + registros.fecha);
      }
    }
  });
});

console.log(prueba);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());
app.use(express.static("client"));


// función que envia datos a la base

app.post("/api", (req, res) => {

  const { id, monto, concepto, tipo, fecha } = req.body;
  conexion_db.query(
    "INSERT INTO `registro_t`(`id`, `monto`, `concepto`, `tipo`, `fecha`) VALUES (?,?,?,?,?)",
    [id, monto, concepto, tipo, fecha],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
        res.send("alta exitosa");
      }
    }
  );
});


