import React, {useEffect, useState} from 'react'
import {db} from '../firebase/firebase'
import {query, getDocs, collection, deleteDoc, updateDoc  } from "firebase/firestore";
import Post from '../Post/Post';



const AllPosts = () => {
  const [docs, setDocs] = useState([]);
  const q = query(collection(db, "posts"));
  useEffect(async () => {
    const querySnapshot = await getDocs(q);
    setDocs(querySnapshot.docs.map(doc => ( {id: doc.id, post: doc.data() } )));
  }, [q])

    return (
      <div className="posts">
        {docs.length > 0 ? <Post /> : <div className="posts"> <p>No posts yet , Start adding some 📝 ...</p> </div> }
      </div>
      
    )}

export default AllPosts


