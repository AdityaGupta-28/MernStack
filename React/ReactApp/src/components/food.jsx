import React,{useState} from 'react';
function Food(){
    const [foods, setFood] = useState(['Apple','Orange','Banana','Cherry']);
   
    function handleFood(){
    const input = document.getElementById("foodInput");
    const newFood = input.value.trim();
    input.value="";
    if (newFood === "") {
        return; }
     setFood(c=>([...c,newFood]));
    }

    function handleRemoveFood(index){
      setFood(foods.filter((_,i)=>i!==index));
    }

    function handleRem(){
        const input = document.getElementById('rfood');
        const foo = input.value.trim();
        input.value="";
        if(foo===""){return;}
        setFood(foods.filter(fo=>fo!==foo));
        
    }

    return(
     <div>
        <ol>
       {foods.map((food,index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li> )}
       </ol>
       <input type="text" id='foodInput' placeholder='Enter Food' />
       <button onClick={handleFood} >Add Food</button>
       <input type="text" id='rfood' placeholder='remove food'/>
       <button onClick={handleRem} >Remove Food</button>
      
     </div>
    );
}
export default Food;