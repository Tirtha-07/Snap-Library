const mongoose= require('mongoose');

const otpSchema= new mongoose.Schema({

    otp:{
        type:String,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 // 1 hour
    }
})

const otpCollection= mongoose.model("otps",otpSchema);
module.exports= otpCollection;