
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/dist/modal";
// import "../App.css";
// import axios from "axios";

// export default function PersonalPost({ _id, cover, createdAt, tags, desc, snapdet, author, currentUser }) {
//   const date = new Date(createdAt);
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear();
//   const formattedDate = `${day}-${month}-${year}`;

//   const [viewers, setViewers] = useState(0);
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);
//   const [liked, setLiked] = useState(false);
//   const [disliked, setDisliked] = useState(false);

//   const getData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/post/${_id}`);
//       const result = response.data;

//       const totalViews = result.views;
//       const totalLikes = result.likes;
//       const totalDislikes = result.dislikes;

//       setViewers(totalViews);
//       setLikes(totalLikes);
//       setDislikes(totalDislikes);

//       // Check local storage for like/dislike status
//       const storedLiked = localStorage.getItem(`liked_${_id}`);
//       const storedDisliked = localStorage.getItem(`disliked_${_id}`);
//       if (storedLiked === 'true') {
//         setLiked(true);
//       }
//       if (storedDisliked === 'true') {
//         setDisliked(true);
//       }
//     } catch (error) {
//       console.error('Error fetching post:', error);
//     }
//   };



//   const addLike = async () => {
//     try {
//       if (liked) {
//         await axios.post('http://localhost:4000/remove-likes', { postId: _id });
//         setLiked(false);
//         localStorage.setItem(`liked_${_id}`, 'false');
//       } else {
//         await axios.post('http://localhost:4000/update-likes', { postId: _id });
//         setLiked(true);
//         localStorage.setItem(`liked_${_id}`, 'true');
//         if (disliked) {
//           await axios.post('http://localhost:4000/remove-dislikes', { postId: _id });
//           setDisliked(false);
//           localStorage.setItem(`disliked_${_id}`, 'false');
//         }
//       }
//       getData();
//     } catch (error) {
//       console.error('Error updating likes:', error);
//     }
//   };

//   const addDislike = async () => {
//     try {
//       if (disliked) {
//         await axios.post('http://localhost:4000/remove-dislikes', { postId: _id });
//         setDisliked(false);
//         localStorage.setItem(`disliked_${_id}`, 'false');
//       } else {
//         await axios.post('http://localhost:4000/update-dislikes', { postId: _id });
//         setDisliked(true);
//         localStorage.setItem(`disliked_${_id}`, 'true');
//         if (liked) {
//           await axios.post('http://localhost:4000/remove-likes', { postId: _id });
//           setLiked(false);
//           localStorage.setItem(`liked_${_id}`, 'false');
//         }
//       }
//       getData();
//     } catch (error) {
//       console.error('Error updating dislikes:', error);
//     }
//   };

//   useEffect(() => {
//     const downloadButtons = document.querySelectorAll(`[data-download="${_id}"]`);

//     downloadButtons.forEach(button => {
//       const id = button.dataset.downloadId;
//       const image = document.getElementById(id);
//       const a = document.createElement("a");

//       a.href = image.src;
//       a.download = "";
//       a.style.display = "none";

//       const handleClick = () => {
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//       };

//       button.addEventListener("click", handleClick);

//       // Cleanup the event listener on component unmount
//       return () => {
//         button.removeEventListener("click", handleClick);
//       };
//     });
//   }, [_id]);

//   // Check if the current user is the author of the post
//   if (author !== currentUser) {
//     return null;
//   }






  
  
//   return (
//     <div className="post">
//       <div className="image">
//         <img
//           src={"http://localhost:4000/" + cover}
//           alt=""
//           data-bs-toggle="modal"
//           className="cursor-pointer"
//           data-bs-target={"#imageExample" + _id}
//         />
//         <div className="overlay">{author} <span className="hover-date">{formattedDate}</span></div>
//       </div>

//       <div className="modal fade" id={"imageExample" + _id} tabIndex="-1" aria-hidden="true">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//             <div className="modal-header-content">
//                 <h5>{tags}</h5>
//                 <p>Uploaded on {formattedDate}</p>
//                 <p>by-{author}</p>
//                 <p>Views: {viewers}</p>
//                 <p className="like-numbers">{likes}</p> {liked ? <i className="bi bi-hand-thumbs-up-fill like-fill" onClick={addLike}/> : <i className="bi bi-hand-thumbs-up like" onClick={addLike} />  }                                                                                     {disliked ? <i className="bi bi-hand-thumbs-down-fill dislike-fill" onClick={addDislike}/>: <i className="bi bi-hand-thumbs-down dislike" onClick={addDislike} />} <p className="dislike-numbers">{dislikes}</p>
//               </div>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="modal-description">{desc}</div>
//               <div className="snap-details"><span className="sd">Snap details(optional):</span> {snapdet}</div>

