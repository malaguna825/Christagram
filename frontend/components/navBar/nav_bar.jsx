import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout }) => (
  <div className='Nav-Bar-Container'>
    <div className='all-icons'>
        <div className='left-icons'>
          <Link to={`/posts`} className='instagram-icon'><i class="fab fa-instagram"></i></Link>
          <p class="vl"></p>
          <Link to={`/posts`} className='small-logo'>Christagram</Link>
        </div>
        <p className='search-bar'>decoration search bar</p>
        <div className='right-icons'>
          <p className='compass-icon'><i class="far fa-compass" ></i></p>
          <button onClick={logout} className='heart-icon'><i class="far fa-heart"></i></button>
          <Link to={`/posts/user/${currentUser.id}`} className='user-icon'> <i class="far fa-user"></i></Link>
        </div>
      </div>
  </div>
);


export default NavBar;
