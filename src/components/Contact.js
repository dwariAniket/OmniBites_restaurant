// import React from 'react'
// import { useState } from 'react'

// export default function Contact() {

//   const sendMessage = [
//     'Name', 'E-Mail', 'Contact Number', 'Message'
//   ];

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     message: ''
//   });

//   const [submitStatus, setSubmitStatus] = useState('');

//   // Handle form input changes
//   const handleInputChange = (index, value) => {
//     const fieldName = ['name', 'email', 'contact', 'message'][index];
//     setFormData(prev => ({
//       ...prev,
//       [fieldName]: value
//     }));
//   };

//   // Submit form to Formspree
//   const handleSubmit = async () => {
//     // Check if all fields are filled
//     if (!formData.name || !formData.email || !formData.contact || !formData.message) {
//       alert('Please fill all the fields');
//       return;
//     }

//     setSubmitStatus('submitting');

//     try {
//       // Send data to Formspree
//       const response = await fetch('https://formspree.io/f/mpwyrplo', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           contact: formData.contact,
//           message: formData.message,
//           subject: 'New Contact Form Submission'
//         })
//       });

//       if (response.ok) {
//         setSubmitStatus('submitted');
//         alert('Message sent successfully! We will contact you soon.');

//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           contact: '',
//           message: ''
//         });

//       } else {
//         throw new Error('Form submission failed');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//       alert('Submission failed. Please try again.');
//       console.error('Submission error:', error);
//     }
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       width: 'auto',
//       marginTop: '2rem',
//     }}>

//       <h2 style={{
//         fontSize: '30px',
//         margin: 0,
//         textAlign: 'center',
//         borderBottom: '2px solid red',
//         display: 'inline-block',
//         position: 'absolute',
//         left: '25vw',
//         transform: 'translateX(-50%)',
//         color: 'red',
//         // marginBottom:'2rem'        
//       }}>SEND A MESSAGE</h2>

//       <div style={{
//         display: 'flex',
//         flexDirection: 'row',
//         gap: '2rem',
//         padding: '2rem',
//         paddingTop: '3rem',
//         marginTop: '4rem'
//       }}>
//         {/* Contact Form */}
//         <div style={{
//           height: 'auto',
//           width: '50%',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '1.5rem',
//           alignItems: 'center'
//         }}>
//           {sendMessage.map((item, index) =>
//             index === 3 ? (
//               <textarea
//                 style={{
//                   width: '100%',
//                   backgroundColor: '#F8F8FF',
//                   height: '8rem',
//                   border: '1px solid #D3D3D3',
//                   borderRadius: 5,
//                   padding: '1rem',
//                   fontSize: '16px',
//                   resize: 'vertical'
//                 }}
//                 key={index}
//                 placeholder={item}
//                 value={formData.message}
//                 onChange={(e) => handleInputChange(index, e.target.value)}
//               />
//             ) : (
//               <input
//                 style={{
//                   width: '100%',
//                   backgroundColor: '#F8F8FF',
//                   height: '2rem',
//                   border: '1px solid #D3D3D3',
//                   borderRadius: 5,
//                   padding: '0 1rem',
//                   fontSize: '16px'
//                 }}
//                 key={index}
//                 placeholder={item}
//                 value={formData[['name', 'email', 'contact', 'message'][index]]}
//                 onChange={(e) => handleInputChange(index, e.target.value)}
//               />
//             )
//           )}

//           {/* Submit Button */}
//           <button
//             onClick={handleSubmit}
//             disabled={submitStatus === 'submitting'}
//             style={{
//               width: '100%',
//               padding: '12px 24px',
//               backgroundColor: submitStatus === 'submitting' ? '#6c757d' : '#8B0000',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               fontSize: '18px',
//               fontWeight: 'bold',
//               cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer',
//               transition: 'all 0.3s ease',
//               marginTop: '1rem'
//             }}
//           >
//             {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
//           </button>

//           {/* Status Messages */}
//           {submitStatus === 'submitted' && (
//             <p style={{
//               color: '#28a745',
//               textAlign: 'center',
//               marginTop: '1rem',
//               fontSize: '16px',
//               fontWeight: 'bold'
//             }}>
//               ✅ Message sent successfully!
//             </p>
//           )}
//           {submitStatus === 'error' && (
//             <p style={{
//               color: '#dc3545',
//               textAlign: 'center',
//               marginTop: '1rem',
//               fontSize: '16px',
//               fontWeight: 'bold'
//             }}>
//               ❌ Failed to send message. Please try again.
//             </p>
//           )}
//         </div>

//         {/* Google Map */}
//         <div style={{
//           width: '50%',
//           height: '400px',
//           borderRadius: '10px',
//           overflow: 'hidden',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
//         }}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4745380484337!2d88.35624517426996!3d22.561348433384588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027701d4d15539%3A0x8c677be84d63dca4!2sSN%20Banerjee%20Road%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1759385404323!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Restaurant Location"
//           ></iframe>
//         </div>
//       </div>

//       {/* Restaurant Info */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: '3rem',
//         padding: '2rem',
//         backgroundColor: '#f8f9fa',
//         borderRadius: '10px'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <h3 style={{ color: '#8B0000', marginBottom: '0.5rem' }}>📍 Address</h3>
//           <p>16A, SN Banerjee Road, New Market Area, Dharmatala, Taltala<br />Kolkata, West Bengal 700087</p>
//         </div>
//         <div style={{ textAlign: 'center' }}>
//           <h3 style={{ color: '#8B0000', marginBottom: '0.5rem' }}>⏰ Opening Hours</h3>
//           <p>Monday - Sunday<br />11:00 AM - 11:00 PM</p>
//         </div>
//         <div style={{ textAlign: 'center' }}>
//           <h3 style={{ color: '#8B0000', marginBottom: '0.5rem' }}>📞 Contact</h3>
//           <p>+91-8649282653<br />info@omnibites.com</p>
//         </div>
//       </div>
//     </div>
//   )
// }





