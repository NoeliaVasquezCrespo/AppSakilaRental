const conexion = require("./conexion")
const fs = require("fs");
const path = require("path");
module.exports = {
  
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select film_id, title, description, rental_rate from film
      LIMIT 10`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`select * from film where film_id = ?`,
        [id],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados[0]);
        });
    });
  },
  
  eliminar(id) {
    return new Promise(async (resolve, reject) => {
     
      conexion.query(`delete from film
            where film_id = ?`,
        [id],
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
  },
}
