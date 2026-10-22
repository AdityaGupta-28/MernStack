import React,{useRef,useEffect} from 'react';

// useState()= Re-renders the component when the state value changes
// "use Reference" Does not cause re-renders when its value changes.
// 1. Accessing/ Interacting with DOM  elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals


function UseRef(){
    const refInput1 = useRef(null);
    const refInput2 = useRef(null);

    useEffect(()=>{
        console.log('Component Re-Rendered');
    });

    function handleClick1(){
      refInput1.current.focus();
      refInput1.current.style.backgroundColor = 'yellow';
      refInput2.current.style.backgroundColor ="";
    }

    function handleClick2(){
      refInput2.current.focus();
      refInput2.current.style.backgroundColor = 'yellow';
      refInput1.current.style.backgroundColor = '';
    }

    return(
     <>
     <button onClick={handleClick1} >Click Me 1</button>
     <input type="text" ref={refInput1} />
    <br />
       <button onClick={handleClick2} >Click Me 2</button>
     <input type="text" ref={refInput2} />
     </>
    );
}
export default UseRef;