import React from 'react';
import image1 from './1.jpeg';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Health Tracker</h1>
      <p style={styles.subheading}>Track your health data and stay fit, every day!</p>

      <img
        src={image1}
        alt="Health Tracker"
        style={styles.bannerImage}
      />

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Use Health Tracker?</h2>
        <ul style={styles.list}>
          <li>📊 Monitor weight, blood pressure, and blood sugar.</li>
          <li>📅 Keep a daily log of your vital stats.</li>
          <li>📈 Visualize progress with dynamic charts.</li>
          <li>🔒 Secure data with user-based login and privacy.</li>
        </ul>
      </div>

      <div style={styles.imageGrid}>
        <img
          src={image2}
          alt="Fitness Tracking"
          style={styles.gridImage}
        />
        <img
          src={image3}
          alt="Health Data"
          style={styles.gridImage}
        />
        <img
          src={image4}  
          alt="Healthy Lifestyle"
          style={styles.gridImage}
        />
      </div>

      <footer style={styles.footer}>
        <p>© 2025 Health Tracker. Stay Healthy, Stay Happy.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  bannerImage: {
    width: '60%',
    height: 'auto',
    marginBottom: '2rem',
    borderRadius: '8px',
  },
  section: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    margin: '2rem auto',
    maxWidth: '700px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#27ae60',
  },
  list: {
    textAlign: 'left',
    fontSize: '1rem',
    lineHeight: '1.6',
    paddingLeft: '1.5rem',
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
  },
  gridImage: {
    width: '250px',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
  },
  footer: {
    marginTop: '3rem',
    padding: '1rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: '0.9rem',
  },
};

export default Home;
