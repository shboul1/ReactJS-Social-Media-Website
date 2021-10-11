import React, {useContext, useState} from 'react'
import Signinbtn from '../SignIn-Btn/Signinbtn'
import {UserContext} from '../Context/userContext'
import {Link, useHistory} from 'react-router-dom'

import "./Navbar.css"
const Navbar = () => {

    const [user, setUser] = useContext(UserContext).user;
    const [dropdown, setDropdown] = useState(false)
    let history = useHistory();

    const handleClick = () => {
        setDropdown(!dropdown)
    }
    const reloadPage = () => {
        history.push("/");
        window.location.reload()

    }
    return (
       <nav id='navbar'>
           <Link to='/'>
           <h3>React Social <i className="fab fa-react"></i></h3>
           </Link>
           {user ? (
            <div className='nav-user'>
                <img src={user.photoURL} alt="" />
                <div className="drop-down" onClick={handleClick}>
                <i className="fas fa-sort-down"></i>
                <div className={dropdown ? "drop-down-menu active" : "drop-down-menu"}>
                    <Link to='/profile'>
                    <div className="info">
                    <img src={user.photoURL} alt="" />
                    <p>{user.displayName}</p>
                    </div>
                    </Link>
                    <hr />
                    <p onClick={reloadPage}>Logout</p>
                   
                </div>
                </div>
           </div>
           ) : <Signinbtn/>}
       </nav>
    )
}

export default Navbar
