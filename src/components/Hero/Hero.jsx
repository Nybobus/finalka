import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">


                <div className="hero__content">
                    <h1>Experience the easier way <br/>
                    for transaction <br/> </h1>
                    <p>Quo is the most easier way for transaction with your friends and family, now matter where are you. <br/>
                    An exceptional way for make your life one step easier <br/>   </p>

                    <button>See how we works</button>

                    <section className="hero__box">
                        <img src="./public/quoimg.png" alt="" />

                        <h3>Trusted by</h3>

                        <div className="hero__img">
                        <img  src="google.png" alt="" />
                        <img src="slack.png" alt="" />
                        <img  src="amazon.png" alt="" />
                        <img  src="dropbox.png" alt="" />
                        <img  src="microsoft.png" alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero