import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => (
  <div>
    <Link to={`/posts`}><i class="fab fa-instagram"></i></Link>
    <button onClick={logout}> <i class="far fa-user-alt"></i>
</button>

    <Link to={`/posts/user/${currentUser.id}`}> </Link>
  </div>
);


export default NavBar;
