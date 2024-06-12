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
  );
}








