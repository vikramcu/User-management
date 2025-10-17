import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: '', fullName: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  const API_BASE = 'http://localhost:8080/api';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`${API_BASE}/users/${editingUser.id}`, newUser);
      } else {
        await axios.post(`${API_BASE}/users`, newUser);
      }
      setNewUser({ username: '', password: '', role: '', fullName: '', email: '' });
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUser({ ...user });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${API_BASE}/users/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🚀 User Management System</h1>
        <p>Complete CRUD Operations with React & Spring Boot</p>
      </header>

      <div className="main-content">
        <div className="form-section">
          <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Role:</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                required
              >
                <option value="">Select Role</option>
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
                <option value="MANAGER">Manager</option>
              </select>
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                value={newUser.fullName}
                onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary">
              {editingUser ? 'Update User' : 'Add User'}
            </button>
            {editingUser && (
              <button
                type="button"
                onClick={() => {
                  setEditingUser(null);
                  setNewUser({ username: '', password: '', role: '', fullName: '', email: '' });
                }}
                className="btn-secondary"
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        <div className="users-section">
          <h2>Users List ({users.length})</h2>
          {users.length === 0 ? (
            <div className="no-users">No users found. Add your first user!</div>
          ) : (
            <div className="users-grid">
              {users.map(user => (
                <div key={user.id} className="user-card">
                  <div className="user-info">
                    <h3>{user.username}</h3>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Full Name:</strong> {user.fullName || 'N/A'}</p>
                    <p><strong>Email:</strong> {user.email || 'N/A'}</p>
                  </div>
                  <div className="user-actions">
                    <button onClick={() => handleEdit(user)} className="btn-edit">Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="btn-delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>Built with ❤️ using React + Spring Boot + H2 Database</p>
      </footer>
    </div>
  );
}

export default App;