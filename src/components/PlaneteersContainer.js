import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({searchPlan}) {
  return (
    <ul className="cards">
      {searchPlan.map((element)=>{
        return(
          <Planeteer planeteer={element}/>
        )

      })}
    </ul>
  );
}

export default PlaneteersContainer;
