const mysql = require("mysql");

const conexion_db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "alkemy_db",
});

const obtenerRegistro = (req, res) => {
    conexion_db.query("SELECT * FROM registro_t", (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.send(result);
            const resultados = result;
        }
    });
};

const obtenerRegistroIngreso = (req, res) => {
    conexion_db.query(
        'SELECT `id`, `monto`, `concepto`, `tipo`, `fecha` FROM `registro_t` WHERE `tipo` = "ingreso"; ',
        (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.send(result);
            }
        }
    );
};

const obtenerRegistroEgreso = (req, res) => {
    conexion_db.query(
        'SELECT `id`, `monto`, `concepto`, `tipo`, `fecha` FROM `registro_t` WHERE `tipo` = "egreso"; ',
        (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.send(result);
            }
        }
    );
};

const obtenerIdUltimoRegistro = (req, res) => {
    conexion_db.query("select max(id) as UId from registro_t", (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.send(result);
        }
    });
};

const agregarRegistro = (req, res) => {
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
};

const borrarRegistro = (req, res) => {
    const { id } = req.body;
    conexion_db.query(
        "DELETE FROM `registro_t` WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.send("elemento borrado");
            }
        }
    );
    console.log("elemento borrado");
};

const editarRegistro = (req, res) => {
    const { id, monto, concepto, tipo, fecha } = req.body;
    conexion_db.query(
        "UPDATE `registro_t` SET `id`=?,`monto`=?,`concepto`=?,`tipo`=?,`fecha`=? WHERE id = ?",
        [id, monto, concepto, tipo, fecha],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.send("elemento editado");
            }
        }
    );
    console.log("elemento editado");
};

module.exports = {
    obtenerRegistro,
    obtenerRegistroIngreso,
    obtenerRegistroEgreso,
    obtenerIdUltimoRegistro,
    agregarRegistro,
    borrarRegistro,
    editarRegistro,
};
