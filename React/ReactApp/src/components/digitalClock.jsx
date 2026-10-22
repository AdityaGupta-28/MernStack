import React,{useEffect, useState} from 'react'

function DigitalClock(){
 const [time,setTime] = useState(new Date());

 useEffect(()=>{
 const intervalId = setInterval(()=>{setTime(new Date())},1000);

 return ()=>{
   clearInterval(intervalId);
 }
 },[]);

 function formatter(){
   let hour = time.getHours();
   const minute = time.getMinutes();
   const second = time.getSeconds();
   const meridiem = hour>=12?'PM':'AM';

   hour = hour%12 || 12;
    return `${pad(hour)}:${pad(minute)}:${pad(second)} ${meridiem}`;
 }

 function pad(number){
   return (number<10?'0':"")+number;
 }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatter()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;