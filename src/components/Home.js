// import React, { createRef, useState } from 'react';

// import myVid from '../Restaurant food cinematic video advertisement.mp4';
// import myImg1 from '../premium_photo-1661883237884-263e8de8869b.jpg';
// import myImg2 from '../download.jpg';
// import myImg3 from '../ai-generated-chicken-biryani-in-a-shiny-silver-bowl-spicy-curry-and-aromatic-flavors-authentic-indian-food-serving-fancy-food-in-a-restaurant-photo.jpg';
// import myImg4 from '../Hong-Kong-Chow-Mein.jpg';
// import myImg5 from '../Chicken_ChaapChaanpMarinated_chicken_legs_slow_cooked_in_Kolkata_style_original.jpg';
// import { useNavigate } from 'react-router-dom';




// const Home = () => {
//     const navigate = useNavigate();
//     const [currentIdx, setCurrentIdx] = useState(0);
//     const foodItems = [
//         {
//             id: 1,
//             name: 'Chicken Biriyani',
//             description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
//             price: '350/-',
//             image: myImg3
//         },
//         {
//             id: 2,
//             name: 'Chicken Chaap',
//             description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
//             price: '350/-',
//             image: myImg4
//         },
//         {
//             id: 3,
//             name: 'Mixed Chowmin',
//             description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
//             price: '350/-',
//             image: myImg5
//         }
//     ]
//     const nextSlide = () => {
//         setCurrentIdx((prevIdx) =>
//             prevIdx === foodItems.length - 1 ? 0 : prevIdx + 1
//         );
//     };
//     const prevSlide = () => {
//         setCurrentIdx((prevIdx) =>
//             prevIdx === 0 ? foodItems.length - 1 : prevIdx - 1
//         );
//     };
//     const goToSlide = (index) => {
//         setCurrentIdx(index);
//     };

//     const goToAbout = () => {
//         navigate('/about');
//     };