import React from 'react'
import { useState, useEffect } from 'react'

export default function Contact() {
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

  const sendMessage = [
    'Name', 'E-Mail', 'Contact Number', 'Message'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (index, value) => {
    const fieldName = ['name', 'email', 'contact', 'message'][index];
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Submit form to Formspree
  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      alert('Please fill all the fields');
      return;
    }

    setSubmitStatus('submitting');

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/mpwyrplo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
          subject: 'New Contact Form Submission'
        })
      });

      if (response.ok) {
        setSubmitStatus('submitted');
        alert('Message sent successfully! We will contact you soon.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          contact: '',
          message: ''
        });

      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('Submission failed. Please try again.');
      console.error('Submission error:', error);
    }
  };

  // Responsive styles
  const containerStyle = {
    minHeight: '100vh',
    width: 'auto',
    marginTop: '2rem',
    padding: isMobile ? '0 1rem' : '0 2rem',
  };

  const titleStyle = {
    fontSize: isMobile ? '24px' : isTablet ? '28px' : '30px',
    margin: 0,
    textAlign: 'center',
    borderBottom: '2px solid red',
    display: 'inline-block',
    position: isMobile ? 'relative' : 'absolute',
    left: isMobile ? 'auto' : '25vw',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    color: 'red',
    marginBottom: isMobile ? '2rem' : '0'
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1rem' : '2rem',
    padding: isMobile ? '1rem' : '2rem',
    paddingTop: isMobile ? '1rem' : '3rem',
    marginTop: isMobile ? '1rem' : '4rem'
  };

  const formContainerStyle = {
    height: 'auto',
    width: isMobile ? '100%' : '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center'
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: '#F8F8FF',
    height: isMobile ? '2.5rem' : '2rem',
    border: '1px solid #D3D3D3',
    borderRadius: 5,
    padding: isMobile ? '0.75rem' : '0 1rem',
    fontSize: isMobile ? '14px' : '16px'
  };

  const textareaStyle = {
    width: '100%',
    backgroundColor: '#F8F8FF',
    height: isMobile ? '6rem' : '8rem',
    border: '1px solid #D3D3D3',
    borderRadius: 5,
    padding: isMobile ? '0.75rem' : '1rem',
    fontSize: isMobile ? '14px' : '16px',
    resize: 'vertical'
  };

  const mapContainerStyle = {
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '300px' : '400px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginTop: isMobile ? '1rem' : '0'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: isMobile ? '10px 20px' : '12px 24px',
    backgroundColor: submitStatus === 'submitting' ? '#6c757d' : '#8B0000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: 'bold',
    cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem'
  };

  const infoContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-around',
    marginTop: '3rem',
    padding: isMobile ? '1rem' : '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    gap: isMobile ? '1.5rem' : '0'
  };

  const infoItemStyle = {
    textAlign: 'center',
    flex: isMobile ? 'none' : 1
  };

  const infoTitleStyle = {
    color: '#8B0000', 
    marginBottom: '0.5rem',
    fontSize: isMobile ? '16px' : '18px'
  };

  const infoTextStyle = {
    fontSize: isMobile ? '14px' : '16px',
    margin: '0.25rem 0'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>SEND A MESSAGE</h2>

      <div style={mainContentStyle}>
        {/* Contact Form */}
        <div style={formContainerStyle}>
          {sendMessage.map((item, index) =>
            index === 3 ? (
              <textarea
                style={textareaStyle}
                key={index}
                placeholder={item}
                value={formData.message}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ) : (
              <input
                style={inputStyle}
                key={index}
                placeholder={item}
                value={formData[['name', 'email', 'contact', 'message'][index]]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            )
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={submitStatus === 'submitting'}
            style={submitButtonStyle}
          >
            {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'submitted' && (
            <p style={{
              color: '#28a745',
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 'bold'
            }}>
              ✅ Message sent successfully!
            </p>
          )}
          {submitStatus === 'error' && (
            <p style={{
              color: '#dc3545',
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 'bold'
            }}>
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </div>

        {/* Google Map */}
        <div style={mapContainerStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4745380484337!2d88.35624517426996!3d22.561348433384588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027701d4d15539%3A0x8c677be84d63dca4!2sSN%20Banerjee%20Road%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1759385404323!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          ></iframe>
        </div>
      </div>

      {/* Restaurant Info */}
      <div style={infoContainerStyle}>
        <div style={infoItemStyle}>
          <h3 style={infoTitleStyle}>📍 Address</h3>
          <p style={infoTextStyle}>16A, SN Banerjee Road,</p>
          <p style={infoTextStyle}>New Market Area, Dharmatala, Taltala</p>
          <p style={infoTextStyle}>Kolkata, West Bengal 700087</p>
        </div>
        <div style={infoItemStyle}>
          <h3 style={infoTitleStyle}>⏰ Opening Hours</h3>
          <p style={infoTextStyle}>Monday - Sunday</p>
          <p style={infoTextStyle}>11:00 AM - 11:00 PM</p>
        </div>
        <div style={infoItemStyle}>
          <h3 style={infoTitleStyle}>📞 Contact</h3>
          <p style={infoTextStyle}>+91-8649282653</p>
          <p style={infoTextStyle}>info@omnibites.com</p>
        </div>
      </div>
    </div>
  )
}



