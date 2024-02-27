import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  const retourBack = () => {
    window.history.back()
  }
  return (
    <>
      <section className="profile_section">
        <div className="content">
          <div className="head">
            <h3>Profile</h3>
            <button className='btn2'><Link to={'/EditProfile'}>Edit Profile</Link></button>
          </div>
          <div className="info">
            <ul>
              <li><span>Nom</span><p>elhansaly</p></li>
              <li><span>prenom</span><p>mohammed</p></li>
              <li><span>Email</span><p>el hansalymohammed@gmail.com</p></li>
              <li><span>Password</span><p>*******</p></li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default Profile