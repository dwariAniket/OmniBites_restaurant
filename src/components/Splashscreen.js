// components/SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#8B0000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        fontSize: '5rem', // Default for large screens
        fontWeight: 'bold',
        color: '#FFD700',
        animation: 'fadeScale 4s ease-in-out',
        textAlign: 'center',
        // Responsive font sizes
        '@media (max-width: 1200px)': {
          fontSize: '4rem'
        },
        '@media (max-width: 768px)': {
          fontSize: '3rem'
        },
        '@media (max-width: 480px)': {
          fontSize: '2.5rem'
        },
        '@media (max-width: 320px)': {
          fontSize: '2rem'
        }
      }}>
        🍽️ Omnibites
      </div>

      <style>
        {`
          @keyframes fadeScale {
            0% { 
              opacity: 0;
              transform: scale(0.8);
            }
            50% { 
              opacity: 1;
              transform: scale(1.1);
            }
            100% { 
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;