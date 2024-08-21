// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const PostModel = require('../models/Post');
// const multer = require('multer');

// const nodemailer = require('nodemailer');
// const crypto = require('crypto');

// const salt = bcrypt.genSaltSync(10);

// const SECRET_KEY="NODE_API"


// // -------------------------------------------------------------------------------------------


// // nodemailer--------------














// // -------------------------------------------------------------------------------------------------



// exports.register = async (req, res) => {


//   const { firstname, lastname, username, email, password } = req.body;
//   try {
    
//     const existingUser = await User.findOne({ username: username });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: 'Username already exists',
//       });
//     }

//     // Hash the password
//     const hashedPassword = bcrypt.hashSync(password, salt);
    
//     // Create the new user
//     const userDoc = await User.create({ firstname, lastname, username,email, password: hashedPassword });

//     // Generate a JWT token
//     const token = jwt.sign(
//       { username: userDoc.username, id: userDoc._id },
//       SECRET_KEY
//     );

//     // Send the response
//     res.status(201).json({
//       success: true,
//       message: 'Registration successful',
//       data: userDoc,
//       token: token,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: 'Internal Server Error',
//     });
//   }
// }














// // ----------------------------oooooooooooooooooooooooootttttttttttttttttttttpppppppppppppppp-----

// // router.post('/verify-otp', async (req, res) => {






// // ----------------------------------------------------------------------------------------

// // exports.login = async (req, res) => {
// //   const { username, password } = req.body;

// //   try {
// //     const userDoc = await User.findOne({ username });

// //     if (!userDoc) {
// //       return res.status(401).json({ message: 'Invalid username or password' });
// //     }

// //     const passOk = bcrypt.compareSync(password, userDoc.password);

// //     if (passOk) {
// //       jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
// //         if (err) throw err;
// //         res.cookie('token', token).json({
// //           id: userDoc._id,
// //           token: token,
// //           status:200,
     
// //         });
// //       });
// //     } else {
// //       res.status(400).json('Wrong credentials');
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // };

// exports.logout = (req, res) => {
//   res.cookie('token', '').json('OK');
// };




// // --------------------------------------------------------------------------------------
// // exports.login= async(req,res)=>{
// //   const {username,password} =req.body
// //   console.log("body====>",req.body);
// //   try{
// //       const existingUser = await User.findOne({username:username});
// //       console.log("existingUser=========>",existingUser);
// //       if(!existingUser){
// //           return res.send({status:404,
// //           message:"User dos't Found"})}

// //           const matchPassword = await bcrypt.compare(password,existingUser.password)
// //           if(!matchPassword){
// //               return res.send(null)
// //           } 
          
       
         
         

// //           const token=jwt.sign({username:existingUser.username,
// //               id:existingUser._id},SECRET_KEY)
// //               return res.send({
// //                   success:true,
// //                   status:200,
// //                   message: "Login Successfull",
// //                   data:existingUser,
// //                   token:token
// //               })
// //           }catch(error){
// //       return res.send({
// //           success:false,
// //           status:500,
// //           message:"Internal 25555Server Error"
// //       })


// //   }
// // }






// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   console.log("body====>", req.body);

//   // Check if SECRET_KEY is defined
//   console.log("SECRET_KEY====>", SECRET_KEY);

//   try {
//     const existingUser = await User.findOne({ username: username });
//     console.log("existingUser=========>", existingUser);
    
//     if (!existingUser) {
//       return res.status(404).send({
//         success: false,
//         message: "User doesn't exist"
//       });
//     }

//     const matchPassword = await bcrypt.compare(password, existingUser.password);
//     if (!matchPassword) {
//       return res.status(401).send({
//         success: false,
//         message: "Invalid credentials"
//       });
//     }

//     const token = jwt.sign(
//       { username: existingUser.username, id: existingUser._id },
//       SECRET_KEY,
//       { expiresIn: '1h' } // Token expiry can be set as needed
//     );

//     return res.status(200).send({
//       success: true,
//       message: "Login Successful",
//       data: existingUser,
//       token: token
//     });
//   } catch (error) {
//     console.error("Login error:", error); // Log the actual error for debugging
//     return res.status(500).send({
//       success: false,
//       message: "Internal Server Error"
//     });
//   }
// };


// // -------------------------------------------------------------------------------------------


// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const posts = await PostModel.find({ author: user.username });
//     res.json({ user, posts });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }




// exports.updateTotalViews = async (req, res) => {
//   const { totalViews } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, { totalViews }, { new: true });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }



// exports.updateTotalLikes= async (req, res) => {

//   try {
//     const { totalLikes } = req.body;
//     const user = await User.findByIdAndUpdate(req.params.id, { totalLikes }, { new: true });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }

// }




// exports.updateTotalDislikes= async (req, res) => {

//   try {
//     const { totalDislikes } = req.body;
//     const user = await User.findByIdAndUpdate(req.params.id, { totalDislikes }, { new: true });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
  

// }






