const conexion = require("./conexion")
const fs = require("fs");
const path = require("path");
module.exports = {
  
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, title, description, rental_rate from films`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, title,description, rental_rate from films where id = ?`,
        [id],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados[0]);
        });
    });
  },
  
  eliminar(id) {
    return new Promise(async (resolve, reject) => {
     
      conexion.query(`delete from films
            where id = ?`,
        [id],
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
  },
}
