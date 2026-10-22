import React,{useState, useEffect} from 'react'

function WindowResize(){
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   
   useEffect(()=>{
    window.addEventListener('resize',handleResize);
    console.log("EventListener Mounted");
    return ()=>{
        window.removeEventListener('resize',handleResize);
        console.log("EventListener Removed");
    }
    },[]);

   function handleResize(){
   setHeight(window.innerHeight);
   setWidth(window.innerWidth);
   }

   useEffect(()=>{document.title=`${height} * ${width}`});
    return(
     <>
     <p>Window width:{width}</p>
     <p>Window height:{height}</p>
     </>
    );
}

export default WindowResize;