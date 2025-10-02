// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

// const navbarStyles = {
//     navbar: {
//       background: '#8B0000',
//       color: 'white',
//       padding: '1rem 0',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//     },
//     navContainer: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '0 2rem'
//     },
//     navLogo: {
//       fontSize: '2rem',
//       fontWeight: 'bold',
//       color: 'white',
//       textDecoration: 'none',
//       fontFamily: 'Georgia, serif'
//     },
//     navMenu: {
//       display: 'flex',
//       listStyle: 'none',
//       gap: '2rem',
//       margin: 0,
//       padding: 0
//     },
//     navItem: {
//       margin: 0
//     },
//     navLink: {
//       color: 'white',
//       textDecoration: 'none',
//       fontWeight: '500',
//       transition: 'color 0.3s',
//       fontSize: '0.9rem'
//     },
//     navLinkHover: {
//       color: '#FFD700'
//     }}
//   return (
//      <nav style={navbarStyles.navbar}>
//       <div style={navbarStyles.navContainer}>
//         <Link to="/" style={navbarStyles.navLogo}>
//           OMNIBITES
//         </Link>
//         <ul style={navbarStyles.navMenu}> 
//           <li style={navbarStyles.navItem}>
//             <Link 
//               to="/" 
//               style={navbarStyles.navLink}
//               onMouseOver={(e) => {e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
//               onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
//             >
//               HOME
//             </Link>
//           </li>
//           <li style={navbarStyles.navItem}>
//             <Link 
//               to="/about" 
//               style={navbarStyles.navLink}
//               onMouseOver={(e) =>{ e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
//               onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
//             >
//               ABOUT US
//             </Link>
//           </li>
//           <li style={navbarStyles.navItem}>
//             <Link 
//               to="/menu" 
//               style={navbarStyles.navLink}
//               onMouseOver={(e) => {e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
//               onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
//             >
//               OUR MENU
//             </Link>
//           </li>
//           <li style={navbarStyles.navItem}>
//             <Link 
//               to="/career" 
//               style={navbarStyles.navLink}
//               onMouseOver={(e) => { e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
//               onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
//             >
//               CAREERS
//             </Link>
//           </li>
//           <li style={navbarStyles.navItem}>
//             <Link 
//               to="/contact" 
//               style={navbarStyles.navLink}
//               onMouseOver={(e) =>{ e.target.style.color = '#FFD700';e.target.style.borderBottom='2px solid #FFD700'}}
//               onMouseOut={(e) => {e.target.style.color = 'white';e.target.style.borderBottom='none'}}
//             >
//               CONTACT US
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>

//   );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
      padding: '0 2rem',
      ...(isMobile && { padding: '0 1rem' })
    },
    navLogo: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      fontFamily: 'Georgia, serif',
      ...(isMobile && window.innerWidth <= 480 && { fontSize: '1.25rem' })
    },
    navMenu: {
      display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
      listStyle: 'none',
      gap: isMobile ? '0' : '2rem',
      margin: 0,
      padding: 0,
      ...(isMobile && {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        backgroundColor: '#8B0000',
        flexDirection: 'column',
        padding: '1rem 0',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      })
    },
    navItem: {
      margin: 0,
      ...(isMobile && {
        width: '100%',
        textAlign: 'center'
      })
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '1rem' : '0.9rem',
      borderBottom: location.pathname === path ? '2px solid #FFD700' : '2px solid transparent',
      paddingBottom: '5px',
      display: 'block',
      ...(isMobile && {
        padding: '1rem 2rem',
        borderBottom: 'none',
        backgroundColor: location.pathname === path ? '#A52A2A' : 'transparent'
      }),
      ...(location.pathname === path && {
        color: '#FFD700'
      })
    },
    navLinkHover: {
      color: '#FFD700',
      borderBottom: '2px solid #FFD700'
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem'
    },
    overlay: {
      display: isMobile && isMenuOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 999
    }
  };

  // Handle hover effects
  const handleMouseOver = (e, path) => {
    if (!isMobile && location.pathname !== path) {
      e.target.style.color = '#FFD700';
      e.target.style.borderBottom = '2px solid #FFD700';
    }
  };

  const handleMouseOut = (e, path) => {
    if (!isMobile && location.pathname !== path) {
      e.target.style.color = 'white';
      e.target.style.borderBottom = '2px solid transparent';
    }
  };

  // Handle link click
  const handleLinkClick = (path) => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/menu', label: 'OUR MENU' },
    { path: '/career', label: 'CAREERS' },
    { path: '/contact', label: 'CONTACT US' }
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMobile && isMenuOpen && (
        <div 
          style={navbarStyles.overlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav style={navbarStyles.navbar}>
        <div style={navbarStyles.navContainer}>
          <Link to="/" style={navbarStyles.navLogo}>
            OMNIBITES
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            style={navbarStyles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Menu */}
          <ul style={navbarStyles.navMenu}>
            {navItems.map((item) => (
              <li key={item.path} style={navbarStyles.navItem}>
                <Link 
                  to={item.path}
                  style={{
                    ...navbarStyles.navLink,
                    color: location.pathname === item.path ? '#FFD700' : 'white',
                    borderBottom: location.pathname === item.path ? '2px solid #FFD700' : '2px solid transparent',
                    backgroundColor: isMobile && location.pathname === item.path ? '#A52A2A' : 'transparent'
                  }}
                  onMouseOver={(e) => handleMouseOver(e, item.path)}
                  onMouseOut={(e) => handleMouseOut(e, item.path)}
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Add some CSS for smooth transitions */}
      <style>
        {`
          .nav-link-transition {
            transition: all 0.3s ease;
          }
          
          @media (max-width: 480px) {
            .nav-logo-small {
              font-size: 1.25rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;