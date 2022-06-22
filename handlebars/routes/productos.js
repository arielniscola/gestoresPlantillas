const { Router } = require('express');

const api = Router();
const productosControllers = require('../controllers/productos');

api.get('', productosControllers.getProductos);
//api.get('/:id', productosControllers.getProductoID);
api.post('', productosControllers.addProducto);
//api.put('/:id', productosControllers.updateProducto);
//api.delete('/:id', productosControllers.deleteProducto);


module.exports = api