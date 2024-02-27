import React from 'react'
import './EditProfile.css'

const EditProfile = () => {
  return (
    <section className='editProfile_section'>
      <div className="content">
        <div className="head">
          <h3>Edit Profile</h3>
        </div>
        <div className="info">
          <ul>
            <li><span>Nom</span><input type="text" /></li>
            <li><span>prenom</span><input type="text" /></li>
            <li><span>Email</span><input type="text" /></li>
            <li><span>Password</span><input type="text" /></li>
          </ul>
          <button className='btn2'>Edit Profile</button>
        </div>

      </div>
    </section >
  )
}

export default EditProfile