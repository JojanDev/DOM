import Categoria from "../Models/Categoria.js";
import Productos from "../Models/Productos.js";
import ProductosServicios from "./Productos.js";

class CategoriaServicios {
  CategoriaModel;
  ProductosModel;
  ProductosServicios;
  constructor() {
    this.CategoriaModel = new Categoria();
    this.ProductosModel = new Productos();
    this.ProductosServicios = new ProductosServicios();
  }

  // async getProductosByIdCategoria(id_categoria) {
  //   return await connection.query(`SELECT * FROM productos where categoria_id = ?`, [id_categoria]);
  // }

  async addProductos(categorias) { 
    const productosCategorias = await Promise.all(categorias.map(async (categoria) => {
      const [productos] = await this.ProductosServicios.getByIdCategoria(categoria.id);
      return { ...categoria, productos };
    }));
    return productosCategorias;
  };
  
  async getCategoriaProductosByID(id) {
    const categoria = await this.CategoriaModel.getByID(id);
    const productosCategorias = await this.addProductos(categoria);
    return productosCategorias;
  }

  async getCategoriasProductos() {
    const categorias = await this.CategoriaModel.getAll();
    const productosCategorias = await this.addProductos(categorias);
    return productosCategorias;
  }
}

export default CategoriaServicios;