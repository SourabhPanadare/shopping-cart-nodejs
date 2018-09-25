const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');
const productview_controller = require('../controllers/productview.controller');

/*----------------------------Enable Any One For Testing i.e through Controller or through Views--------------------*/

//CURD Operations Through Controller And Postman
//router.get('/test', product_controller.test); // Test Connection
//router.post('/create', product_controller.product_create); // Create
//router.get('/:id', product_controller.product_details);    // Read
//router.put('/:id/update', product_controller.product_update); //Update
//router.delete('/:id/delete', product_controller.product_delete); // Delete

//CURD Operations Through Views
router.get('/',productview_controller.list); // Get all products
router.get('/show/:id',productview_controller.show); // Get single product by id
router.get('/create',productview_controller.create); // Create product
router.post('/save',productview_controller.save); // Save Product
router.get('/edit/:id',productview_controller.edit); // Edit Product
router.post('/update/:id',productview_controller.update); // Update Product
router.post('/delete/:id',productview_controller.delete); // Delete Product

module.exports = router;
