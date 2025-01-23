import React from 'react';
import Exchange from '../components/Exchange/Exchange';


const ExchangePage = () => {
  return (
    <div className="exchange-container">
      <h1>Обмен валют</h1>
      <div className="exchange-content">
        <Exchange />
      </div>
    </div>
  );
};

export default ExchangePage;
