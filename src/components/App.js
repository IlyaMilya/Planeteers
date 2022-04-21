import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
const [planets, setPlanets]=useState([])
const request = async()=> {
let req = await fetch('http://localhost:8003/planeteers')
let res = await req.json()
console.log(res)
setPlanets(res)

}


useEffect(()=>{request()},[])

const [search, setSearch]= useState('')


const searchPlan = planets.filter(element=> element.name.toLowerCase().includes(search.toLowerCase()))

console.log(planets)

  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch}/>
      <RandomButton />
      <PlaneteersContainer searchPlan={searchPlan} />
    </div>
  );
}

export default App;
