const mongoose= require('mongoose');

const otpSchema2= new mongoose.Schema({

    otp:{
        type:String,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 
    }
})

const otpCollection2= mongoose.model("secondotps",otpSchema2);
module.exports= otpCollection2;