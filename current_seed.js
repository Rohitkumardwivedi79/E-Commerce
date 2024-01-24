const mongoose = require('mongoose');
const Current = require('./models/current');

require("dotenv").config();

// mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
mongoose.connect(process.env.dbURL)
    .then(() => {
        console.log("DB Connected.");

        return Current.deleteMany({});
    })
    .then(() => {
        const currentData = {
            name: "dummy user",
            wishlist: [],
            cartlist: [],
            orderlist: []
        };

        return Current.insertMany(currentData);
    })
    .then(() => {
        console.log('DB Started Working..');
    })
    .catch((err) => {
        console.log('Something Went Wrong!!', err);
    });