//     return (
//         <div style={{
//             // backgroundColor: 'green',
//             minHeight: '100vh',
//             padding: '0 2rem',
//             display: 'flex',
//             flexDirection: 'column',
//             width: 'auto'
//         }}>
//             <div style={{
//                 height: '60vh',
//                 // backgroundColor: 'blue',
//                 marginTop: '2rem',
//             }}>
//                 <video autoPlay loop muted style={{ height: '100%', width: '100%', objectFit: 'cover' }}><source src={myVid} type='video/mp4' />Your browser does not support this video tag</video>
//             </div>
//             <p style={{ textAlign: 'center', fontFamily: 'Georgia, serif', marginTop: '1.5rem', fontSize: '22px', color: 'red' }}><b>OMNIBITES</b> - Where Every Bite is a Journey.</p>
//             <div style={{
//                 height: '60vh',
//                 width: 'auto',
//                 // backgroundColor: 'blue',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'space-evenly',
//                 position: 'relative'
//             }}><div><img src={myImg1} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
//                 <div><img src={myImg2} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
//                 <div style={{
//                     backgroundColor: '#F5F5F5',
//                     height: '50%',
//                     width: '50%',
//                     position: 'absolute',
//                     left: '50%',
//                     top: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     padding: '1rem',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     // border:'3px solid red'
//                 }}><p style={{ color: 'red', fontFamily: 'Georgia, serif', fontSize: '1.5rem', margin: 0 }}>OMNIBITES</p>
//                     <p style={{ color: 'red', fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', marginTop: '1rem' }}>The taste you love</p>
//                     <p style={{
//                         color: '#505050',
//                         fontSize: '1rem',
//                         marginTop: 0,
//                     }}>
//                         The first outlet was started in 2007 in Kolkata, selling the famous Awadhi cuisine of Lucknow.The family grew and the second generation of the family choose to expand the family business looking at the growing demand for Awadhi/Mughlai food in the city.
//                     </p>
//                     <button style={{
//                         backgroundColor: '#8B0000',
//                         color: 'white',
//                         border: 'none',
//                         padding: '10px 20px',
//                         fontSize: '1rem',
//                         cursor: 'pointer',
//                         borderRadius: '5px'
//                     }} onClick={goToAbout}>READ MORE</button>
//                 </div>
//             </div>
//             <p style={{
//                 fontSize: '1.5rem',
//                 textAlign: 'center',
//                 color: 'red'
//             }}><b>Order Now</b>: +91-8649282653</p>
//             <div style={{
//                 height: '60vh',
//                 // backgroundColor: 'red',
//                 // marginTop: '2rem',
//                 position: 'relative',
//                 // borderRadius:30,
//             }}>
//                 <h1 style={{
//                     fontSize: '50px',
//                     textAlign: 'center',
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%,-50%)',
//                     color: 'white',
//                     margin: 0,
//                     borderTop: '3px solid white',
//                     borderBottom: '3px solid white',
//                     cursor: 'pointer'
//                 }}
//                     onClick={() => navigate('/menu')}
//                 >OUR MENU</h1>
//                 <img src={foodItems[currentIdx].image}
//                     alt={foodItems[currentIdx].name}
//                     style={{
//                         height: '100%',
//                         width: '100%',
//                         objectFit: 'cover',
//                         opacity: 1,
//                         borderRadius: 40,
//                     }}
//                 ></img>
//                 <button style={{
//                     position: 'absolute',
//                     left: '20px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     backgroundColor: 'rgba(139, 0, 0, 0.8)',
//                     color: 'white',
//                     border: 'none',
//                     width: '50px',
//                     height: '50px',
//                     borderRadius: '50%',
//                     cursor: 'pointer',
//                     zIndex: 10,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '60px',
//                     transition: 'all 0.3s ease',
//                     margin: 0,
//                     padding: 0,
//                 }}
//                     onClick={prevSlide}
//                 > <span style={{
//                     position: 'relative',
//                     bottom: '5px'
//                 }}>‹</span> </button>
//                 <button style={{
//                     position: 'absolute',
//                     right: '20px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     backgroundColor: 'rgba(139, 0, 0, 0.8)',
//                     color: 'white',
//                     border: 'none',
//                     width: '50px',
//                     height: '50px',
//                     borderRadius: '50%',
//                     cursor: 'pointer',
//                     zIndex: 10,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     transition: 'all 0.3s ease',
//                     fontSize: '60px',
//                 }}
//                     onClick={nextSlide}
//                 ><span style={{
//                     position: 'relative',
//                     bottom: '5px'
//                 }}>›</span></button>

//                 {/* {Caraousal portion} */}




//                 <div style={{
//                     display: 'flex',           // Horizontal layout
//                     justifyContent: 'center',  // Center dots
//                     marginTop: '2rem',         // Space from content above
//                     gap: '10px'               // Space between dots
//                 }}>

//                     {/* Create one dot for each food item */}
//                     {foodItems.map((_, index) => (
//                         <button
//                             key={index}  // Required by React for list items
//                             onClick={() => goToSlide(index)}  // When clicked, go to that slide
//                             style={{
//                                 width: '12px',        // Dot width
//                                 height: '12px',       // Dot height
//                                 borderRadius: '50%',  // Make it circular
//                                 border: 'none',       // Remove default border

//                                 // Color logic: red if active, gray if inactive
//                                 backgroundColor: index === currentIdx ? '#8B0000' : '#ccc',

//                                 cursor: 'pointer',    // Show hand cursor on hover
//                                 transition: 'all 0.3s ease'  // Smooth color change
//                             }}
//                         />
//                     ))}

//                 </div>

//             </div>

//             <div style={{
//                 height: '20vh',
//                 backgroundColor: '#181818',
//                 marginTop: '5rem',
//                 display: 'flex',
//                 flexDirection: 'row'
//             }}>
//                 <div style={{
//                     height: '100%',
//                     width: '50%',
//                     // backgroundColor: 'orange',
//                     textAlign: 'center',
//                     position: 'relative',
//                     margin: 0,
//                     padding: 0

