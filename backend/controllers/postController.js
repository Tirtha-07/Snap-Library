const fs = require('fs');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');

const secret = 'edfsdf4534513536ewdfsdfsd';


// -----------------------------------------------------------------------------------

exports.createPost = async (req, res) => {
  const { tags, desc, snapdet, author,username, views } = req.body;
  const { path: tempPath, originalname } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = tempPath + '.' + ext;

  fs.renameSync(tempPath, newPath);
 

  try {
    const postDoc = await Post.create({
      tags,
      desc,
      snapdet,
      author,
      cover: newPath,
      views
    });

    res.json(postDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// ------------------------------------------------------------------------------------

exports.updatePost = async (req, res) => {
  let newPath = null;

  if (req.file) {
    const { path: tempPath, originalname } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = tempPath + '.' + ext;
    fs.renameSync(tempPath, newPath);
  }

  try {
    const { id, tags, desc, snapdet } = req.body;
    const postDoc = await Post.findById(id);

    if (!postDoc) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (postDoc.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await postDoc.updateOne({
      tags,
      desc,
      snapdet,
      cover: newPath ? newPath : postDoc.cover,
    });

    res.json(postDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ------------------------------------------------------------------------------
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      // .populate('author', ['username'])
      .sort({ createdAt: -1 })
      .limit(20);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.aggregate([
//       // Stage 1: Join with the User collection
//       {
//         $lookup: {
//           from: 'users', // The name of the User collection
//           localField: 'author', // Field from the Post collection
//           foreignField: '_id', // Field from the User collection
//           as: 'author' // The name of the field to add the joined documents
//         }
//       },
//       // Stage 2: Unwind the joined documents to work with a single document
//       {
//         $unwind: '$author'
//       },
//       // Stage 3: Project the necessary fields
//       {
//         $project: {
//           tags: 1,
//           desc: 1,
//           snapdet: 1,
//           cover: 1,
//           createdAt: 1,
//           author: { userName: 1 } // Include only the userName field from the author
//         }
//       },
//       // Stage 4: Sort the results by createdAt in descending order
//       {
//         $sort: { createdAt: -1 }
//       },
//       // Stage 5: Limit the number of results
//       {
//         $limit: 20
//       }
//     ]);

//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// -----------------------------------------------------------------------




exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    // const post = await Post.findById(id).populate('author', ['userName']);
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// exports.searchByTags = async (req, res) => {
//   const { searchTerm } = req.query;

//   try {
//     // Perform the regex query to search for tags containing the search term
//     const result = await Post.find({ tags: { $regex: searchTerm, $options: "i" } })

//     res.status(200).json({ success: true, data: result });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// }; 






exports.searchByTags = async (req, res) => {
  const { searchTerm } = req.query;

  try {
    // Perform the regex query to search for tags containing the search term
    const result = await Post.find({ tags: { $regex: searchTerm, $options: "i" } });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};





// ---------------------------------------------------------------------

exports.updateViews = async (req, res) => {
  const { postId } = req.body;

  try {
    // Find the post by ID and increment the view count
    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { views: 1 } },
      { new: true, runValidators: true }
      
    );

    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};








// ----------------------------------------------------------------------------

exports.getPost = async (req, res) => {
  const { postId } = req.params;

  console.log("postId:", postId);

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};




// ---------------------------------------------------------------------------------------------

exports.updateLikes = async (req, res) => {
  const { postId } = req.body;

  try {
    // Find the post by ID and increment the view count
    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { likes: 1 } },
      { new: true, runValidators: true }
      
    );

    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};






// ---------------------------------------------------------------------------------------------------


exports.removeLikes = async (req, res) => {
  const { postId } = req.body;

  try {
    // Find the post by ID and decrement the likes count
    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { likes: -1 } },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};








exports.updateDislikes = async (req, res) => {

  const { postId } = req.body;

  try {
    // Find the post by ID and increment the view count
    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { dislikes: 1 } },
      { new: true, runValidators: true }
      
    );

    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};




exports.removeDisikes = async (req, res) => {
  const { postId } = req.body;

  try {
    // Find the post by ID and decrement the likes count
    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { dislikes: -1 } },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

