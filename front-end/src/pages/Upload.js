// import { useState } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";



// export default function CreatePost() {

   
//     const [tags,setTags]= useState('');
//     const[desc, setDesc]= useState('');
//     const[snapdet, setSnapdet]= useState('');

//     const [files, setFiles] = useState('')

//     const [redirect, setRedirect] = useState(false);

//     const { user } = useAuthContext();


//     const userId= user._id;

//     console.log("userId",userId);
    
//     async function createNewPost(ev){


//         const data = new FormData();
//         data.set('tags', tags)
//         data.set('desc', desc)
//         data.set('snapdet', snapdet)
//         // data.set('userId',userId)

        

//         data.set('file', files[0]);

//         ev.preventDefault();
        

//         const response= await fetch("http://localhost:4000/post", {


//         method: 'POST',
//         body: data,
//         credentials: 'include',
//        });

//        if (response.ok) {

//         setRedirect(true);


//        }

//     }

//     if(redirect){
//       return  <Navigate to={'/'} />
//     }
    
//     return(
//         <form className="post-form" onSubmit={createNewPost}>
//          <input type="tags" 
//          placeholder={'Tags'} 
//          value={tags} 
//          onChange={ev => 
//           setTags(ev.target.value)}/>

//          <input type="text" 
//          placeholder={'Description'}
//          value={desc}
//          onChange={ev=> setDesc(ev.target.value)}
//          />

//          <input type="text" 
//          placeholder={'Snap details(optional)'}
//          value={snapdet}
//          onChange={ev=> setSnapdet(ev.target.value)}
//          />

//          <input type="file"  onChange={ev => setFiles(ev.target.files)}/>

//          {/* <input type="content" 
//          placeholder={'Details'}
//          value={content}
//          onChange={ev=> setContent(ev.target.value)}
//          /> */}

//          {/* <Editor value={content} onChange={setContent} /> */}

//           <button style={{marginTop:'5px'}}>Create post</button>
//         </form>
//     )
// }















// import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// var userName

// export default function CreatePost() {
//   const [tags, setTags] = useState('');
//   const [desc, setDesc] = useState('');
//   const [snapdet, setSnapdet] = useState('');
//   const [files, setFiles] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   const { user } = useAuthContext();

//   useEffect(() => {
//     if (user) {
//       console.log("user-----------------------------------------***************", user);

//        userName=  user.data.username

//     }
//   }, [user]);

//   if (!user) {
//     // User is not logged in, redirect to login page
//     return <Navigate to="/login" />;
//   }

//   async function createNewPost(ev) {
//     ev.preventDefault();

//     const data = new FormData();
//     data.set('tags', tags);
//     data.set('desc', desc);
//     data.set('snapdet', snapdet);
//     console.log("userName:------",userName);
//     data.set('userName', userName);


    
    


   
    

//     if (files[0]) {
//       data.set('file', files[0]);
//     }

//     const response = await fetch("http://localhost:4000/post", {
//       method: 'POST',
//       body: data,
//       credentials: 'include',
//     });

//     if (response.ok) {
//       setRedirect(true);
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <form className="post-form" onSubmit={createNewPost}>
//       <input
//         type="text"
//         placeholder="Tags"
//         value={tags}
//         onChange={ev => setTags(ev.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={desc}
//         onChange={ev => setDesc(ev.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Snap details (optional)"
//         value={snapdet}
//         onChange={ev => setSnapdet(ev.target.value)}
//       />
//       <input
//         type="file"
//         onChange={ev => setFiles(ev.target.files)}
//       />
//       <button style={{ marginTop: '5px' }}>Create post</button>
//     </form>
//   );
// }









import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ad1 from "../assets/ad 1.jpg";
import ad2 from "../assets/ad 2.jpg";
import ad3 from "../assets/ad 3.jpg";

export default function CreatePost() {
  const [tags, setTags] = useState('');
  const [desc, setDesc] = useState('');
  const [snapdet, setSnapdet] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { user } = useAuthContext();
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (user) {
      console.log("user-----------------------------------------***************", user);
      setAuthor(user.data.username);
    }
  }, [user]);

  if (!user) {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set('tags', tags);
    data.set('desc', desc);
    data.set('snapdet', snapdet);
    // console.log("userName:",userName);
    data.set('author', author);

    if (files[0]) {
      data.set('file', files[0]);
    }

    const response = await fetch("http://localhost:4000/post", {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (

    <div className="main-container">
    <div className="upload-form-background">
    <form className="post-form" onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Tags"
        value={tags}
        onChange={ev => setTags(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={ev => setDesc(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Snap details (optional)"
        value={snapdet}
        onChange={ev => setSnapdet(ev.target.value)}
      />
      <input
        type="file"
        onChange={ev => setFiles(ev.target.files)}
      />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
    </div>

   <div className="ad-banner">

    {/* ------------------------------------------------------ */}

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ad1}/>
    </div>
    <div class="carousel-item">
      <img src={ad2}/>
    </div>
    <div class="carousel-item">
      <img src={ad3}/>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> */}
  {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>

    





    {/* ---------------------------------------------------------- */}

   </div>
    </div>
  );
}








