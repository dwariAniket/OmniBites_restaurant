import React from 'react';
import { useState } from 'react';
import myImg1 from '../ai-generated-chicken-biryani-in-a-shiny-silver-bowl-spicy-curry-and-aromatic-flavors-authentic-indian-food-serving-fancy-food-in-a-restaurant-photo.jpg';
import myImg2 from '../Hong-Kong-Chow-Mein.jpg';
import myImg3 from '../Chicken_ChaapChaanpMarinated_chicken_legs_slow_cooked_in_Kolkata_style_original.jpg';
import myImg4 from '../mutton-biryani.jpg';
import myImg5 from '../ai-generated-chicken-biryani-in-a-shiny-silver-bowl-spicy-curry-and-aromatic-flavors-authentic-indian-food-serving-fancy-food-in-a-restaurant-photo.jpg';
import myImg6 from '../maxresdefault.jpg';
import myImg7 from '../chicken-kathi-roll-chicken-frankie.jpg';
import myImg8 from '../chicken-reshmi-kabab-1.jpg';
import myImg9 from '../1357_1_1 (1).jpg';
import myImg10 from '../images (4).jpg';
import myImg11 from '../7f54PkubiUS0YZ79.jpeg';
import myImg12 from '../shutterstock_2205168763.jpg';
import myImg13 from '../sddefault.jpg';
import myImg14 from '../images (5).jpg';



