import React from 'react'
import './Exchange.scss'

const Exchange = () => {
  return (
    <>
    <section className="exchange">
        <div className="container">
            <div className="wrapper">
                <div className="cards">

                  <h1>Курс Валют</h1>
                    <div className="card1">
                      <img src="./public/bitcoin.png" alt="" />
                      <h2>Bitcoin</h2>
                      <p>1,230,449,234.92UZS</p>
                    </div>

                    <div className="card2">
                      <img src="./public/toncoinlogo.png" alt="" />
                      <h2>Toncoin</h2>
                      <p>70 021,98UZS</p>
                    </div>

                    <div className="card3">
                      <img src="./public/litecoin.png" alt="" />
                      <h2>Litecoin</h2>
                      <p>1,356,413.16UZS</p>
                    </div>

                    <div className="card4">
                      <img src="./public/tether.png" alt="" />
                      <h2>Tether</h2>
                      <p>13,009.36</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Exchange