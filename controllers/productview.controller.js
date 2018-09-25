const Product = require('../models/product.model');

exports.list = function (req, res) {
  Product.find({}).exec(function (err, productresult) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/index", {product: productresult});
    }
  });
};


exports.show = function (req, res) {
  Product.findOne({_id: req.params.id}).exec(function (err, productresult) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/show", {product: productresult});
    }
  });
};


exports.create = function (req, res) {
  res.render("../views/products/create");
};


exports.save = function(req, res) {
  var product = new Product(req.body);

  product.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/products/create");
    } else {
      console.log("Successfully created an product.");
      res.redirect("/products/show/"+product._id);
    }
  });
};

exports.edit = function(req, res) {
  Product.findOne({_id: req.params.id}).exec(function (err, productresult) {
   if (err) {
     console.log("Error:", err);
   }
   else {
     res.render("../views/products/edit", {product: productresult});
   }
 });
};

exports.update = function(req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title, desc: req.body.desc, category: req.body.category, price: req.body.price, image: req.body.image }}, { new: true }, function (err, productresult) {
    if (err) {
      console.log(err);
      res.render("../views/products/edit", {product: req.body});
    }
    res.redirect("/products/show/"+product._id);
  });
};

exports.delete = function(req, res) {
  Product.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Product deleted!");
      res.redirect("/products");
    }
  });
};
