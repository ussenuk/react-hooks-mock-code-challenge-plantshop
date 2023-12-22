import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name:"",
    image:"",
    price:0, //initialize amount as a number
  });

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then((r)=>r.json())
      .then((plants)=> setPlants(plants))

  },[])

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]:value,
    });

  }

  function handleSubmit(event){
    event.preventDefault();
    const newPlant={
      "name":formData.name,
      "image":formData.image,
      "price":Number(formData.price), //convert amount to a number
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((r)=>r.json())
    .then((newItem) => setPlants([...plants, newItem]));
  
  }



  return (
    <main>
      <NewPlantForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList search={search} setSearch={setSearch} plants={plants}/>
    </main>
  );
}

export default PlantPage;
