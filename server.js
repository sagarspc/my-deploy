var express = require('express');
const multer = require('multer');
const path = require('path');
//const router = express.Router();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
 const corsOptions = {
   origin: 'http://localhost:4200',   optionsSuccessStatus: 200
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors(corsOptions))

const db = require('./server/app/config/db.config');
const DIR = './src/assets';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
      console.log("file",file)
    cb(null, file.originalname);
  }
});

let upload = multer({storage: storage});


app.post('/api/customers/uploads',upload.single('photo'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
});

// force: true will drop the table if it already exists
// db.sequelize.sync({force: false}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });
const Role = db.role;

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });

function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
	
	Role.create({
		id: 2,
		name: "ADMIN"
	});
	
	Role.create({
		id: 3,
		name: "PM"
	});
}

require('./server/app/route/customer.route.js')(app);
require('./server/app/route/transport.route.js')(app);
require('./server/app/route/router.js')(app);

// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

// function initial(){

//   let customers = [
//     {
//       id: 1,
//       fishname: "Joe",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     },
//     {
//       id: 2,
//       fishname: "Peter",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     },
//     {
//       id: 3,
//       fishname: "Lauren",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     },
//     {
//       id: 4,
//       fishname: "Mary",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     },
//     {
//       id: 5,
//       fishname: "David",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     },
//     {
//       id: 6,
//       fishname: "Holly",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     },
//     {
//       id: 7,
//       fishname: "Michael",
//       imageurl: "",
//       fishsize: "",
//       qty: "",
//       price: ""
//     }
//   ]

//   // // Init data -> save to MySQL
//   const Customer = db.customers;
//   for (let i = 0; i < customers.length; i++) { 
//     Customer.create(customers[i]);  
//   }
// }