//               <button type="button" data-download={_id} data-download-id={"myImage" + _id} className="dwld-btn">Download</button>

//               <img id={"myImage" + _id} src={"http://localhost:4000/" + cover} className="img-fluid" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import "../App.css";
import axios from "axios";

export default function PersonalPost({ _id, cover, createdAt, tags, desc, snapdet, author, currentUser }) {
  const date = new Date(createdAt);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const [viewers, setViewers] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [totalViews, setTotalViews] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/post/${_id}`);
      const result = response.data;

      const totalViews = result.views;
      const totalLikes = result.likes;
      const totalDislikes = result.dislikes;

      setViewers(totalViews);
      setLikes(totalLikes);
      setDislikes(totalDislikes);

      // Check local storage for like/dislike status
      const storedLiked = localStorage.getItem(`liked_${_id}`);
      const storedDisliked = localStorage.getItem(`disliked_${_id}`);
      if (storedLiked === 'true') {
        setLiked(true);
      }
      if (storedDisliked === 'true') {
        setDisliked(true);
      }

      // Update the total views count
      setTotalViews(prevTotalViews => prevTotalViews + totalViews);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };


  useEffect(()=>{
    getData();
  },[]);

  

  const addLike = async () => {
    try {
      if (liked) {
        await axios.post('http://localhost:4000/remove-likes', { postId: _id });
        setLiked(false);
        localStorage.setItem(`liked_${_id}`, 'false');
      } else {
        await axios.post('http://localhost:4000/update-likes', { postId: _id });
        setLiked(true);
        localStorage.setItem(`liked_${_id}`, 'true');
        if (disliked) {
          await axios.post('http://localhost:4000/remove-dislikes', { postId: _id });
          setDisliked(false);
          localStorage.setItem(`disliked_${_id}`, 'false');
        }
      }
      getData();
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const addDislike = async () => {
    try {
      if (disliked) {
        await axios.post('http://localhost:4000/remove-dislikes', { postId: _id });
        setDisliked(false);
        localStorage.setItem(`disliked_${_id}`, 'false');
      } else {
        await axios.post('http://localhost:4000/update-dislikes', { postId: _id });
        setDisliked(true);
        localStorage.setItem(`disliked_${_id}`, 'true');
        if (liked) {
          await axios.post('http://localhost:4000/remove-likes', { postId: _id });
          setLiked(false);
          localStorage.setItem(`liked_${_id}`, 'false');
        }
      }
      getData();
    } catch (error) {
      console.error('Error updating dislikes:', error);
    }
  };

  useEffect(() => {
    const downloadButtons = document.querySelectorAll(`[data-download="${_id}"]`);

    downloadButtons.forEach(button => {
      const id = button.dataset.downloadId;
      const image = document.getElementById(id);
      const a = document.createElement("a");

      a.href = image.src;
      a.download = "";
      a.style.display = "none";

      const handleClick = () => {
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };

      button.addEventListener("click", handleClick);

      // Cleanup the event listener on component unmount
      return () => {
        button.removeEventListener("click", handleClick);
      };
    });
  }, [_id]);

  // Check if the current user is the author of the post
  if (author !== currentUser) {
    return null;
  }

  return (
    <div className="post">
      <div className="image">
        <img
          src={"http://localhost:4000/" + cover}
          alt=""
          data-bs-toggle="modal"
          className="cursor-pointer"
          data-bs-target={"#imageExample" + _id}
        />
        <div className="overlay">{author} <span className="hover-date">{formattedDate}</span></div>
      </div>

      <div className="modal fade" id={"imageExample" + _id} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <h5>{tags}</h5>
                <p>Uploaded on {formattedDate}</p>
                <p>by-{author}</p>
                <p>Views: {viewers}</p>
                <p className="like-numbers">{likes}</p> {liked ? <i className="bi bi-hand-thumbs-up-fill like-fill" onClick={addLike}/> : <i className="bi bi-hand-thumbs-up like" onClick={addLike} />  }                                                                                     {disliked ? <i className="bi bi-hand-thumbs-down-fill dislike-fill" onClick={addDislike}/>: <i className="bi bi-hand-thumbs-down dislike" onClick={addDislike} />} <p className="dislike-numbers">{dislikes}</p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="modal-description">{desc}</div>
              <div className="snap-details"><span className="sd">Snap details(optional):</span> {snapdet}</div>

              <button type="button" data-download={_id} data-download-id={"myImage" + _id} className="dwld-btn">Download</button>

              <img id={"myImage" + _id} src={"http://localhost:4000/" + cover} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