const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const OtpModel= require('../models/Otp')
const OtpModel2= require('../models/Otp2')
const PostModel = require('../models/Post');
const multer = require('multer');
const otpGenerator= require("otp-generator");
const fs= require('fs')
const path=require("path")

const nodemailer = require('nodemailer');
const crypto = require('crypto');

const salt = bcrypt.genSaltSync(10);

const SECRET_KEY="NODE_API"

const { v4: uuidv4 } = require('uuid');





// --------------------------------------------------------------register--------------------------


exports.register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  const { path: tempPath, originalname } = req.file;

  const ext = path.extname(originalname);
  const newFilename = uuidv4() + ext;
  const newPath = path.join('profileUploads', newFilename);

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  fs.renameSync(tempPath, newPath);

  try {
    const userDoc = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      profilePicture: newPath,
    });

    res.json(userDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// -------------------node mailer--------------------------------------


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tirtharaj391@gmail.com',
    pass: 'qomgbdeoottkwfkz'
  }
}); 

exports.sendMail= (req,res)=> {
   
    const{email} = req.body;

    const otp= otpGenerator.generate(6, {});

    if(otp){

      const userOtp= OtpModel.create({otp});
    
    }else{
      console.log("something went wrong");
    }

    

    const mailOptions = {
        from: 'tirtharaj391@gmail.com',
        to: email,
        html:`<p>Following is your otp ${otp}</p>`
      };

      res.send({

        status: 200,
        message:"mail sent successfully",
        data: mailOptions,
        otp:otp
    })

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else { 
          console.log('Email sent: ' + info.response);
        }
      });
 
}








exports.sendMail2= (req,res)=> {
   
  const{email} = req.body;

  const otp= otpGenerator.generate(6, {});

  if(otp){

    const userOtp= OtpModel2.create({otp});
  
  }else{
    console.log("something went wrong");
  }

  

  const mailOptions = {
      from: 'tirtharaj391@gmail.com',
      to: email,
      html:`<p>Following is your otp ${otp}</p>`
    };

    res.send({

      status: 200,
      message:"mail sent successfully",
      data: mailOptions,
      otp:otp
  })

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else { 
        console.log('Email sent: ' + info.response);
      }
    });

}





// ----------------------------------------------------------------------------------------------------



exports.compareOtp= async (req,res) =>{

  const { otp } = req.body;

  console.log(req.body);

  try{
    const matchOtp= await OtpModel.findOne({otp: otp});

    if(!matchOtp){
      return res.status(404).send({
        success: false,
        message: "wrong otp entered"
      });
    }else{

      return res.status(200).send({
        success: true,
        message: "correct otp entetred"
      });



    }

  }catch(error){
    console.log(error);
  }

}












exports.compareOtp2= async (req,res) =>{

  const { otp } = req.body;

  console.log(req.body);

  try{
    const matchOtp= await OtpModel2.findOne({otp: otp});

    if(!matchOtp){
      return res.status(404).send({
        success: false,
        message: "wrong otp entered"
      });
    }else{

      return res.status(200).send({
        success: true,
        message: "correct otp entetred"
      });



    }

  }catch(error){
    console.log(error);
  }

}




// ---------------------------------------------------------------------












exports.logout = (req, res) => {
  res.cookie('token', '').json('OK');
};








exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log("body====>", req.body);

  // Check if SECRET_KEY is defined
  console.log("SECRET_KEY====>", SECRET_KEY);

  try {
    const existingUser = await User.findOne({ username: username });
    console.log("existingUser=========>", existingUser);
    
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User doesn't exist"
      });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      SECRET_KEY,
      { expiresIn: '1h' } // Token expiry can be set as needed
    );

    return res.status(200).send({
      success: true,
      message: "Login Successful",
      data: existingUser,
      token: token
    });
  } catch (error) {
    console.error("Login error:", error); // Log the actual error for debugging
    return res.status(500).send({
      success: false,
      message: "Internal Server Error"
    });
  }
};


// -------------------------------------------------------------------------------------------


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const posts = await PostModel.find({ author: user.username });
    res.json({ user, posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




exports.updateTotalViews = async (req, res) => {
  const { totalViews } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { totalViews }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



exports.updateTotalLikes= async (req, res) => {

  try {
    const { totalLikes } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { totalLikes }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}




exports.updateTotalDislikes= async (req, res) => {

  try {
    const { totalDislikes } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { totalDislikes }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  

}








// exports.updatePassword = async (req, res) => {
//   try {
//     const userEmail = req.params.email;
//     const updatedUser = await User.findOneAndUpdate(
//       { email: userEmail },
//       { password: req.body.newpassword }, // Assuming `newPassword` is the key in the request body
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).send({ message: 'User not found' });
//     }

//     res.send(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Server error' });
//   }
// };





exports.updatePassword = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const newPassword = req.body.newpassword;

    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    const updatedUser = await User.findOneAndUpdate(
      { email: userEmail },
      { password: hashedPassword }, // Update with hashed password
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
};
