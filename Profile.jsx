import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      <h2>welcome to health tracker</h2>
      <p>go to the track-health and add yours health entry of todays and check the stats</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default Profile;
