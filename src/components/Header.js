import React from 'react';
import logo from '../components/img/dplogo.jpg';
import './Header.css';
function Header() {
  return (
    <div>
      <div className='main_header'>
        <img src={logo} alt='' />
        <h1>GoogleNotes</h1>
      </div>
    </div>
  );
}

export default Header;
