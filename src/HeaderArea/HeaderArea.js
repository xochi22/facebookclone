import React from "react";
import './HeaderArea.css';
import {AiOutlineSearch, AiOutlineWallet,AiFillHome} from "react-icons/ai";
import {FaRegFlag, FaUsers, FaPlusCircle, FaFacebookMessenger, FaBell} from "react-icons/fa";
import {MdOndemandVideo} from "react-icons/md";
import MainArea from "../MainArea/MainArea";


function HeaderArea(){

    return(
         <div className="HomePage"> 
        <div className="header">

        <div className="first-header">
        <div className="logo">
         <img src="/images/logo.png" alt="logo" style={{height:"50px", padding:"1rem"}}/>
        </div>
        <div className="Search">
        <AiOutlineSearch size="20px"/>
        <input placeholder="Search Facebook" type="search"/>
        </div>
        </div>

        <div className="middle-header">
        <div className="Icon">
      <AiFillHome size="30px"color="#1877F2"/>
        </div>
        <div className="Icon">
        <FaRegFlag size="30px"/>  
        </div>    
        <div className="Icon">
        <MdOndemandVideo size="30px"/>   
        </div>    
        <div className="Icon">
        <FaUsers size="30px"/>   
        </div>    
        <div className="Icon">
        <AiOutlineWallet size="30px"/>   
        </div>        
        </div>

        <div className="third-header">
        <div className="plus">
         <FaPlusCircle size="30px"/>
        </div>
        <div className="plus">
         <FaFacebookMessenger size="30px"/>
        </div>
        <div className="plus">
         <FaBell size="30px"/>
        </div>
        <div className="pluss">
         <img src="/images/1.jpeg" alt="dp" style={{height:"40px"}}/>
        </div>
        </div>
        </div>
        <MainArea/>
        </div>
    )

}

export default HeaderArea;