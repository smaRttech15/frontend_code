import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [universityId, setUniversityId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (universityId && password) {
      navigate('/dashboard'); // Simulate success login
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-indigo-800">EduSkill</h1>

        <input
          type="text"
          placeholder="University ID"
          value={universityId}
          onChange={(e) => setUniversityId(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
