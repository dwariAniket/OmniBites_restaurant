import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

const navbarStyles = {
    navbar: {
      background: '#8B0000',
      color: 'white',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2rem'
    },
    navLogo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      fontFamily: 'Georgia, serif'
    },
    navMenu: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: 0,
      padding: 0
    },
    navItem: {
      margin: 0
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s',
      fontSize: '0.9rem'
    },
    navLinkHover: {
      color: '#FFD700'
    }}
  return (
     <nav style={navbarStyles.navbar}>
      <div style={navbarStyles.navContainer}>
        <Link to="/" style={navbarStyles.navLogo}>
          OMNIBITES
        </Link>
        <ul style={navbarStyles.navMenu}> 
          <li style={navbarStyles.navItem}>
            <Link 
              to="/" 
              style={navbarStyles.navLink}
              onMouseOver={(e) => {e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
              onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
            >
              HOME
            </Link>
          </li>
          <li style={navbarStyles.navItem}>
            <Link 
              to="/about" 
              style={navbarStyles.navLink}
              onMouseOver={(e) =>{ e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
              onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
            >
              ABOUT US
            </Link>
          </li>
          <li style={navbarStyles.navItem}>
            <Link 
              to="/menu" 
              style={navbarStyles.navLink}
              onMouseOver={(e) => {e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
              onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
            >
              OUR MENU
            </Link>
          </li>
          <li style={navbarStyles.navItem}>
            <Link 
              to="/career" 
              style={navbarStyles.navLink}
              onMouseOver={(e) => { e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
              onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
            >
              CAREERS
            </Link>
          </li>
          <li style={navbarStyles.navItem}>
            <Link 
              to="/contact" 
              style={navbarStyles.navLink}
              onMouseOver={(e) =>{ e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
              onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
