import React from "react";
import IdCard from "./idcard/IdCard";
import Greetings from "./greetings/Greetings";


function App() {
  return (
    <div>
    
    <IdCard 
  lastName = 'Doe' 
  firstName = 'John' 
  gender = 'male' 
  height = {178} 
  birth = {new  Date ("1992-07-14")} 
  picture = "https://randomuser.me/api/portraits/men/44.jpg" 
 />

<IdCard 
  lastName = 'Delores' 
  firstName = 'Obrien' 
  gender = 'female' 
  height = {172} 
  birth = {new  Date ("1988-05-11")} 
  picture = "https://randomuser.me/api/portraits/women/44.jpg" 
 />
  
    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

  </div>
  

  );



}

export default App;
