import React from 'react';
import Profile from '../components/Profiles'; // Correct path to import Profile
import Navibar from '../components/Navigationbar';

const ProfilePage = () => {
  return (
    <div>
      <Navibar/>
      <div style={{paddingTop:'90px',position:'relative'}}>
      <Profile /> {/* Render Profile component */}
      </div>
    </div>
  );
};

export default ProfilePage;