import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { ProfileConfig, profiles, rememberProfile } from '../profileConfig';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profile: ProfileConfig) => {
    rememberProfile(profile);
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.displayName}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