//                 }}>
//                     <p style={{
//                         fontSize: '30px', position: 'absolute',
//                         left: '50%',
//                         top: '50%',
//                         transform: 'translate(-50%,-75%)',
//                         color: 'white'
//                     }}><p style={{ fontSize: '20px' }}>ORDER NOW</p><p>+91-8649282653</p></p>
//                     <span style={{
//                         fontSize: '30px',
//                         border: '2px solid white',
//                         borderRadius: '50%',
//                         padding: '5px',
//                         position: 'absolute',
//                         left: '20%',
//                         top: '40%',
//                     }}>📞</span>

//                 </div>
//                 <div style={{
//                     height: '100%',
//                     width: '50%',
//                     // backgroundColor: 'grey',
//                     textAlign: 'center',
//                     position: 'relative',
//                     margin: 0,
//                     padding: 0
//                 }}>
//                     <p style={{
//                         fontSize: '30px', position: 'absolute',
//                         left: '50%',
//                         top: '50%',
//                         transform: 'translate(-50%,-75%)',
//                         color: 'white'
//                     }}><p style={{ fontSize: '20px' }}>NEED SUPPORT</p><p>Ready To Help</p></p>
//                     <span style={{
//                         fontSize: '30px',
//                         border: '2px solid white',
//                         borderRadius: '50%',
//                         padding: '5px',
//                         position: 'absolute',
//                         left: '20%',
//                         top: '40%',
//                     }}>📧</span>
//                 </div>

//             </div>
//             <div style={{
//                 height: 'auto',
//                 // backgroundColor:'orange',    
//                 display: 'flex',
//                 flexDirection: 'column',
//                 textAlign: 'center',
//                 marginTop: '4rem'
//             }}>
//                 <p style={{ fontSize: '50px', margin: 0, fontFamily: 'monospace', color: 'red' }}>OMNIBITES</p>
//                 <p style={{ fontSize: '20px', margin: 0, fontFamily: 'unset', color: 'red' }}>The taste you love</p>
//                 <p style={{ fontSize: '11px', margin: 0, marginTop: '30px', color: 'grey' }}>©OMNIBITES Restaurant. All Rights Reserved.</p>
//             </div>

//         </div>


//     )
// };

// export default Home;





