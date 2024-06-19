
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import PersonalPost from "../components/PersonalPost";
// import { useAuthContext } from "../hooks/useAuthContext";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [totalViews, setTotalViews] = useState(0);
//   const [totalLikes, setTotalLikes] = useState(0);
//   const [totalDislikes, setTotalDislikes] = useState(0);


//   const { user } = useAuthContext();

//   useEffect(() => {
//     const fetchData = async () => {
//       if (user && user.data) {
//         const fetchedUser = user.data.username;
//         setCurrentUser(fetchedUser);

//         const userId = user.data._id;
//         const response = await axios.get(`http://localhost:4000/auth/user/${userId}`);
//         const { user: userDetails, posts: userPosts } = response.data;

//         setPosts(userPosts);

//         let viewsSum = 0;
//         userPosts.forEach(post => {
//           viewsSum += post.views;
//         });
          
//         setTotalViews(viewsSum);


//         let likesSum = 0;
//         userPosts.forEach(post => {
//           likesSum += post.likes;
//         });
         
//         setTotalLikes(likesSum)


//         let dislikesSum = 0;
//         userPosts.forEach(post => {
//           dislikesSum += post.dislikes;
//         });
         
//         setTotalDislikes(dislikesSum)



//         // Update user details with total views
//         await axios.put(`http://localhost:4000/auth/user/${userId}/views`, { totalViews: viewsSum });
//         await axios.put(`http://localhost:4000/auth/user/${userId}/likes`, { totalLikes: likesSum });
//         await axios.put(`http://localhost:4000/auth/user/${userId}/dislikes`, { totalDislikes: dislikesSum });


//       }
//     };

//     fetchData();
//   }, [user]);

//   if (!user) return <div>Loading user data...</div>;
//   if (!currentUser) return <div>Loading current user...</div>;

//   return (
//     <div className="profile-main">
//       <i class="bi bi-person-circle user-icon"></i>
//       <p className="welcome">{currentUser}</p>
//       <button className="edit-button"><i class="bi bi-pencil-fill"></i><span className="edit-profile">Edit profile</span></button><br></br>

//       <div className="profile-tab">
//         <p className="stat-one">Total views</p>
//         <p className="stat-two">{totalViews}</p>
//       </div>


//       <div className="profile-tab2">
//         <p className="stat-one">Total likes</p>
//         <p className="stat-two">{totalLikes}</p>
//       </div>


//       <div className="profile-tab3">
//         <p className="stat-one">Total dislikes</p>
//         <p className="stat-two">{totalDislikes}</p>
//       </div>

//       <h3 className="your-uploads">Your uploads:</h3>
//        <hr></hr>
//       <div className="post-grid">
//         {posts.length > 0 ? (
//           posts.map((post, index) => (
//             <PersonalPost key={index} {...post} currentUser={currentUser}>
//               <img
//                 src={post.imageUrl} /* Assuming imageUrl prop holds image URL */
//                 alt={post.imageAlt} /* Provide alternative text for accessibility */
//                 className="post-grid-image"
//               />
//             </PersonalPost>
//           ))
//         ) : (
//           <div><h1>No contributions yet.</h1></div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;












import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalPost from "../components/PersonalPost";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [totalViews, setTotalViews] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalDislikes, setTotalDislikes] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const { user } = useAuthContext();

  const fetchData = async () => {
    if (user && user.data) {
      const fetchedUser = user.data.username;
      setCurrentUser(fetchedUser);



      const userId = user.data._id;
      const response = await axios.get(`http://localhost:4000/auth/user/${userId}`);
      const { user: userDetails, posts: userPosts } = response.data;

      console.log("currentUser:><><><><><><",currentUser);


      setPosts(userPosts);

      let viewsSum = 0;
      userPosts.forEach(post => {
        viewsSum += post.views;
      });
          
      setTotalViews(viewsSum);

      let likesSum = 0;
      userPosts.forEach(post => {
        likesSum += post.likes;
      });
         
      setTotalLikes(likesSum);

      let dislikesSum = 0;
      userPosts.forEach(post => {
        dislikesSum += post.dislikes;
      });
         
      setTotalDislikes(dislikesSum);

      // Update user details with total views
      await axios.put(`http://localhost:4000/auth/user/${userId}/views`, { totalViews: viewsSum });
      await axios.put(`http://localhost:4000/auth/user/${userId}/likes`, { totalLikes: likesSum });
      await axios.put(`http://localhost:4000/auth/user/${userId}/dislikes`, { totalDislikes: dislikesSum });
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const sent = () => {
    setRedirect(true);
  };

  if (!user) return <div>Loading user data...</div>;
  if (!currentUser) return <div>Loading current user...</div>;

  if (redirect) {
    return <Navigate to="/upload" />;
  }

  


  return (

    <div className="profile-main">
      <i className="bi bi-person-circle user-icon"></i>
      <p className="welcome">{currentUser}</p>
      <button className="edit-button"><i className="bi bi-pencil-fill"></i><span className="edit-profile">Edit profile</span></button><br></br>

      <div className="profile-tab">
        <p className="stat-one">Total views</p>
        <p className="stat-two">{totalViews}</p>
      </div>

      <div className="profile-tab2">
        <p className="stat-one">Total likes</p>
        <p className="stat-two">{totalLikes}</p>
      </div>

      <div className="profile-tab3">
        <p className="stat-one">Total dislikes</p>
        <p className="stat-two">{totalDislikes}</p>
      </div>

      <h3 className="your-uploads">Your uploads:</h3>
      <hr></hr>
      <div className="post-grid">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PersonalPost key={index} {...post} currentUser={currentUser}>
              <img
                src={post.imageUrl} /* Assuming imageUrl prop holds image URL */
                alt={post.imageAlt} /* Provide alternative text for accessibility */
                className="post-grid-image"
              />
            </PersonalPost>
          ))
        ) : (
          <div className="empty-profile">
            <h1>No contributions yet!..</h1>
            <p className="profile-tag">Be quick to make one...&#128522;</p>
            <button className="profile-upload-btn" onClick={sent}>Upload</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;













