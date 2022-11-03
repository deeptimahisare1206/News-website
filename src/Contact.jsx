import React, { useState } from 'react'

export default function Contact() {

  const [user, setuser] = useState({
    name: "",
    email: "",
    contact: "",
    upload: "",
    address: "",
    subject: "",
    message: ""
  })

  const postDataOnFirebase = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://data-store-61c2c-default-rtdb.firebaseio.com/DataStore.json",
      {
        method: "POST",
        header: "Content-Type:application/json",
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          contact: user.contact,
          upload: user.upload,
          address: user.address,
          subject: user.subject,
          message: user.message
        })
      }
    )

    if (res) {
      setuser({
        name: "",
        email: "",
        contact: "",
        address: "",
        subject: "",
        upload: "",
        message: ""
      })
      alert("Data Stored Successfully!!😎")
    }
  }

  const getUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value })
  }

  return (
    <>
      <div className='all'>
      <img src='./join_team.png' alt="" style={{ width: "1000px", height: "500px", position:"relative",left:"150px" }} />
        <div className='box1'>
          <h2 style={{ textAlign: "center" }}>Send Message</h2>

          <div className='form'>
            <form>
              <div className='necs'>
                <div className='namebox'>
                  <label style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                    Name*:-
                  </label>
                  <input type="name" name="name" value={user.name} onChange={getUserData} required />
                </div>
                <div className='emailbox'>
                  <label style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                    Email:-
                  </label>
                  <input type="email" name="email" value={user.email} onChange={getUserData} />
                </div>
                <div className='contactbox'>
                  <label style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                    Contact:-
                  </label >
                  <input type="email" name="contact" value={user.contact} onChange={getUserData} />
                </div>
                
                <div className='addressbox'>
                  <label style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                    Address:-
                  </label>
                  <input type="text" name="address" value={user.address} onChange={getUserData} />
                </div>
                
                <div className='uploadbox'>
                  <label style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                   Upload the CV-
                  </label>
                  <input type="file" name="upload" value={user.upload} onChange={getUserData} />
                </div>

                <div className='subjectbox'>
                  <label style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                    Subject:-
                  </label>
                  <input type="name" name="subject" value={user.subject} onChange={getUserData} />
                </div>
              </div>
              <label style={{ fontWeight: "bold", fontFamily: "sans-serif", marginLeft:"70px"}}>
                Message:-
              </label>
              <br />
              <textarea className='comment' type="text" name="message" value={user.message} onChange={getUserData}></textarea>
              <br />
              <br />
              <p>Your privacy is important to us — we will never share or sell your information.</p>
              <div className='setbtn'>
                <button className='send' type='button' onClick={postDataOnFirebase}>SUBMIT</button></div>
            </form>
          </div>


        </div>


      </div>
      <div>
        <footer style={{ marginTop: "80px" }}>
          <div className='follow'>
            <h1 style={{ textAlign: "center" }}>CONTACT US</h1>
            {/* <hr style={{ borderTop: "10px groove aqua", width: "50px" }} /> */}

            <p style={{ textAlign: "center" }}>Address: 18 B.K. Sindhi Colony, Indore <br />
              Phone: 8877399985 <br />
              Email: deeptimahisare@gmail.com
            </p>

            <div className='clickable'>
              <a href="https://www.instagram.com/"><img src={'./Insta.png'} alt="no" style={{ width: "50px", borderRadius: "10px" }} /></a>

              <a href="https://www.facebook.com/"><img src={'./Facebook.png'} alt="no" style={{ width: "50px", borderRadius: "10px" }} /></a>

              <a href="https://www.linkedin.com/"><img src={'./LINKEDIN.png'} alt="no" style={{ width: "50px", borderRadius: "10px" }} /></a>

              <a href="https://www.telegram.com/"><img src={'./telegram.png'} alt="no" style={{ width: "50px", borderRadius: "10px" }} /></a>

              <a href="https://www.github.com/"><img src={'./GitHub.png'} alt="no" style={{ width: "50px", borderRadius: "10px" }} /></a>

            </div>
          </div>
        </footer>
      </div>
    </>

  )
}
