import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbotron() {

  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    });
}

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro"/>
      <p className="text"> Big and bigger.</p>
      {/* <p className="text"> Developed By Harry K.</p> */}
      <span className="description"> From £41.99/month for 24months or £999 before trade-in </span>
      <span className="description"> Developed By Harry K. </span>
      <ul className="links">
        <li>
            <button className="button">Buy</button>
        </li>
        <li>
           <a className="link" onClick={handleLearnMore}>Learn more.</a>
        </li>
        <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
      </ul>
    </div>
  );
}

export default Jumbotron;