function Menu() {
  const foodItem = [
    myImg1, myImg2, myImg3
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const nextSlide = (() => {
    setCurrentIdx((prevIdx) =>
      prevIdx === foodItem.length - 1 ? 0 : prevIdx + 1
    )
  });
  const prevSlide = (() => {
    setCurrentIdx((prevIdx) =>
      prevIdx === 0 ? foodItem.length - 1 : prevIdx - 1
    )
  });
  const goToSlide = (index) => {
    setCurrentIdx(index)
  };
  const menuItems = [
    'Recommended', 'What New', 'Omnibites Classics', 'Starters', 'Main Course', 'Desserts', 'Rolls'
  ];
  const menuData = {
    recommendedMenu: [
      {
        name: 'Mutton Biriyani',
        description: 'A royal dish that needs no introduction from omnibites',
        image: myImg4
      },
      {
        name: 'Chicken Biriyani',
        description: 'Delicious savory rice dish loaded with spicy chicken',
        image: myImg5
      },
      {
        name: 'Firni',
        description: 'Aromatic mouth watering dessert from the house of omnibites',
        image: myImg6
      },
      {
        name: 'Chicken Kati Roll',
        description: 'Refined flavor paratha roll stuffed with stir-fired chicken cubes',
        image: myImg7
      },
      {
        name: 'Chicken Reshmi Kebab',
        description: 'Prepared with utmost care and love from the kitchen of omnibites',
        image: myImg8
      }
    ],
    whatNewMenu: [
      {
        name: 'Mutton Dum Handi Biriyani',
        description: 'Packed with flavors from the whole spices, the rice and mutton is cooked together in clay pot',
        image: myImg9
      },
      {
        name: 'Chocolate Bomb',
        description: 'Emploding chocolate bomb of hearts from the house of omnibites',
        image: myImg10
      },
      {
        name: 'Chicken Dum Handi Biriyani',
        description: 'Handi Biryani Chicken is a lip smacking Indian class, that absolutely needs no introduction',
        image: myImg11
      },
    ],
    omnibitesClassic: [
      {
        name: 'Mutton Biriyani',
        description: 'A royal dish that needs no introduction from omnibites',
        image: myImg4
      },
      {
        name: 'omnibites Special Mutton Curry',
        description: 'omnibites mutton curry is a dish of slow cooked lamb in a spicy gravy.',
        image: myImg12
      },
      {
        name: 'Mutton Pasinda Kebab',
        description: 'Prepared with utmost care and love from the kitchen of omnibites',
        image: myImg13
      },
      {
        name: 'Chicken Chap',
        description: 'Chicken Chap is essentially slow cooked chicken with awadhi spices.',
        image: myImg14
      },
      {
        name: 'Firni',
        description: 'Aromatic mouth watering dessert from the house of omnibites',
        image: myImg6
      }
    ],
    ourSpecialities: ['classic', 'classic chicken', 'classic mutton'],
    starters: {
      chicken: [
        'Chicken Tandoori (half/full)', 'Chicken Tangri Kebab (half/full)', 'Chicken Cheese Kebab', 'Chicken Acheri Kebab', 'Chicken Seekh Kebab', 'Chicken Tekka Kebab', 'Chicken Kastori Kebab', 'Chicken Boti Kebab'],
      mutton: [
        ' Mutton Bar Beque Chops', ' Mutton Barrah Kebab', ' Mutton Pasinda Kebab', ' Mutton Galawti Kebab', ' Mutton Reshmi Kebab', ' Mutton Boti Kebab', ' Mutton Kakori Kebab'],
      fish: [
        'Tandoori Fish Tikka', ' Fish Seekh Kebab', ' Fish Irani Kebab', ' Fish Badshi Kebab'],
      veg: [
        'Paneer Tikka Kebab', 'Veg Sikh Kebab', 'Hara Vara Kebab', 'Aloo Chutneywala'],

    },
    mainCourse: {
      mutton: ['Mutton Biriyani', 'Mutton Special Biriyani', 'Mutton Awadhi Biriyani', 'Mutton Hyderabadi Biriyani'],
      chicken: ['Chicken Biriyani', 'Chicken Special Biriyani', 'Chicken Awadhi Biriyani'],
      veg: ['Veg Dum Biriyani', 'Shahi Pulao', 'Peas Pulao', 'Zeera Rice'],
      nonVegCurries: ['Special Mutton Curry', 'Mutton Razela', 'Chicken Razela'],
      nonVegGravies: ['Mutton Tikia', 'Keema Hara Dhaniya', 'Mutton Chaap', 'Mutton Kassa', 'Mutton Do Peyaza'],
      vegGravies: ['Paneer Butter Masala', 'Palak Paneer', 'Malai Kofta', 'Paneer Pasinda', 'Lahori Aloo', 'Dal Makhani'],
      accomapniments: ['Onlion Salad', 'Green Salad', 'Mixed Raita'],
    },
    desserts: ['Firni', 'Mango Firni', 'Gazar Ka Halwa', 'Saffron Milk Cake'],
    rolls: {
      egg: ['Egg Roll', 'Double Egg Roll'],
      chicken: ['Chicken Kati Roll', 'Double Chicken roll', 'Double Chicken Double Egg Roll', 'Chicken Cheese Roll'],
      mutton: ['Mutton Kati Roll', 'Mutton Egg Roll', 'Double Mutton Kati Roll', 'Double Mutton Egg Roll', 'Mutton Pasinda Roll'],
      veg: ['Paneer Roll', 'Double Paneer Roll']
    },
  };
  const [activeMenu, setActiveMenu] = useState(null);
  const menuDataKey = {
    'Recommended': 'recommendedMenu',
    'What New': 'whatNewMenu',
    'omnibites Classics': 'omnibitesClassic',
    'Our Specialities': 'ourSpecialities',
    'Starters': 'starters',
    'Main Course': 'mainCourse',
    'Desserts': 'desserts',
    'Rolls': 'rolls'
  };
  const currentData = activeMenu ? menuData[menuDataKey[activeMenu]] : null;
  return (
    <div style={{
      // backgroundColor:'green',
      minHeight: '100vh',
      widows: 'auto',
      marginTop: '2rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    }}>
      <div style={{
        height: '80vh',
        width: 'auto',
        position: 'relative',
        // backgroundColor: 'blue',
        // overflow:'hidden',
      }}>
        <img src={foodItem[currentIdx]}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 30,
          }}
        ></img>
        <button style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(139, 0, 0, 0.8)',
          color: 'white',
          border: 'none',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          transition: 'all 0.3s ease',
          margin: 0,
          padding: 0,
          transition: 'all 0.3s ease',
        }}
          onClick={prevSlide}
        >
          <span style={{
            position: 'relative',
            bottom: '5px'
          }}>‹</span>
        </button>
        <button style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(139, 0, 0, 0.8)',
          color: 'white',
          border: 'none',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          transition: 'all 0.3s ease',
          margin: 0,
          padding: 0,
          transition: 'all 0.3s ease',
        }}
          onClick={nextSlide}
        >
          <span style={{
            position: 'relative',
            bottom: '5px'
          }}>›</span>
        </button>

      </div>

      <div style={{
        // backgroundColor:'brown',
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '10px'
      }}>
        {foodItem.map((_, index) =>
          <button style={{
            height: '20px',
            width: '20px',
            borderRadius: 50,
            backgroundColor: index === currentIdx ? '#8B0000' : '#ccc',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: '1px solid transparent',
          }}
            onClick={() => goToSlide(index)}
            key={index}
          ></button>
        )}
      </div>

      {/* {chart menu} */}

      <div
        style={{
          // backgroundColor: 'green',
          height: 'auto',
          width: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '2rem',
        }}>
        {menuItems.map((item, index) =>
          <div
            key={index}
            style={{
              borderBottom: '2px solid transparent',
              display: 'inline-block',
              color: 'red',
              cursor: 'pointer',
              fontSize: '18px'
            }}
            onMouseEnter={(e) => e.target.style.borderBottom = '2px solid red'}
            onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
            onClick={() => setActiveMenu(activeMenu === item ? null : item)}
          >
            {item}
          </div>
        )}
      </div>





      {activeMenu && currentData && (
        <div style={{
          // backgroundColor: 'green',
          height: 'auto',
          width: 'auto',
          padding: '2rem',
          marginTop: '2rem'
        }}>
          <h2>{activeMenu}</h2>
          {Array.isArray(currentData) ? (
            currentData.length > 0 && typeof currentData[0] === 'object' && currentData[0].image ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
              }}
              >
                {currentData.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      padding: '1rem',
                      borderRadius: '10px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <img src={item.image}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '5px'
                      }}
                    ></img>
                    <h3 style={{
                      margin: '1rem 0 0.5rem 0'
                    }}
                    >{item.name}</h3>
                    <p style={{ color: '#666' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
              }}>
                {currentData.map((item, index) => (
                  <div key={index} style={{
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    fontSize: '18px',
                    // fontWeight: 'bold'
                  }}>{item}</div>
                )
                )}
              </div>)) : typeof currentData === 'object' ? (
                <div>
                  {Object.keys(currentData).map((category) => (
                    <div key={category}
                      style={{ marginBottom: '2rem' }}
                    >
                      <h3 style={{
                        textTransform: 'capitalize',
                        color: '#8B0000',
                        borderBottom: '2px solid #8B0000',
                        paddingBottom: '0.5rem',
                        marginBottom: '1rem'
                      }}>{category}</h3>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        {currentData[category].map((item, index) => (
                          <div key={index}
                            style={{
                              backgroundColor: 'white',
                              padding: '1rem',
                              borderRadius: '5px',
                              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                              minWidth: '200px'
                            }}
                          >{item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
            <div>Unknown Data Type</div>
          )}
        </div>
      )}

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
        <p style={{ fontSize: '50px', margin: 0, fontFamily: 'monospace',color:'red' }}>OMNIBITES</p>
        <p style={{ fontSize: '20px', margin: 0, fontFamily: 'unset',color:'red' }}>The taste you love</p>
        <p style={{ fontSize: '11px', margin: 0, marginTop: '30px', color: 'grey' }}>©omnibites Restaurant. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Menu



