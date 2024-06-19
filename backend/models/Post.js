
// const mongoose = require('mongoose');

// const { Schema, model } = mongoose;

// const PostSchema = new Schema({
//   tags: {
//     type: String,
//     required: true
//   },
//   desc: {
//     type: String,
//     required: true
//   },
//   snapdet: {
//     type: String
//   },
//   cover: String,
//   saves: [{ type: Schema.Types.ObjectId, ref: "users" }],
//   author: {
//     type: String
//   },
//   views: {
//     type: Number,
//     default: 0
//   },
//   likes: {
//     type: Number,
//     default: 0
//   },
//   dislikes: {
//     type: Number,
//     default: 0
//   }
// }, {
//   timestamps: true
// });

// const PostModel = model('uploads', PostSchema);

// module.exports = PostModel;









// const mongoose = require('mongoose');

// const { Schema, model } = mongoose;

// const PostSchema = new Schema({
//   tags: {
//     type: String,
//     required: true
//   },
//   desc: {
//     type: String,
//     required: true
//   },
//   snapdet: {
//     type: String
//   },
//   cover: String,
//   saves: [{ type: Schema.Types.ObjectId, ref: "users" }],
//   author: {
//     type: String
//   },
//   views: {
//     type: Number,
//     default: 0
//   },
//   likes: {
//     type: Number,
//     default: 0
//   },

  
//   dislikes: {
//     type: Number,
//     default: 0
//   }
// }, {
//   timestamps: true
// });

// const PostModel = model('uploads', PostSchema);

// module.exports = PostModel;






const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  tags: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  snapdet: {
    type: String
  },
  cover: String,
  saves: [{ type: Schema.Types.ObjectId, ref: "users" }],
  author: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },

  
  dislikes: {
    type: Number,
    default: 0
  },

  
}, {
  timestamps: true
});

const PostModel = model('uploads', PostSchema);

module.exports = PostModel;


