import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { getProfileConfig, rememberProfile } from '../profileConfig';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { profileName } = useParams<{ profileName: string }>();
  const profileConfig = getProfileConfig(profileName);
  const backgroundGif = location.state?.backgroundGif || profileConfig.backgroundGif;

  useEffect(() => {
    rememberProfile(profileConfig);
  }, [profileConfig]);

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profileConfig.name} />
      <ContinueWatching profile={profileConfig.name} />
    </>
  );
};

export default ProfilePage;
