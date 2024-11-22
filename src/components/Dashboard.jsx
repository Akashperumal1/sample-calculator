import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    history.push('/login'); // Redirect to login page
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard.</p>

      {/* Image added to the Dashboard page */}
      <img
        src="./assets/pngtree-d-illustrations-of-icons.jpg"  // Path to the image in the public folder
        alt="Dashboard"
        style={{ width: '80%', maxWidth: '600px', margin: '20px 0' }}
      />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
