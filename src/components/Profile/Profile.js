import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  return (
    <div>profile-{user.username}</div>
  );
}

export default Profile;
