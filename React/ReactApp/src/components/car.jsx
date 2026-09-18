import React,{useState} from 'react';

function Car(){
 
 const [car, setCar] = useState({year:2024, make:'Ford', model:'Mustang'});

function handleYearChange(e){
    setCar({year:e.target.value});   

// Suppose the user changes the year to 2025. 
// This makes the entire state:
// { year: 2025 }
// The other properties are removed:
}
function handleMakeChange(e){
    setCar((c)=>({make:e.target.value}));
}
function handleModelChange(e){
    setCar((c)=>({...c, model:e.target.value}));
    // ...c copies the existing properties, then model is replaced.
}
 return(
  <>
  <p>My favourite Car is {car.year} {car.make} {car.model}</p>
  <input type="number" value={car.year} onChange={handleYearChange} />
  <input type="text" value={car.make} onChange={handleMakeChange} />
  <input type="text" value={car.model} onChange={handleModelChange} />
  
  </>
 );

}
export default Car;