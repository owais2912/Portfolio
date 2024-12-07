import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '@assets/images/logo1.png';
import underline from '@assets/nav_underline.svg';
import menu_open from '@assets/menu_open.svg';
import menu_close from '@assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">
      <img className="nav-logo" src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu('home');
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p
              onClick={() => {
                setMenu('about');
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt="" /> : <></>}
        </li>

        {/* <li><AnchorLink className='anchor-link' href='#services'><p onClick={() => { setMenu("services") }}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}</li> */}

        <li>
          <AnchorLink className="anchor-link" href="#work">
            <p
              onClick={() => {
                setMenu('work');
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p
              onClick={() => {
                setMenu('contact');
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <AnchorLink className="anchor-link" href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
