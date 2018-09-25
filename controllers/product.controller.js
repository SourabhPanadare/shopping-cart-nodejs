const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//Create
exports.product_create = function (req, res) {
    let product = new Product({
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image
    });

    product.save(function(error) {
      if (error) {
          console.error(error);
       }
        res.send('Product Created successfully');
    });
};

//Read
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return err;
        res.send(product);
    })
};

//Update
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return err;
        res.send('Product udpated.');
    });
};

//Delete
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};
