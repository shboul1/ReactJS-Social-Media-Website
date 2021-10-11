import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../Context/userContext'
import verified from '../images/verified.png'
import { query, getDocs, collection} from "firebase/firestore";
import {db} from '../firebase/firebase'
import './UserDetails.css'

const UserDetails = () => {
    const[user, setUser] = useContext(UserContext).user;
    const [docs, setDocs] = useState([]);
    const q = query(collection(db, "posts"));
    let postCounter = 0;
    useEffect(async () => {
        const querySnapshot = await getDocs(q);
        setDocs(querySnapshot.docs.map(doc => ( {id: doc.id, post: doc.data() } )));
      }, [q])

      user && docs && docs.filter(({id,post}) => {
        if(post.username === user.displayName) {
            return postCounter += 1
        }
    }
    )
    return (
        <div className="profile">
            {user && (
                <>
                <img className='profile-img' src={user.photoURL} alt="" />
                <div className="name">
                <h1>{user.displayName}</h1>
                <img className='verification' src={verified} alt="" />
                </div>
                <p>{user.email}</p>
                <div className='num-of-posts'>
                       <span>Number of Posts</span> <p className='counter'>{postCounter}</p>
                </div>
                </>
                )}
                </div>
    )
}

export default UserDetails
