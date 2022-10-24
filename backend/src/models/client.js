const mongoose = require("mongoose");
const validator = require("validator");


const Client = mongoose.model("client",{
    name:{
        type:String,
        required:true,
        trim:true,
    },
    service:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:Number,
        required:true,
        trim:true,
    },
    feedback:{
        type:string,
        trim:true,

    },

});

module.exports = Client;