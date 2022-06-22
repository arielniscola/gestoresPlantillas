

class Productos {

    constructor(data = []){
      this.productos = data;
    }

    addProducto(prod){
        let idCount = 0;
        if(this.productos.length > 0){
            idCount = this.productos[this.productos.length -1].id;              
        }
        const id = idCount + 1;
        prod.id = id;
        this.productos.push(prod);
    }
    getProductos(){
        return this.productos;
    }
    getProductoID(id){
        for(let i=0; this.productos.length > i; i++){
            if(this.productos[i].id == id){
                return this.productos[i]
            }
        }      
        return null
    }
    updateProducto(prod, id){

        for(let i =0; this.productos.length > i; i++){
            if(this.productos[i].id == id){
                this.productos[i].title = prod.title;
                this.productos[i].price = prod.price;
                this.productos[i].thumbnail = prod.thumbnail;

                return true
            }
        }
        return false
    }
    deleteProducto(id){
        for(let i=0; i < this.productos.length; i++){              
            if(this.productos[i].id == id){
               this.productos.splice(i, 1);
               return true;
         }
        }
        return false;
    }
}

//exportar la instancia de productos con un array de prueba.
module.exports = new Productos([]);