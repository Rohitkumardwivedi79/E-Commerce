const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name : {
            type:String,
            require:true
        },
        wishlist: {
            type: [String],
            default: [] 
        },
        cartlist: {
            type: [String],
            default: [] 
        },
        orderlist: {
            type: [String],
            default: [] 
        }
});

const User = mongoose.model('User',userSchema);
module.exports = User;