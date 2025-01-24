import React from 'react'
import PeoplePage from '../../pages/PeoplePage'

const People = () => {
  return (
    <>

    <PeoplePage />

      <section className="people">
        <div className="container-people">
            <div className="wrapper-people">
                <img src="/telka.jpg" alt="" />
                <h2>Satisfied peoples saying 
                about Quo!</h2>
                <p>Quo is the most easier way for transaction with your friends and family, <br />
                   No matter where are you. An exceptional way for make your life one step easier. <br />
                   Quo is the most easier way for transaction with your friends and family, </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default People
