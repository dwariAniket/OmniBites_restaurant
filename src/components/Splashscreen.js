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
    <div className="splash-container">
      <div className="splash-content">
        🍽️ Omnibites
      </div>

      <style jsx>{`
        .splash-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #8B0000;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .splash-content {
          font-size: 5rem;
          font-weight: bold;
          color: #FFD700;
          animation: fadeScale 4s ease-in-out;
          text-align: center;
        }

        /* Large tablets and small laptops */
        @media (max-width: 1200px) {
          .splash-content {
            font-size: 4rem;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .splash-content {
            font-size: 3rem;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .splash-content {
            font-size: 2.5rem;
          }
        }

        /* Small mobile phones */
        @media (max-width: 320px) {
          .splash-content {
            font-size: 2rem;
          }
        }

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
      `}</style>
    </div>
  );
};

export default SplashScreen;