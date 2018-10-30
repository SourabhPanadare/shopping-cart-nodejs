# Reference Link

   https://www.sitepoint.com/user-authentication-mean-stack/
   https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
   https://github.com/didinj/NodeExpressCRUD/


# Envoirnment Setup

    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm
    sudo npm install -g @angular/cli
    npm i -g typescript

# Environmental Setup on cpanel through putty

    Reference:- https://ferugi.com/blog/nodejs-on-godaddy-shared-cpanel/
    
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
    nvm --version
    nvm install node
    nvm alias default node

    node -v
    npm -v
    npm list -g

    cd appname/npm init
    cd appname/npm install express --save
    cd appname/touch app.js

    app.js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    .htaccess
  
# Setting Up MongoDB

    Reference:- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

    node -v
    npm -v
    ng -v

    mongod --version
    npm list -g  mongoose :- To Enlist Version of mongodb

    Uninstalling MongoDB:-

      sudo service mongod stop
      sudo apt-get purge mongodb-org*
      sudo rm -r /var/log/mongodb
      sudo rm -r /var/lib/mongodb

    Installing MongoDB:-

      sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
      echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
      sudo apt-get update
      sudo apt-get install -y mongodb-org
      sudo systemctl enable mongod

      sudo service mongod start
      sudo service mongod restart
      sudo service mongod stop

      mongo                        (127.0.0.1:27017)

      Install Studio-3T for gui.

# Setting Angular Project

     ng new appname
     cd appname/ng serve -o
     cd appname/ng generate service servicename :- servicename.service.ts will be generated
     cd appname/ng g component pagename:- pagename.component.ts and pagename.component.html will be generated

    npm install rxjs@6 rxjs-compat@6 --save

# Setting Up Node Project (Open Project Folder)

    npm init
    npm install express --save
    npm install mongodb --save
    npm install mongoose

    npm install reqiuredpackage
    npm install requiredpackage --save

# Testing Node Application

    const express = require('express')
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World!')
    });

    app.listen(3000, () => {
      console.log('Example app listening on port 3000!')
    });

# Testing MongoDb Connection

    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect("mongodb://localhost:27017/shoppingcart", function (err, database) {

        var db = database.db('shopping');
        db.collection('Product', function (err, collection) {

            collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });  /*----------------Insert Query-------------------*/

            collection.find().toArray(function(err, items) {                    /*-----------------Select Query------------------*/
              console.log(items);
            });

            collection.update({id: 1}, { $set: { firstName: 'James', lastName: 'Gosling'} }, {w:1},function(err, result){
              console.log('Document Updated Successfully');                     /*-----------------Update Query----------------*/
            });

            collection.remove({id:2}, {w:1}, function(err, result) {
              console.log('Document Removed Successfully');                     /*-----------------Remove Query----------------*/
            });
       });
    });

# Project Structure

    app.js:- main node file

    routes/product.route.js
    controller/product.controller.js
    models/product.model.js
    views/product.html,product.jade,product.hbs,product.ejs

    localhost:3000/products/test:- mvc testing
    localhost:3000/products/create:- POST Method
    localhost:3000/products/tableparam(id):- GET Method
    localhost:3000/products/tableparam(id)/update:- PUT Method
    localhost:3000/products/tableparam(id)/delete:- DELETE Method
