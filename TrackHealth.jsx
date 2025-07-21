import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TrackHealth = () => {
  const [form, setForm] = useState({
    weight: '',
    bloodPressure: '',
    bloodSugar: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You must be logged in');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/health',
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Health data added successfully!');
      setForm({ weight: '', bloodPressure: '', bloodSugar: '', date: '' });
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
      toast.error(err.response?.data?.error || 'Failed to add health data');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Track Health</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="weight"
          placeholder="Weight (kg)"
          value={form.weight}
          onChange={handleChange}
          required
        />
        <input
          name="bloodPressure"
          placeholder="Blood Pressure"
          value={form.bloodPressure}
          onChange={handleChange}
          required
        />
        <input
          name="bloodSugar"
          placeholder="Blood Sugar"
          value={form.bloodSugar}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px',
    margin: 'auto'
  }
};

export default TrackHealth;
