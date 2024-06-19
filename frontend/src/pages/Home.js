
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import banner from "../assets/banner.jpg";
// import canada from "../assets/wallpaperflare.com_wallpaper.jpg";
// import waterfall from "../assets/waterfall.webp";
// import Post from "../components/Post";
// import Header from "../components/Header";

// async function searchPosts(searchTerm) {
//   const response = await fetch(`http://localhost:4000/search?searchTerm=${searchTerm}`);
//   const data = await response.json();
//   return data.data; // Extracting the 'data' field from the response
// }

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     fetch("http://localhost:4000/post")
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const results = await searchPosts(searchTerm);
//     setPosts(results);
//   };

//   const handleTravelSearch= async(e)=>{
//     e.preventDefault();
//     const results = await searchPosts("travel");
//     setPosts(results);
//     console.log("event==================>>>>>>>>>>>",e);
//   }

//   const handleLandscapeSearch= async(e)=>{
//     e.preventDefault();
//     const results = await searchPosts("landscape");
//     setPosts(results);
//     console.log("event==================>>>>>>>>>>>",e);
//   }

//   const handlePortraitSearch= async(e)=>{
//     e.preventDefault();
//     const results = await searchPosts("portrait");
//     setPosts(results);
//     console.log("event==================>>>>>>>>>>>",e);
//   }

//   const handleUrbanSearch= async(e)=>{
//     e.preventDefault();
//     const results = await searchPosts("urban");
//     setPosts(results);
//     console.log("event==================>>>>>>>>>>>",e);
//   }

//   const handleAbstractSearch= async(e)=>{
//     e.preventDefault();
//     const results = await searchPosts("abstract");
//     setPosts(results);
//     console.log("event==================>>>>>>>>>>>",e);
//   }

//   return (
//     <div>
//       {/* <Header/> */}
//       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="carousel-banner" src={banner} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img className="carousel-banner" src={canada} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img className="carousel-banner" src={waterfall} className="d-block w-100" alt="..." />
//           </div>
//           <p className="title">An absolute collection of stunning images</p>
//           <p className="mini-title">
//             Over 4.4 million+ high quality stock images, videos and music shared
//             by our talented community.
//           </p>
//           <form className="search-bar" onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Search on SnapLibrary"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button type="submit">Search</button>
//           </form>
//         </div>



//       </div>
//       <div className="main-body">
//         <div className="category-buttons">
//           <button className="travel-btn access-btns" onClick={handleTravelSearch} type="travel">Travel</button>
//           <button className="landscape-btn access-btns" onClick={handleLandscapeSearch}>Landscape</button>
//           <button className="portrait-btn access-btns" onClick={handlePortraitSearch}>Portrait</button>
//           <button className="urban-btn access-btns" onClick={handleUrbanSearch}>Urban</button>
//           <button className="abstract-btn access-btns" onClick={handleAbstractSearch}>Abstract</button>
//         </div>



//         <div className="post-grid">
//           {posts.length > 0 &&
//     posts.map((post, index) => (
//       <Post key={index} {...post}>
//         <img
//           src={post.imageUrl} /* Assuming imageUrl prop holds image URL */
//           alt={post.imageAlt} /* Provide alternative text for accessibility */
//           className="post-grid-image"
//         />
//           </Post>
//        ))}
//          </div>




//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../assets/banner.jpg";
import canada from "../assets/wallpaperflare.com_wallpaper.jpg";
import waterfall from "../assets/waterfall.webp";
import Post from "../components/Post";
import Header from "../components/Header";

async function searchPosts(searchTerm) {
  const response = await fetch(`http://localhost:4000/search?searchTerm=${searchTerm}`);
  const data = await response.json();
  return data.data; // Extracting the 'data' field from the response
}

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const searchQuery = query.get("search");
    if (searchQuery) {
      setSearchTerm(searchQuery);
      searchPosts(searchQuery).then(setPosts);
    } else {
      fetch("http://localhost:4000/post")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }
  }, [location.search]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchPosts(searchTerm);
    setPosts(results);
  };

  const handleCategorySearch = async (category) => {
    const results = await searchPosts(category);
    setPosts(results);
  };

  return (
    <div>
      {/* <Header/> */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="carousel-banner" src={banner}  alt="..." />
          </div>
          <div className="carousel-item">
            <img className="carousel-banner" src={canada}  alt="..." />
          </div>
          <div className="carousel-item">
            <img className="carousel-banner" src={waterfall}  alt="..." />
          </div>
          <p className="title">An absolute collection of stunning images</p>
          <p className="mini-title">
            Over 4.4 million+ high quality stock images, videos and music shared
            by our talented community.
          </p>
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search on SnapLibrary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
          </form>
        </div>
      </div>
      <div className="main-body">
        <div className="category-buttons">
          <button className="travel-btn access-btns" onClick={() => handleCategorySearch("travel")}>Travel</button>
          <button className="landscape-btn access-btns" onClick={() => handleCategorySearch("landscape")}>Landscape</button>
          <button className="portrait-btn access-btns" onClick={() => handleCategorySearch("portrait")}>Portrait</button>
          <button className="urban-btn access-btns" onClick={() => handleCategorySearch("urban")}>Urban</button>
          <button className="abstract-btn access-btns" onClick={() => handleCategorySearch("abstract")}>Abstract</button>
        </div>
        <div className="post-grid">
          {posts.length > 0 &&
            posts.map((post, index) => (
              <Post key={index} {...post}>
                <img
                  src={post.imageUrl} /* Assuming imageUrl prop holds image URL */
                  alt={post.imageAlt} /* Provide alternative text for accessibility */
                  className="post-grid-image"
                />
              </Post>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
