import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Header.module.css';

const Header = (props) => {
    return (
      <header className={c.header}>
        <img alt='fon' src='https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80'/>
          <div className={c.loginBlock}>
            {props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
          </div>
      </header>
    )
}

export default Header;