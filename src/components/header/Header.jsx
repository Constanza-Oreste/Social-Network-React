import React from 'react'
import "./Header.css"
import logo from '../../img/logo.svg'
import userImg from '../../img/user.png'
function Header({handleLogout}) {
    return (
        <div className="header">
           <div className="headerLeft">
               <img src={logo} alt=""></img>
           </div>
           <div className="headerCenter">
               <h1>Booking</h1>
           </div>
           <div className="headerRight">
           <img src={userImg} alt="" className="avatarUser"></img>
           <h4>Name</h4>
            <button onClick={handleLogout}>Logout</button>
            </div> 
        </div>
    )
}
export default Header;