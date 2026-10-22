import React,{useState, useEffect} from 'react'

function UseEffectt(){
    const [count,setCount] = useState(0);
    const [color,setColor] = useState('green');
    useEffect(()=>{document.title=`count: ${count}`},[color]); // if dependency array is empty then only once the function is called
               /// if dependency array is absent then whenever the page re-renders the function is called (mount)
               /// if dependency array is present with value then whenever the values changes then the function called; (mount + value)
    function add(){
        setCount(c=>c+1);
    }

    function changeColor(){
        setColor(c=>c==='green'?'red':'green');
    }
    return(
        <>
        <p style={{color}} >Count:{count}</p>
        <button onClick={add} >Add</button>
        <button onClick={changeColor} >Change color</button>
        </>
    );
}

export default UseEffectt;