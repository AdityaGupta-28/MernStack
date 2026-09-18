npx create vite@latest
framwork - react 
projectname - MyReactApp
lanugage - javascript
cd MyReactApp 
npm run dev

index.html    - entry of project for browser
main.jsx - entry of project for react
app.jsx - contains component and got rendered 

components are written in function based and can return only one element so we need 
to wrap it fragment if <></> if multiple elements are there 

                                  <!-- Styling -->
In jsx class is written as className

<!-- profile pic integeration  -->
 import profilepic from './assest/profile.jpg'
 <img src={profilepic}></img>
 <img src="./assest/profilepic.jpg"></img>

<!-- how to style react component with css  -->
 External ---great for global styles for small projects 
    write style in index.css using className

 Module  ---- prefferd for individual components
  creating the css module file with the name of component as we make separate 
 component folder with the component name - eg. -  button.module.css 
 Now import this module in the button component ie. button.jsx
we write something like this 
           import style from './button.module.css'
            return(<button className={style.button}>Click me</button>);

        modules.css remove naming conflict as unique className is generating using hashing algorithm

 Inline -----good for small components for minimal Styling 
    function Button(){
     style={
      color:red,
      padding:10px
     }
        return(
            <button style={style} >click</button>
        );
    }
export default Button;


       <!--              ######## Props -->

 ### Props read-only properties that are shared between components.
A parent component can send data to a child component.
syntax  <Component name="value" age={30} isStudent={true} / >

### propTypes a mechanism that ensures that the passed value
is of the correct datatype.
age: PropTypes. number


### defaultProps default values for props in case they are not
passed from the parent component
name: "Guest"

    import PropTypes from 'prop-types'
    function Stduent(props){
        return(
            <h1>{props.name}</h1>
            <p>{props.age}</p>
              <p>{props.isStudent?"Yes":'No'}</p> <!-- boolean value is not directly display to dom-->
        )
    }

Student.propsTypes ={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.boolean
}

Student.defaultProps = {
    name:'Guest',
     age:0,
     isStudent:false
}

export default Student;


     <!-- ///// #########     Conditional Rendering -->

    function UserGreeting(props){
     
            if(isLoggedin){
                return <h1>Welcome {props.name}</h1>
            }
        else{
            return <h1>Please login first</h1>
        }

             <!-- or  using ternary operator-->
        return(props.isLoggedIn? <h1>Welcome {props.name}</h1>: <h1>Please login</h1> )

           <!-- or   -->

        const welcomeMessage =<h2 >Welcome {props. username} </h2>
       const loginPrompt =<h2 >Please log in to continue</h2>
       return(props.isLoggedIn ? welcomeMessage: loginPrompt);
    }    


             <!-- ########### List of object -->
import PropTypes from 'prop-types'
function List(props){
       const fruits = props.items;
    <!-- const fruits = [
                {id:1, name:'Apple', cal:95},
                {id:2, name:'Carrot', cal:155},
                {id:3, name:'Banana', cal:105},
                {id:4, name:'Grapes', cal:85}
     ]; -->

      <!-- // fruits.sort((a, b)=>b.name.localecompare(a.name)); // REVERSE ALPHABETICAL -->
      const localFruits = fruits.filter(fruit=>fruit.cal<100);
    
const  fruitList = fruits.map(fruit => <li key="fruit.id">{fruit.name}: <b>{fruit.cal}</b></li>);
<!--  We must need to assign unique key to list here else error will be thrown -->
  return (<ol>{fruitList}</ol>);  
}

List.defaultProps = {
 category:"Category",
 items:[]
}

List.propsTypes ={
  category: PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.nubmer, name:PropTypes.string, cal:PropTypes.number}))
}

<!-- ### Different Approach for the above  -->
   import List from './list.jsxt'

   function App(){
      const fruits = [
                {id:1, name:'Apple', cal:95},
                {id:2, name:'Carrot', cal:155},
                {id:3, name:'Banana', cal:105},
                {id:4, name:'Grapes', cal:85}
     ];

     const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 }
];
    return(
        <>
        {fruits.lengt>0 && <List items={fruits} category='fruits'/>}
        {vegetables.lengt>0 && <List items={vegetables} category='vegetables'/>}☻
       </>
    );
   }
   export default App;



      <!-- ############ Click Events  -->
click = An interaction when a user clicks on a specific element.
event We can respond to clicks by passing a callback to the onClick event handler.

<!-- If you want to pass a parameter -->
You cannot do this:
<button onClick={handleClick2("Bro")}>
because handleClick2("Bro") executes immediately when the component renders.
Instead, use an arrow function:


function Button() {
    const handleClick = (e) => e.target.textContent = "OUCH"; 
    <!--  the button text changes from click to OUCH  onClicking it-->
    <!-- console.log("OUCH!"); -->

    const handleClick2 = (e,name) => {
        console.log(e);
        console.log(`${name}, stop clicking me!`);
    };
    

    const imgurl = './src/assests/profile.jpg';
    const handleimgClick(e)=> e.target.style.display ='none';
    return (
        <!-- <button onClick={handleClick}>
            Click me
        </button> -->
         <button onClick={(e) => handleClick2(e,"Bro")}> Click me </button>

 <!-- You can write this, but React will automatically pass the event as the first argument:
const handleClick2 = (e) => {
    console.log(e);} -->

       <button onClick={(e)=>handleClick(e)} >Click me</button>
       <button onDoubleClick={(e)=> handleClick(e)}>Double click</button>

       <img onClick={(e)=>handleimgClick(e)} src={imgurl} alt=""> </img>
       
    );
}

export default Button;




                               {/* <!-- ########## Hooks  --> */}

### React hook = Special function that allows functional components to use React features 
without writing class components introduced in (React v16.8)(we no longer use to write class component)
(usestate, useEffect,useContext, useReducer, useCa11back, and more. )

### useState() A React hook that allows the creation of a stateful variable
AND a setter function to update its value in the Virtual DOM.
[name, setName]


import react,{useState} from 'react';

function Component(){
    const [name,setName] = useState('Guest');
    const updateName = () =>{
    setName('BOb');
   }

    const [count,setCount] = useState(0);
    const increament=()=>{
        setCount(count+1);
    }

    const decreament = () =>{
        setCount(count-1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return(
      <h1>Name:{name}</h1>
      <button onClick={updateName} >Update Name</button>
      <p>Count{count}</p>
      <button onClick={increament}>+</button>
      <button onClick={decreament} >-</button>
      <button onClick={reset} >Reset</button>
    )
}


                                {/* ################ // onChange = */}

onChange = event handler used primarily with form elements
ex. <input>, <textarea>, <select>, <radio>
Triggers a function every time the value of the input changes

import React,{useState} from 'react';

function MyComponent(){
const [name,setName] = useState('Guest');
const [payment,setPayment] = useState("");
const [shipping, setShipping] = useState("");

function handleNameChange(e){
    setName(e.target.value);
}

function handlePaymentChange(e){
    setPayment(e.target.value);
}

function handleShippingChange(e){
    setShipping(e.target.value);
}

return(
    <input type="text" value={name} onChange={handleNameChange} />
    <p>Name:{name}</p>

    <select value={payment} onChange={handlePaymentChange} >
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
    </select>
    <p>Payment:{payment}</p>

    <label>
        <input type="radio" value="pickup" checked={shipping==='pickup'} onChange={handleShippingChange}/>
        Pickup
    </label>

    <label>
        <input type="radio" value="delivery" checked={shipping==='delivery'} onChange={handleShippingChange}/>
        Delivery
    </label>
);
}


                {/* ################## Color Picker  */}

import React, {useState} from 'react';

function ColorPicker(){
   const [color,setColor] = useState("#ffffff");

   function handleColorChange(e){
    setColor(e.target.value);
   }
    return(
      <div>
       <h1>Color Picker</h1>
       <div style={{background-color:color}} > 
        {/* we need to enclose css property with javascript object that's why nested {{}} */}
        <p>Selected Color:{color}</p>
       </div>
       <label> Select color
        <input type="color" value={color} onChange={handleColorChange} />
       </label>
      </div>
    );
}
  
                   {/* ##################// updater function */}
    updater function = A function passed as an argument to setstate() usually
ex. setYear(arrow funciton)
Allow for safe updates based on the previous state
Used with multiple state updates and asynchronous functions
## Even for single update Good practice to use updater functions

import React,{useState} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);

    function increament(){
        setCount(count+1); // setCount(0 + 1) → 1
        setCount(count + 1);  // setCount(0 + 1) → 1

 // Takes the PENDING state to calculate NEXT state.
// React puts your updater function in a queue (waiting in line)
// During the next render, it will call them in the same order.

setCount(c => c + 1); /// updater function 
setCount(c=> c+1;
setCount(c => c +1);

        output will be 1 This is because both calls use the same count value from the current render.
        React batches these state updates.

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
         
                // setCount(count + 1)
                //     ↓
                // uses count from current render

                // setCount(prev => prev + 1)
                //     ↓
                // uses the latest pending state
    }

}


                // ############# Update Object Usin useState 
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


        //  ############## Update  array using useState 
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


                    // ##############Update array of objects 
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

