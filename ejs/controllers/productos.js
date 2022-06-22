const Productos= require('../models/producto');


function getProductos(req, res){
    const productos = Productos.getProductos();
    let hayProductos = true;
    if(productos.length == 0){
        hayProductos = false;
    }
    res.render('tableProductos.ejs', {prods: productos, hayProductos: hayProductos});
}

function getProductoID(req, res){
    let id = req.params.id;
    let producto = Productos.getProductoID(id);

    if(producto){
        return res.status(200).json(producto);
    }else{
        return res.status(404).json({error : 'Producto NO encontrado'});
    }
  
}

function addProducto(req, res){
    console.log(req.body);

    const { title, price, thumbnail} = req.body;
    const producto = {title, price, thumbnail};
    Productos.addProducto(producto);

    res.redirect('/');
    
}

function  updateProducto(req, res){
    const {title, price, thumbnail} = req.body;
    const producto = {title, price, thumbnail};
    const idProd = req.params.id;
    
    let updated = Productos.updateProducto(producto, idProd);

    if(updated){
        return res.status(200).json({message: 'Producto actualizado'})
    }else{
        return res.status(404).json({Error: 'Producto No encontrado'});
    }
}

function deleteProducto(req, res){
    const idProd = req.params.id;

    let result = Productos.deleteProducto(idProd);
    if(result){
        return res.status(200).json({message:`Objeto con ID: ${idProd} ha sido eliminado`});
    }
    return res.status(404).json({error: 'Producto No encontrado'});
}

module.exports = {
    getProductos,
    getProductoID,
    addProducto,
    updateProducto,
    deleteProducto
}