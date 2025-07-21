// src/pages/HealthStats.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const HealthStats = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/health', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEntries(res.data.reverse()); // oldest to newest
      } catch (err) {
        toast.error('Failed to load health stats');
      }
    };
    fetchData();
  }, []);

  const extractChartData = (field) => ({
    labels: entries.map(e => new Date(e.date).toLocaleDateString()),
    datasets: [
      {
        label: field,
        data: entries.map(e => e[field]),
        fill: false,
        borderColor: '#007bff',
        tension: 0.2,
      }
    ]
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Health Statistics</h2>
      {entries.length > 0 ? (
        <>
          <h3>Weight</h3>
          <Line data={extractChartData('weight')} />

          <h3>Blood Pressure</h3>
          <Line data={extractChartData('bloodPressure')} />

          <h3>Blood Sugar</h3>
          <Line data={extractChartData('bloodSugar')} />
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>No data available yet.</p>
      )}
    </div>
  );
};

export default HealthStats;
