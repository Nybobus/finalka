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
      // Запрос на сервер для регистрации
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Успешная регистрация
        alert('Успешная регистрация!');
      } else {
        // Ошибка при регистрации
        setError(data.message || 'Произошла ошибка. Пожалуйста, попробуйте снова.');
      }
    } catch (error) {
      // Обработка ошибок сети
      setError('Не удалось подключиться к серверу. Пожалуйста, попробуйте позже.');
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
