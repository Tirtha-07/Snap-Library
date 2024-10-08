// const mongoose= require("mongoose");
// const {Schema, model}= mongoose

// const UserSchema= new Schema({

//      firstname:{
//         type: String,
//         required: true
//      },


//      lastname:{

//         type: String,
//         required: true


//      },


//      username: {
//         type: String,
//         required: [true, 'Username is required'],
       
//       },

//       email: {
//         type: String,
//         required: [true, 'Email is required'],
       
//       },
      

//     password: {
//         type: String,
//         required: [true, 'Password is required'],
      
//       },

//     totalViews: { type: Number, default: 0 },

//     totalLikes: { type: Number, default: 0 },

//     totalDislikes: { type: Number, default: 0 },


// })

// const UserModel= model('users',UserSchema);

// module.exports= UserModel





const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },

  otp2: {
    type: String,
    default: Date.now,
    expires: 3600  // 1 hour in seconds
  },
  profilePicture: String,
  totalViews: {
    type: Number,
    default: 0,
  },
  totalLikes: {
    type: Number,
    default: 0,
  },
  totalDislikes: {
    type: Number,
    default: 0,
  },
});

const UserModel = model("users", UserSchema);

module.exports = UserModel;
