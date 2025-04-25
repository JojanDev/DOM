import connection from "../Utils/db.js";

class ProductosServicios {

  async getByIdCategoria(id_categoria) {
    return await connection.query(`SELECT * FROM productos where categoria_id = ?`, [id_categoria]);
  }
}

export default ProductosServicios;