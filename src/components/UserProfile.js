import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Import the CSS file

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => {
        setUser(response.data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="outer-container">
      <div className="container-wrapper">
        <div className="inner-container">
          {user && (
            <div className="profile-container">
              <div className="profile-pic-container">
                <img className="profile-pic" src={user.picture.large} alt={user.name.first} />
              </div>
              <div className="user-details">
                <h2 className="user-name">{`${user.name.first} ${user.name.last}`}</h2>
                {/* <p className="user-gender">Gender: {user.gender}</p> */}
                <p className="user-phone">Phone: {user.phone}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
