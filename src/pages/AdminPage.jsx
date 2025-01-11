import React, { useState } from 'react';

const AdminPage = () => {
  // Начальные данные валют
  const [currencies, setCurrencies] = useState([
    { id: 1, name: 'Bitcoin', rate: '1,230,449,234.92UZS' },
    { id: 2, name: 'Toncoin', rate: '70,021.98UZS' },
    { id: 3, name: 'Litecoin', rate: '1,356,413.16UZS' },
    { id: 4, name: 'Tether', rate: '13,009.36UZS' }
  ]);

  // Состояние для ввода новой валюты
  const [newCurrency, setNewCurrency] = useState({ name: '', rate: '' });

  // Обработчик добавления новой валюты
  const handleAddCurrency = () => {
    setCurrencies([
      ...currencies,
      { id: Date.now(), name: newCurrency.name, rate: newCurrency.rate }
    ]);
    setNewCurrency({ name: '', rate: '' });
  };

  // Обработчик удаления валюты
  const handleDeleteCurrency = (id) => {
    setCurrencies(currencies.filter(currency => currency.id !== id));
  };

  // Обработчик изменения данных валюты
  const handleEditCurrency = (id, newRate) => {
    setCurrencies(currencies.map(currency => 
      currency.id === id ? { ...currency, rate: newRate } : currency
    ));
  };

  return (
    <div className="admin">
      <h1>Админка: Управление курсами валют</h1>

      {/* Форма для добавления новой валюты */}
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

      {/* Список валют с возможностью редактирования и удаления */}
      <div className="currency-list">
        <h2>Список валют</h2>
        <ul>
          {currencies.map(currency => (
            <li key={currency.id}>
              <span>{currency.name}: </span>
              <span>
                <input 
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
}

export default AdminPage;
