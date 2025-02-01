import React, { useState } from 'react';
import './Exchange.scss';

const Exchange = () => {
  const [currencies, setCurrencies] = useState([
    { name: 'Bitcoin', rate: '1,230,449,234.92UZS', img: './public/bitcoin.png' },
    { name: 'Toncoin', rate: '70,021.98UZS', img: './public/toncoinlogo.png' },
    { name: 'Litecoin', rate: '1,356,413.16UZS', img: './public/litecoin.png' },
    { name: 'Tether', rate: '13,009.36UZS', img: './public/tether.png' },
  ]);

  const [newCurrency, setNewCurrency] = useState({ name: '', rate: '', img: '' });

  const handleAddCurrency = () => {
    if (newCurrency.name && newCurrency.rate && newCurrency.img) {
      setCurrencies([
        ...currencies,
        {
          name: newCurrency.name,
          rate: newCurrency.rate,
          img: newCurrency.img,
        },
      ]);
      setNewCurrency({ name: '', rate: '', img: '' }); // очистка полей формы
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  const handleDeleteCurrency = (index) => {
    const updatedCurrencies = currencies.filter((_, i) => i !== index);
    setCurrencies(updatedCurrencies);
  };

  return (
    <>
      <section className="exchange">
        <div className="container">
          <div className="wrapper">
            <div className="cards">
              <h1>Курс Валют</h1>
              {currencies.map((currency, index) => (
                <div key={index} className="card">
                  <img src={currency.img} alt={currency.name} />
                  <h2>{currency.name}</h2>
                  <p>{currency.rate}</p>
                  <button onClick={() => handleDeleteCurrency(index)} className="delete-button">
                    Удалить
                  </button>
                </div>
              ))}
            </div>

            {/* Форма для добавления новой криптовалюты */}
            <div className="add-currency-form">
              <h2>Добавить новую криптовалюту</h2>
              <input
                type="text"
                placeholder="Название криптовалюты"
                value={newCurrency.name}
                onChange={(e) => setNewCurrency({ ...newCurrency, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Курс криптовалюты"
                value={newCurrency.rate}
                onChange={(e) => setNewCurrency({ ...newCurrency, rate: e.target.value })}
              />
              <input
                type="text"
                placeholder="Ссылка на изображение"
                value={newCurrency.img}
                onChange={(e) => setNewCurrency({ ...newCurrency, img: e.target.value })}
              />
              <button onClick={handleAddCurrency}>Добавить валюту</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exchange;
