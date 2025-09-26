const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city : String,
    street : String,
    state : String,
    zip :  String,
    country : String
})

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        reqired : true,
        unique : true
    },
    email : {
        type : String,
        reqired : true,
        unique : true
    },
    password : {
        type : String
    },
    fullname : {
        firstname : {
            type: String,
            required : true
        },
        lastname : {
            type : String,
            required : true
        },
        role:{
            type : String,
            enum : ["user", "seller"],
            default : "user"
        },
        address : [
            {
                addressSchema
            }
        ]
    }

})


const userModel = mongoose.model('user', userSchema);

module.exports = userModel