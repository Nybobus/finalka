import React from "react";
import "./Works.scss";

const Works = () => {
  return (
    <>
      <section className="works">
        <div className="container">
          <div className="wrapper">
            <h2>How Quo works?</h2>
            <p>
              Quo is the most easier way for transaction with your friends and{" "}
              <br />
              family, No matter where are you. An exceptional way for make your{" "}
              <br />
              life one step easier <br />
            </p>

            <div className="cards">
              <div className="card1">
                <img src="/create.png" alt="" />
                <h2>Create account</h2>
                <p>
                  Create free account for your transaction. It’s pretty much{" "}
                  <br />
                  easier and don’t worry we care about your safety <br />
                </p>
              </div>
              <div className="card1">
                <img src="/enter.png" alt="" />
                <h2>Enter Recipent Info</h2>
                <p>
                  Create free account for your transaction. It’s pretty much{" "}
                  <br />
                  easier and don’t worry we care about your safety <br />
                </p>
              </div>
              <div className="card1">
                <img src="/send.png" alt="" />
                <h2>Send money</h2>
                <p>
                  Create free account for your transaction. It’s pretty much <br />
                  easier and don’t worry we care about your safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
