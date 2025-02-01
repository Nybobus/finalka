// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Для перенаправления на страницу профиля

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // сбрасываем ошибку перед новым запросом

    // Проверка на правильность email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // Симуляция успешного входа
      const response = { ok: true, data: { token: 'fake-token' } }; // замените на реальный запрос

      if (response.ok) {
        // Сохраняем информацию о пользователе
        localStorage.setItem('token', response.data.token); 
        alert('Logged in successfully!');
        navigate('/profile'); // Перенаправляем на страницу профиля
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
