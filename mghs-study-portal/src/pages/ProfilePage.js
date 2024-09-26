import React from 'react';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: 'Juan Dela Cruz',
    batch: 2023,
    email: 'juandcruz@example.com',
    phone: '123-456-7890',
    team: 'Team MGHS',
  };

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Batch:</strong> {user.batch}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Team:</strong> {user.team}</p>
      {/* You can add an edit profile feature here */}
    </div>
  );
};

export default ProfilePage;
