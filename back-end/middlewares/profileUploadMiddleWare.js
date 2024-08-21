


// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'profileUploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const profileUpload = multer({ storage: storage });

// module.exports = profileUpload;




const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profileUploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueFilename = uuidv4() + ext;
    cb(null, uniqueFilename);
  }
});

const profileUpload = multer({ storage: storage });

module.exports = profileUpload;
