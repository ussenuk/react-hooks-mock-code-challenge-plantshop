import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {


  const filteredPlants = plants ? plants.filter(item => item.name.includes(search)) : [];


  const plantsDisplay = filteredPlants.map((item)=>{
    return (
      <PlantCard

      key={item.id}
      plant={item}
      />
    )
  })
  return (
    <ul className="cards">
      {plantsDisplay}</ul>
  );
}

export default PlantList;
