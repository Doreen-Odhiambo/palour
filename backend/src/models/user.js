const mongoose = require("mongoose");
const validator = require("validator");
// const { default: BookAppointment } = require("../models/BookAppointment");

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    service: {
        type: String,
        required: true,
        
    },
    date: {
        type: Date,
        required: true,
        
    },
    feedback: {
        type: String,
        required: true,
        
    },
    

})

module.export = User;