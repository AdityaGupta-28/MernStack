import React,{useState} from 'react';

function Cars(){
 const [cars,setCars] = useState([]);
 const [year,setYear] = useState(new Date().getFullYear());
 const [make, setMake] = useState("");
 const [model,setModel] = useState("");

 function handleAddCar(){
   const newcar = {year:year, make:make, model:model};
   setCars(c=>[...c,newcar]);
   setYear(new Date().getFullYear());
   setMake("");
   setModel("");
  
 }

 function handleRemoveCar(index){
   setCars(c=>c.filter((_,ind)=>ind!==index));
 }

 function handleChangeYear(e){
   setYear(e.target.value);
  
 }
 function handleChangeMake(e){
    setMake(e.target.value);
     
 }

 function handleChangeModel(e){
   setModel(e.target.value);
    
 }

    return(
      <div>
        <h1>List of Car object</h1>
        <ol>
         {cars.map((car,index)=>(<li key={index} onClick={()=>handleRemoveCar(index)}>{car.year}  {car.make}  {car.model} </li>))}
        </ol>

       <input type="number" value={year} onChange={handleChangeYear} placeholder='Enter the year'/> 
       <input type="text" value={make} onChange={handleChangeMake} placeholder='Make' />
       <input type="text" value={model} onChange={handleChangeModel} placeholder='Model' />
       <button onClick={handleAddCar} >Add</button>
      </div>
    );
}
export default Cars;