import React, { useState } from 'react';

const SignUP = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают!');
      return;
    }

    // Проверка на правильность email
    if (!email || !email.includes('@')) {
      setError('Пожалуйста, введите корректный email.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Проверка на наличие пользователя с таким email в db.json
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      if (users.find((user) => user.email === email)) {
        setError('Пользователь с таким email уже существует.');
        return;
      }

      // Регистрация нового пользователя
      const newUser = { email, password };
      
      const registerResponse = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (registerResponse.ok) {
        alert('Успешная регистрация!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError('Произошла ошибка при регистрации. Пожалуйста, попробуйте снова.');
      }
    } catch (error) {
      setError('Произошла ошибка при обработке данных. Пожалуйста, попробуйте снова.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container__signup">
          <div className="signup__wrapper">
            <h2>Регистрация</h2>
            <form onSubmit={handleSignUp}>
              <div className="form__group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите ваш email"
                />
              </div>
              <div className="form__group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите ваш пароль"
                />
              </div>
              <div className="form__group">
                <label htmlFor="confirm-password">Подтверждение пароля</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Подтвердите пароль"
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" disabled={loading}>
                {loading ? 'Загрузка...' : 'Зарегистрироваться'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUP;
