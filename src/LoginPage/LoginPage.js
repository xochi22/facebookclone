import React from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    return(

    <div className='Login'>
    <div className='facebook'>
    <div className='facebooktext'>
         facebook
    </div>
    <div className='title'>
     Facebook helps you connect and share<br></br>with the people in your life.
    </div>
    </div>
    <div className='logincontainer'>
    <div className='logindetail'>
      <input type='email' placeholder='Email address or Phone number'/> 
      <br></br>
      <input type='password' placeholder='password'/>
      <br></br>
      <button className='btn'>
       <Link to='/HeaderArea'>Login</Link>
      </button>

      <div className='forget'>
    <a href='forget'>Forgotten password?</a>
    <br></br>
    </div>
    </div> 
  
    <div className='create'>
        <br></br>
    <buttton className='btns'>Create New Account</buttton>
    </div>
    <p></p>
    <br/>
    <div className='page'>
    <a href='createpage'>Create a Page</a> for a celebrity, brand or business.

    </div>
    </div>
    </div>
    )    
}

export default LoginPage;