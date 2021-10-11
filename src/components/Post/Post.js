import React,{useState, useEffect, useContext} from 'react'
import { UserContext } from '../Context/userContext';
import { doc, query, getDocs, collection, deleteDoc, updateDoc  } from "firebase/firestore";
import SkeletonWrapper from '../Skeleton/SkeletonWrapper'
import Comment from '../AddComment/Comment'
import {db} from '../firebase/firebase'

import "./Post.css"

const Post = () => {
    const [user, setUser] = useContext(UserContext).user;
    const [docs, setDocs] = useState([]);
    const [comment, setComment] = useState(null)
    const [commentsArray, setCommentsArray] = useState([]);
    const q = query(collection(db, "posts"));

    const handleDeletePost = async (id) => {
        await deleteDoc(doc(db, "posts", id));
      }
      
      const handleAddComment = async (id) => {
        commentsArray.push({
          username: user.displayName,
          comment: comment,
        })
        const commentsRef = doc(db, "posts", id);
        await updateDoc(commentsRef, {
          comments: commentsArray
        },{ merge: true });
        setComment('')
  
      }

    useEffect( () => {
        setTimeout(async () => {
          const querySnapshot = await getDocs(q);
          setDocs(querySnapshot.docs.map(doc => ( {id: doc.id, post: doc.data() } )));
        },2000)
      }, [q])
      
    return (
        <div>
          { docs.length == 0 && <> <SkeletonWrapper /> <SkeletonWrapper /> </>}
            { docs.length > 1 && docs.map( ({id, post}) => (
            <div className="post" key={id}>
            <div className="post-header">
                <img src={post.profileUrl} alt="profileUrl" />
                <h3 className='username'>{post.username}</h3>
                { user && user.displayName === post.username && <button className='delete-post' onClick={() => handleDeletePost(id)}>Delete</button>}
            </div>
            <div className="post-image">
                <img src={post.photoUrl} alt={post.username} />
            </div>
            
            <div className="post-caption">
                <span>{post.username}</span>
                <p>{post.post}</p>
            </div>
            { post.comments && post.comments.map(comment => (
                <div className="post-comments">
                <p className="username-comment">{comment.username}</p>
                <p className="comment">{comment.comment}</p>
                </div>
            ))}
            {user && <Comment comment={comment} setComment={setComment} handleAddComment={handleAddComment} id={id} />}
            </div>
        ) ) }
        </div>
    )
}

export default Post
