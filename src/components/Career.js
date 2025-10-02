import React from 'react';
import { useState } from 'react';
import myImg1 from '../banner-six (1).jpg'

export default function Career() {

  const objective = [
    {
      name: 'CAREER',
      description: 'At Omnibites, expert professionals and creative minds are shaping the future by carrying forward our 90-year-old legacy. The Omnibites team believes in upholding tradition while being in touch with the contemporary.'
    },
    {
      name: 'WHAT WE ARE LOOKING FOR',
      description: 'The Omnibites team is fit for individuals who are proud of and committed to their work. Omnibites is looking for dynamic individuals, who could provide their outlooks and insights to take Omnibites to the greatest heights.'
    }
  ];


  const career_scope = [
    'Admin Department', 'Operations Department', 'HR Department', 'Finance Department'
    , 'Service Department', 'Kitchen Department', 'Customer Service Department'];


  const apply = ['First Name', 'Last Name', 'Email', 'Contact Number', 'Experience','CV-URL'];

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    experience: '',
    cvurl:''
  });

  const [uploadStatus, setUploadStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (index, value) => {
    const fieldName = ['firstName', 'lastName', 'email', 'contact', 'experience','cvurl'][index];
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Submit form to Formspree
  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.contact || !formData.experience ||!formData.cvurl) {
      alert('Please fill all the fields');
      return;
    }

    setUploadStatus('uploading');

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/xwprblpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          contact: formData.contact,
          experience: formData.experience,
          cvurl: formData.cvurl,
          message: `New Career Application Received:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nContact: ${formData.contact}\nExperience: ${formData.experience}\nCV URL: ${formData.cvurl}`
        })
      });

      if (response.ok) {
        setUploadStatus('uploaded');
        alert('Application submitted successfully! We will contact you soon.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contact: '',
          experience: '',
          cvurl: ''
        });
        
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setUploadStatus('error');
      alert('Submission failed. Please try again.');
      console.error('Submission error:', error);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      experience: '',
      cvurl: ''
    });
    setUploadStatus('');
  };

  return (
    <div style={{
      // backgroundColor: 'green',
      minHeight: '100vh',
      width: 'auto',
      marginTop: '2rem',
      // position: 'relative'
    }}>
      <h2 style={{
        fontSize: '50px',
        textAlign: 'center',
        color: 'red',
        borderTop: '2px solid red',
        borderBottom: '2px solid red',
        display: 'inline-block',
        margin: 0,
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }}>JOIN THE TEAM</h2>


      <div style={{
        // backgroundColor: 'blue',
        height: 'auto',
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4rem',
      }}>
        {objective.map((item, index) =>
          <div style={{
            
          }}>
            <h3 style={{
              fontSize: '20px',
              // backgroundColor: 'blue',
              margin: 0,
              textAlign: 'center',
              color:'red',
              borderBottom:'2px solid transparent',
             display:'inline-block',
             marginLeft:'50%',
             transform:'translateX(-50%)'
            }} onMouseEnter={(e)=>e.target.style.borderBottom='2px solid red'}
            onMouseLeave = {(e)=>e.target.style.borderBottom='2px solid transparent'}
              key={index}
            >{item.name}</h3>
            <p style={{
              fontSize: '15px',
              margin: 0,
              marginTop: '1rem',
              marginLeft: '2rem',
              marginRight: '2rem'
            }}
              key={index}
            >{item.description}</p>
          </div>
        )}
      </div>


      <div style={{
        // backgroundColor: 'blue',
        height: 'auto',
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4rem',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          // backgroundColor:'grey',
          height: '100%',
          width: '50%'
        }}>
          <h2 style={{ fontSize: '20px', margin: 0, textAlign: 'center', color: 'red',display:'inline-block',borderBottom:'2px solid transparent', marginLeft:'50%',transform:'translateX(-50%)' }}
          onMouseEnter={(e)=>e.target.style.borderBottom='2px solid red'}
          onMouseLeave={(e)=>e.target.style.borderBottom='2px solid transparent'}
          >WORK ENVIRONMENT</h2>
          <p style={{ margin: 0, marginTop: '1rem', marginLeft: '4rem', marginRight: '4rem', textAlign: 'center' }}>Omnibites provides its employees with a dynamic and friendly work environment that helps them grow as professionals and establishes their entity as an epitome of success. Accordingly, our work atmosphere incorporates the concept of a "second home".</p>
        </div>

        <img src={myImg1}
          style={{
            height: '100%',
            width: '50%',
            objectFit: 'cover',
          }}
        ></img>
      </div>


      <h2 style={{
        fontSize: '30px',
        borderBottom: '2px solid red',
        color: 'red',
        display: 'inline-block',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop:'4rem'
      }}>SCOPE FOR CAREERS</h2>


      <div style={{
        // backgroundColor: 'grey',
        height: 'auto',
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '2rem',
        paddingLeft: '2rem'
      }}>
        {career_scope.map((item, index) =>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: 'auto',
            width: 'auto',
            border: '1px solid #F8F8FF',
            backgroundColor: '#F8F8FF',
            borderRadius: 10,
            padding: '2rem',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
          }} key={index}>{item}</div>
        )}
      </div>


      <h2 style={{
        textAlign: 'center',
        color: 'red',
        borderBottom: '2px solid red',
        display: 'inline-block',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        fontSize: '30px',
        marginTop:'4rem'        
      }}>TRAINING AND PROGRAMS</h2>
      <p style={{ margin: '1rem 2rem', textAlign: 'center' }}>We take all measures to update our team's knowledge and skills both professionally and personally. We have collaborated with India's leading hospitality organizations, to arrange employee workshops, programs and seminars to keep our team synchronized and updated with changes in the business environment. Moreover, our seminars and training programs also deal with the interpersonal development of our employees that directly nurtures innovation and a healthy work environment.</p>


      <div style={{
        height: 'auto',
        width: 'auto',
        // backgroundColor: 'grey',
      }}>
        <h2 style={{
          fontSize: '30px',
          borderBottom: '2px solid red',
          display: 'inline-block',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          color: 'red',
          marginTop: '2rem'
        }}>APPLY NOW</h2>
        <div style={{
          height: 'auto',
          width: 'auto',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // backgroundColor:'orange',
          gap: '2rem',
          justifyContent: 'center',
          margin: '2rem 0'
        }}>
          {apply.map((item, index) =>
            <input 
              style={{
                height: '3rem',
                width: '30rem',
                borderRadius: 5,
                border: '1px solid #F5F5F5',
                backgroundColor: '#F5F5F5',
                padding: '0 1rem',
                fontSize: '16px'
              }} 
              key={index}
              placeholder={item}
              value={formData[['firstName', 'lastName', 'email', 'contact', 'experience','cvurl'][index]]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          )}
        </div>

        {/* Submit Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0'
        }}>
          <button
            onClick={handleSubmit}
            disabled={uploadStatus === 'uploading'}
            style={{
              padding: '15px 40px',
              backgroundColor: uploadStatus === 'uploading' ? '#6c757d' : '#8B0000',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: uploadStatus === 'uploading' ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '200px'
            }}
          >
            {uploadStatus === 'uploading' ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>

        {/* Status Messages */}
        {uploadStatus === 'uploaded' && (
          <p style={{ 
            color: '#28a745', 
            textAlign: 'center', 
            marginTop: '1rem',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            ✅ Application submitted successfully!
          </p>
        )}
        {uploadStatus === 'error' && (
          <p style={{ 
            color: '#dc3545', 
            textAlign: 'center', 
            marginTop: '1rem',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            ❌ Submission failed. Please try again.
          </p>
        )}
      </div>
    </div>
  )
}