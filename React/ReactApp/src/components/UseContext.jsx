import React, {useState, createContext} from 'react';
import ComponentB  from './componentB';

export const UserContext = createContext();


function ComponentA(){
 const [name,setName] = useState("Bro Code");
    return(
      <div className="box">
        <h1>ComponentA</h1>
        <h2>Hello {name}</h2>
       <UserContext.Provider value={name}>
      <ComponentB />
       </UserContext.Provider>
     
      </div>
    );
}
export default ComponentA;