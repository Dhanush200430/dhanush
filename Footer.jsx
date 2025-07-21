import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Health Tracker. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: 'auto',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
  },
};

export default Footer;
