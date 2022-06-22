const { Router } = require('express');
const { route } = require('./productos');
const router = Router();

const productos_routes = require('./productos');

router.get('/', (req, res) =>{
    res.render('main.ejs');
})
router.use('/productos', productos_routes);

module.exports = router;

