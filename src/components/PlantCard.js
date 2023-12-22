import React, {useState} from "react";

function PlantCard({plant}) {

  const [isInStock, setIsInStock] = useState(false);

  function handleClick(){
    setIsInStock((isInStock) => !isInStock);
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={handleClick}> 
      { isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
