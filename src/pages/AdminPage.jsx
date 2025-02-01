import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const [admins, setAdmins] = useState([
    { username: 'admin', password: 'admin' },
    { username: 'superadmin', password: 'superadmin' },
  ]);

  const [currencies, setCurrencies] = useState([
    { id: 1, name: 'Bitcoin', rate: '1,230,449,234.92UZS' },
    { id: 2, name: 'Toncoin', rate: '70,021.98UZS' },
    { id: 3, name: 'Litecoin', rate: '1,356,413.16UZS' },
    { id: 4, name: 'Tether', rate: '13,009.36UZS' },
  ]);

  const [newCurrency, setNewCurrency] = useState({ name: '', rate: '' });

  const handleAddCurrency = () => {
    setCurrencies([
      ...currencies,
      { id: Date.now(), name: newCurrency.name, rate: newCurrency.rate },
    ]);
    setNewCurrency({ name: '', rate: '' });
  };

  const handleDeleteCurrency = (id) => {
    setCurrencies(currencies.filter((currency) => currency.id !== id));
  };

  const handleEditCurrency = (id, newRate) => {
    setCurrencies((prevCurrencies) =>
      prevCurrencies.map((currency) =>
        currency.id === id ? { ...currency, rate: newRate } : currency
      )
    );
  };

  const handleLogin = () => {
    const validAdmin = admins.find(
      (admin) => admin.username === loginData.username && admin.password === loginData.password
    );

    if (validAdmin) {
      setIsAuthenticated(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  const renderLoginForm = () => (
    <div className="login-form">
      <h2>Авторизация</h2>
      <input
        type="text"
        placeholder="Логин"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );

  const renderAdminPage = () => (
    <div className="admin">
      <h1>Админка: Управление курсами валют</h1>

      <div className="new-currency-form">
        <input
          type="text"
          placeholder="Название валюты"
          value={newCurrency.name}
          onChange={(e) => setNewCurrency({ ...newCurrency, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Курс валюты"
          value={newCurrency.rate}
          onChange={(e) => setNewCurrency({ ...newCurrency, rate: e.target.value })}
        />
        <button onClick={handleAddCurrency}>Добавить валюту</button>
      </div>

      <div className="currency-list">
        <h2>Список валют</h2>
        <ul>
          {currencies.map((currency) => (
            <li key={currency.id}>
              <span>{currency.name}: </span>
              <span>
                <input
                  className="price"
                  type="text"
                  value={currency.rate}
                  onChange={(e) => handleEditCurrency(currency.id, e.target.value)}
                />
              </span>
              <button onClick={() => handleDeleteCurrency(currency.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return isAuthenticated ? renderAdminPage() : renderLoginForm();
};

export default AdminPage;
