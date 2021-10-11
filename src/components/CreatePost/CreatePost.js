import React, { useContext, useState } from "react";
import { UserContext } from "../Context/userContext";
import { db, storage } from "../firebase/firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


import "./CreatePost.css"
const CreatePost = () => {


  const [user, setUser] = useContext(UserContext).user;
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [myprogress, setMyprogress] = useState(null);


  const generateId = (length) => {
    let allCarc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let myId = '';
    for (var i = 0; i < length ; i++){
        myId += allCarc[Math.floor(Math.random() * allCarc.length)] 
    }
    return myId
  }


  const handleUpload = () => {
    if(image){
      const imageName = generateId(10);
      const imagesRef = ref(storage, `images/${imageName}.jpg`);
      const metadata = {
        contentType: 'image/jpeg',
      };
      const uploadTask = uploadBytesResumable(imagesRef,image,metadata);

      

    uploadTask.on('state_complete',(snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setMyprogress(progress)
      console.log('Upload is ' + progress + '% done');
      if(progress == 100) {
        setPost("")
        setMyprogress(0)
        var myImageTag = document.getElementById('Image-Preview')
        myImageTag.style.display = 'none'
      }
    },(error) => {
      console.log(error)
    },() => {
      getDownloadURL(imagesRef).then(async imageURL => {
        try {
          await setDoc(doc(db, "posts", imageName), {
            post: post,
            profileUrl: user.photoURL,
            username: user.displayName,
            photoUrl: imageURL,
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
    })
    }
    
  }


  const handleImage = (e) => {
    if(e.target.files[0]){

      setImage(e.target.files[0])

      var urlObject = URL.createObjectURL(e.target.files[0])

      var myImageTag = document.getElementById('Image-Preview')
      myImageTag.src = urlObject
      myImageTag.style.display = 'block'
      myImageTag.style.width = '100px'
      myImageTag.style.height = '100px'
      myImageTag.style.padding = '10px'
    }
  }


    return (
        <div className="create-post">
          <p><img src={user.photoURL} alt="" className='create-post-user-image' /></p>
            <textarea
            placeholder='Whats On Your Mind?'
            value={post}
            onChange={e => setPost(e.target.value)}>
            </textarea>
            <div className="image">
              <img alt="img" id='Image-Preview' />
            </div>
            <div className="actions">
            <label required htmlFor="addImage" style={{cursor:"pointer"}}><i className="fas fa-camera"></i></label>
            <input type="file" id='addImage' accept='image/*' style={{display: "none"}} onChange={handleImage}/>
            <button onClick={handleUpload} style={{color: post || image || myprogress > 1  ? 'black' : '#999'}}>{`Post ${ myprogress > 1 ? myprogress + '%' : ""}`}</button>
            </div>
        </div>
    )
}

export default CreatePost;