import React, { useState, useEffect } from 'react';
import myVid from '../Restaurant food cinematic video advertisement.mp4';
import myImg1 from '../premium_photo-1661883237884-263e8de8869b.jpg';
import myImg2 from '../download.jpg';
import myImg3 from '../ai-generated-chicken-biryani-in-a-shiny-silver-bowl-spicy-curry-and-aromatic-flavors-authentic-indian-food-serving-fancy-food-in-a-restaurant-photo.jpg';
import myImg4 from '../Hong-Kong-Chow-Mein.jpg';
import myImg5 from '../Chicken_ChaapChaanpMarinated_chicken_legs_slow_cooked_in_Kolkata_style_original.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsTablet(width > 768 && width <= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const foodItems = [
        {
            id: 1,
            name: 'Chicken Biriyani',
            description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
            price: '350/-',
            image: myImg3
        },
        {
            id: 2,
            name: 'Chicken Chaap',
            description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
            price: '350/-',
            image: myImg4
        },
        {
            id: 3,
            name: 'Mixed Chowmin',
            description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
            price: '350/-',
            image: myImg5
        }
    ];

    const nextSlide = () => {
        setCurrentIdx((prevIdx) =>
            prevIdx === foodItems.length - 1 ? 0 : prevIdx + 1
        );
    };

    const prevSlide = () => {
        setCurrentIdx((prevIdx) =>
            prevIdx === 0 ? foodItems.length - 1 : prevIdx - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIdx(index);
    };

    const goToAbout = () => {
        navigate('/about');
    };

    // Responsive styles
    const containerStyle = {
        minHeight: '100vh',
        padding: isMobile ? '0 1rem' : '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        width: 'auto'
    };

    const videoSectionStyle = {
        height: isMobile ? '40vh' : isTablet ? '50vh' : '60vh',
        marginTop: '2rem',
    };

    const aboutSectionStyle = {
        height: isMobile ? 'auto' : isTablet ? '50vh' : '60vh',
        width: 'auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-evenly',
        position: 'relative',
        marginTop: isMobile ? '2rem' : '0'
    };

    const aboutContentStyle = {
        backgroundColor: '#F5F5F5',
        height: isMobile ? 'auto' : '50%',
        width: isMobile ? '100%' : '50%',
        position: isMobile ? 'relative' : 'absolute',
        left: isMobile ? 'auto' : '50%',
        top: isMobile ? 'auto' : '50%',
        transform: isMobile ? 'none' : 'translate(-50%, -50%)',
        padding: isMobile ? '1.5rem' : '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: isMobile ? '1rem' : '0',
        marginBottom: isMobile ? '1rem' : '0'
    };

    const menuSectionStyle = {
        height: isMobile ? '40vh' : isTablet ? '50vh' : '60vh',
        position: 'relative',
        marginTop: isMobile ? '2rem' : '0'
    };

    const menuTitleStyle = {
        fontSize: isMobile ? '30px' : isTablet ? '40px' : '50px',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: 'white',
        margin: 0,
        borderTop: '3px solid white',
        borderBottom: '3px solid white',
        cursor: 'pointer',
        padding: isMobile ? '0.5rem' : '1rem',
        zIndex: 5
    };

    const navButtonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(139, 0, 0, 0.8)',
        color: 'white',
        border: 'none',
        width: isMobile ? '40px' : '50px',
        height: isMobile ? '40px' : '50px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isMobile ? '40px' : '60px',
        margin: 0,
        padding: 0,
    };

    const footerStyle = {
        height: isMobile ? 'auto' : '20vh',
        backgroundColor: '#181818',
        marginTop: '5rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '1rem' : '0'
    };

    const footerSectionStyle = {
        height: isMobile ? 'auto' : '100%',
        width: isMobile ? '100%' : '50%',
        textAlign: 'center',
        position: 'relative',
        margin: 0,
        padding: isMobile ? '1rem' : '0',
        marginBottom: isMobile ? '1rem' : '0'
    };

    const footerTextStyle = {
        fontSize: isMobile ? '20px' : '30px',
        position: isMobile ? 'relative' : 'absolute',
        left: isMobile ? 'auto' : '50%',
        top: isMobile ? 'auto' : '50%',
        transform: isMobile ? 'none' : 'translate(-50%,-75%)',
        color: 'white',
        margin: isMobile ? '0.5rem 0' : '0'
    };

    const footerIconStyle = {
        fontSize: isMobile ? '20px' : '30px',
        border: '2px solid white',
        borderRadius: '50%',
        padding: '5px',
        position: isMobile ? 'relative' : 'absolute',
        left: isMobile ? 'auto' : '20%',
        top: isMobile ? 'auto' : '40%',
        display: 'inline-block',
        margin: isMobile ? '0.5rem' : '0'
    };

    return (
        <div style={containerStyle}>
            {/* Video Section */}
            <div style={videoSectionStyle}>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    style={{ 
                        height: '100%', 
                        width: '100%', 
                        objectFit: 'cover' 
                    }}
                >
                    <source src={myVid} type='video/mp4' />
                    Your browser does not support this video tag
                </video>
            </div>

            {/* Brand Tagline */}
            <p style={{ 
                textAlign: 'center', 
                fontFamily: 'Georgia, serif', 
                marginTop: '1.5rem', 
                fontSize: isMobile ? '18px' : '22px', 
                color: 'red' 
            }}>
                <b>OMNIBITES</b> - Where Every Bite is a Journey.
            </p>

            {/* About Section */}
            <div style={aboutSectionStyle}>
                <div style={{ 
                    width: isMobile ? '100%' : '50%', 
                    height: isMobile ? '200px' : '100%',
                    marginBottom: isMobile ? '1rem' : '0'
                }}>
                    <img 
                        src={myImg1} 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                        }} 
                        alt="Restaurant ambiance"
                    />
                </div>
                <div style={{ 
                    width: isMobile ? '100%' : '50%', 
                    height: isMobile ? '200px' : '100%',
                    marginBottom: isMobile ? '1rem' : '0'
                }}>
                    <img 
                        src={myImg2} 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                        }} 
                        alt="Delicious food"
                    />
                </div>
                <div style={aboutContentStyle}>
                    <p style={{ 
                        color: 'red', 
                        fontFamily: 'Georgia, serif', 
                        fontSize: isMobile ? '1.2rem' : '1.5rem', 
                        margin: 0 
                    }}>
                        OMNIBITES
                    </p>
                    <p style={{ 
                        color: 'red', 
                        fontFamily: 'Arial, sans-serif', 
                        fontSize: isMobile ? '0.7rem' : '0.8rem', 
                        marginTop: '1rem' 
                    }}>
                        The taste you love
                    </p>
                    <p style={{
                        color: '#505050',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        marginTop: '0.5rem',
                        lineHeight: '1.5'
                    }}>
                        The first outlet was started in 2007 in Kolkata, selling the famous Awadhi cuisine of Lucknow. The family grew and the second generation of the family choose to expand the family business looking at the growing demand for Awadhi/Mughlai food in the city.
                    </p>
                    <button style={{
                        backgroundColor: '#8B0000',
                        color: 'white',
                        border: 'none',
                        padding: isMobile ? '8px 16px' : '10px 20px',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        marginTop: '1rem'
                    }} onClick={goToAbout}>
                        READ MORE
                    </button>
                </div>
            </div>

            {/* Order Now */}
            <p style={{
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                textAlign: 'center',
                color: 'red',
                marginTop: '2rem'
            }}>
                <b>Order Now</b>: +91-8649282653
            </p>

            {/* Menu Section */}
            <div style={menuSectionStyle}>
                <h1 
                    style={menuTitleStyle}
                    onClick={() => navigate('/menu')}
                >
                    OUR MENU
                </h1>
                <img 
                    src={foodItems[currentIdx].image}
                    alt={foodItems[currentIdx].name}
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        opacity: 1,
                        borderRadius: isMobile ? '20px' : '40px',
                    }}
                />
                <button 
                    style={{ ...navButtonStyle, left: isMobile ? '10px' : '20px' }}
                    onClick={prevSlide}
                >
                    <span style={{ position: 'relative', bottom: '5px' }}>‹</span>
                </button>
                <button 
                    style={{ ...navButtonStyle, right: isMobile ? '10px' : '20px' }}
                    onClick={nextSlide}
                >
                    <span style={{ position: 'relative', bottom: '5px' }}>›</span>
                </button>

                {/* Carousel Dots */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    gap: '10px',
                    position: 'absolute',
                    bottom: isMobile ? '10px' : '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 5
                }}>
                    {foodItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: isMobile ? '10px' : '12px',
                                height: isMobile ? '10px' : '12px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: index === currentIdx ? '#8B0000' : '#ccc',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div style={footerStyle}>
                <div style={footerSectionStyle}>
                    {isMobile && <span style={footerIconStyle}>📞</span>}
                    <p style={footerTextStyle}>
                        <span style={{ 
                            fontSize: isMobile ? '16px' : '20px', 
                            display: 'block' 
                        }}>
                            ORDER NOW
                        </span>
                        +91-8649282653
                    </p>
                    {!isMobile && <span style={footerIconStyle}>📞</span>}
                </div>
                
                <div style={footerSectionStyle}>
                    {isMobile && <span style={footerIconStyle}>📧</span>}
                    <p style={footerTextStyle}>
                        <span style={{ 
                            fontSize: isMobile ? '16px' : '20px', 
                            display: 'block' 
                        }}>
                            NEED SUPPORT
                        </span>
                        Ready To Help
                    </p>
                    {!isMobile && <span style={footerIconStyle}>📧</span>}
                </div>
            </div>

            {/* Brand Footer */}
            <div style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '4rem'
            }}>
                <p style={{ 
                    fontSize: isMobile ? '30px' : '50px', 
                    margin: 0, 
                    fontFamily: 'monospace', 
                    color: 'red' 
                }}>
                    OMNIBITES
                </p>
                <p style={{ 
                    fontSize: isMobile ? '16px' : '20px', 
                    margin: 0, 
                    fontFamily: 'unset', 
                    color: 'red' 
                }}>
                    The taste you love
                </p>
                <p style={{ 
                    fontSize: '11px', 
                    margin: 0, 
                    marginTop: '30px', 
                    color: 'grey' 
                }}>
                    ©OMNIBITES Restaurant. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Home;