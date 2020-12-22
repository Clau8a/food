import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

const SideBar = (props) => {
  const SignOut = () => {
    localStorage.clear();
  };

  return <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <li className="sidebar-logo tac">
        <img src={logo} alt="logo" />
      </li>
      <li>
        <NavLink to='/schedule' title="Schedule"><i className="fas  fa-users" /> Schedule</NavLink>
      </li>
      <li className="sign-out">
        <NavLink to='/login' onClick={SignOut} title="signOut "><i className="fas  fa-power-off" /> cerrar sesión</NavLink>
      </li>
    </ul>
  </div >

};

export default SideBar;
