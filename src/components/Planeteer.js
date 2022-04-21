import React, {useState} from "react";

function Planeteer({planeteer}) {
  const [toggler, setToggler]=useState(false)
  const [fromUsa, setFromUsa]=useState(true)

  function citizenship({planeteer}){
      if (planeteer.fromUSA=== true){
    return ( "USA-based") } 
    else {return  "Working overseas"}
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
        onclick= {"i"}
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
           <p>  {citizenship({planeteer})} </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
