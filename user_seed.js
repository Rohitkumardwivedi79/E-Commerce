const mongoose = require('mongoose');
const User = require('./models/user');

require("dotenv").config();

// mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
mongoose.connect(process.env.dbURL)
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const user = {
    name: "rohit",
    wishlist: [],
    cartlist: [],
    orderlist: []
};

User.insertMany(user)
    .then(()=>console.log('Details Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));
