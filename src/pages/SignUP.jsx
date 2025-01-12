const handleSignUp = async (e) => {
  e.preventDefault();

  // Проверка на совпадение паролей
  if (password !== confirmPassword) {
    setError('Passwords do not match!');
    return;
  }

  // Проверка на правильность email
  if (!email || !email.includes('@')) {
    setError('Please enter a valid email address.');
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
      alert('Successfully registered!');
    } else {
      // Ошибка при регистрации
      setError(data.message || 'An error occurred. Please try again.');
    }
  } catch (error) {
    // Обработка ошибок сети
    setError('Failed to connect to the server. Please try again later.');
  } finally {
    setLoading(false);
  }
};
