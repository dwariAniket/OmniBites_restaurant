import React from 'react';
import { useState, useEffect } from 'react';
import myImg1 from '../1357_1_1.jpg';
import myImg2 from '../mango-shake-and-mango.jpg';
import myImg3 from '../15-8g-kulfi-ice-cream-for-desert-used-in-home-hotel-restaurant-use-589.jpg';
import myImg4 from '../images (1).jpg';
import myImg5 from '../Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg';
import myImg6 from '../Best-Kadai-Paneer-Recipe.jpg';
import myImg7 from '../images (2).jpg';
import myImg8 from '../images (3).jpg';
export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const imageItems = [
    myImg5,
    myImg6,
    myImg7,
    myImg8
  ];
  const imageItems1 = [
    myImg2, myImg3, myImg4
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) =>
        prevIdx === imageItems.length - 1 ? 0 : prevIdx + 1
      );
    }, 3500)
    return () => clearInterval(interval);
  }, [imageItems.length]);
  return (
    <div style={{
      minHeight: '100vh',
      width: 'auto',
      // backgroundColor:'green',
    }}>
      <div style={{
        height: 'auto',
        widows: 'auto',
        // backgroundColor:'red',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h2 style={{
          fontSize: '40px',
          margin: 0,
          borderBottom: '2px solid transparent',
          transition: 'border-bottom 0.3s ease',
          display: 'inline-block',
          color: 'red'
        }}
          onMouseEnter={(e) => e.target.style.borderBottom = '2px solid red'}
          onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
        >SINCE 2007</h2>
        <p style={{
          fontSize: '20px',
          marginLeft: '20rem',
          marginRight: '20rem',
          marginTop: '1rem',
        }}>The first outlet was started in 2007 in Kolkata, selling the famous Awadhi cuisine of Lucknow. The family grew and the second generation of the family choose to expand the family business looking at the growing demand for Awadhi/Mughlai food in the city.</p>
        <img style={{
          height: 'auto',
          width: 'auto',
          marginTop: '1rem',
          borderRadius: '50%',
          border: '1px solid transparent',
        }} src={myImg1}></img>
      </div>

      {/* {story section} */}

      <div style={{
        height: '80vh',
        width: 'auto',
        // backgroundColor: 'grey',
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>

        <div
          style={{
            height: '100%',
            width: '40%',
          }}>
          <img src={imageItems[currentIdx]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          ></img>
        </div>
        <div style={{
          height: '100%',
          width: '40%',
          textAlign: 'center',
          border: '8px solid black'
        }}>
          <h3 style={{ fontSize: '25px', margin: 0, marginTop: '2rem', borderBottom: '2px solid transparent', display: 'inline-block', transition: 'border-bottom 0.3s ease', color: 'red', }}
            onMouseEnter={(e) => e.target.style.borderBottom = '2px solid red'}
            onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
          >OUR STORY</h3>
          <p style={{
            fontSize: '18px', margin: 0, marginLeft: '4rem',
            marginRight: '4rem', marginTop: '3rem'
          }}>The first outlet was brought into existence in 2007 in Zakaria Street serving the famous Awadhi cuisine of Lucknow. Today, OMNIBITES, is being run by its second generation. OMNIBITES, being a legacy of 18 years, has been profoundly emphasizing on its taste and aromatic chemistry of the spices that blend in perfectly. Besides this, OMNIBITES has its butchery to make sure that only fresh and hand-picked meat is being consumed by our clientele.OMNIBITES believes in societal welfare and philanthropic orientations. We are an active supporter of Tiljala SHED and also contribute to many old age homes and orphanages. Also, the paintings displayed in the Rajarhat and Behala outlet are done by the children from NGOs."We also have bagged many food-awards and recognition for delectable and persistent cuisine."</p>
        </div>
      </div>

      {/* {Mission section} */}

      <div style={{
        height: '50vh',
        width: 'auto',
        // backgroundColor: 'green',
        marginTop: '2rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      }}><div style={{
        height: '100%',
        width: '30%',
        // backgroundColor: 'orange',
      }}>
          <h3 style={{ fontSize: '25px', margin: 0, marginTop: '2rem', borderBottom: '2 px solid transparent', display: 'inline-block', color: 'red' }}
            onMouseEnter={(e) => e.target.style.borderBottom = '2px solid red'}
            onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
          >MISSION & VISION</h3>
          <p style={{ fontSize: '15px', margin: 0, marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem' }}>The mission is to take Calcutta biryani and it’s experience everywhere. We are one of the oldest Mughlai/Awadhi food joints of Kolkata. So, it will be a pleasure for us to serve the authentic flavours from OMNIBITES’s kitchen And it’s dinning experience to every possible place.
            Our vision has always been and will be to provide a better dining experience at an affordable price. We always put our full effort to give our customers high-quality dining experience in terms of ambience, food, and service.</p>
        </div>
        <div style={{
          height: '100%',
          width: '60%',
          // backgroundColor: 'blue', 
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'relative',
        }}>
          {imageItems1.map((image, index) =>
            <img key={index}
              src={image}
              // alt='hii'
              style={{
                objectFit: 'cover',
                height: '85%',
                width: '30%',
                position: (index === 0 || index === 1 || index === 2) ? 'absolute' : 'static',
                top: (index === 0 || index === 1 || index === 2) ? '7.5%' : 'auto',
                left: index === 1 ? '50%' : 'auto',
                transform: index === 1 ? 'translate(-50%)' : 'auto',
                right: index === 2 ? 0 : 'auto',
                borderRadius: (index === 0 || index === 1 || index === 2) ? 10 : 'auto'
              }}
            ></img>
          )}
        </div>


      </div>

      <div style={{
        height: '20vh',
        backgroundColor: '#181818',
        marginTop: '5rem',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <div style={{
          height: '100%',
          width: '50%',
          // backgroundColor: 'orange',
          textAlign: 'center',
          position: 'relative',
          margin: 0,
          padding: 0

        }}>
          <p style={{
            fontSize: '30px', position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-75%)',
            color: 'white'
          }}><p style={{ fontSize: '20px' }}>ORDER NOW</p><p>+91-8649282653</p></p>
          <span style={{
            fontSize: '30px',
            border: '2px solid white',
            borderRadius: '50%',
            padding: '5px',
            position: 'absolute',
            left: '20%',
            top: '40%',
          }}>📞</span>

        </div>
        <div style={{
          height: '100%',
          width: '50%',
          // backgroundColor: 'grey',
          textAlign: 'center',
          position: 'relative',
          margin: 0,
          padding: 0
        }}>
          <p style={{
            fontSize: '30px', position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-75%)',
            color: 'white'
          }}><p style={{ fontSize: '20px' }}>NEED SUPPORT</p><p>Ready To Help</p></p>
          <span style={{
            fontSize: '30px',
            border: '2px solid white',
            borderRadius: '50%',
            padding: '5px',
            position: 'absolute',
            left: '20%',
            top: '40%',
          }}>📧</span>
        </div>

      </div>
      <div style={{
        height: 'auto',
        // backgroundColor:'orange',    
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <p style={{ fontSize: '50px', margin: 0, fontFamily: 'monospace', color: 'red' }}>OMNIBITES</p>
        <p style={{ fontSize: '20px', margin: 0, fontFamily: 'unset', color: 'red' }}>The taste you love</p>
        <p style={{ fontSize: '11px', margin: 0, marginTop: '30px', color: 'grey' }}>©OMNIBITES Restaurant. All Rights Reserved.</p>
      </div>
    </div>
  )
}
