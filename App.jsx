
import "./App.css";

import { useEffect } from "react";
import { useState } from "react";
import Loggedinpge from "./Loggedinpge";

function App() {
  var faceio = new faceIO("fioaae83");
  const[logged,setLogged]=useState(false)
  useEffect(() => {
    faceio = new faceIO("fioaae83");
  }, []);
  const changehandle=(e)=>{
    const h=e.target.value
    setEmail(h)
  }
  const changehandlep=(e)=>{
    setPassword(e.target.value)
  }
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const handleRegister = async (e) => {
   
    try {
      
  
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: email,
          
        },
      });
      if(response){
        setEmail(email)
        setLogged(true)
      }
    
    } catch (error) {
      console.log(error.message);
    }
  };
  const [faceid,setFaceid]=useState()
  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          `);
          console.log(response.payload)
          if(response){
            setFaceid(response.facialId)
            setEmail(response.payload.email)
           setLogged(true)
          }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
<div>
  {logged?(<div><Loggedinpge email={email} />
  & Your face Unique ID is: {`${faceid}`}
  </div>
  ):(
        <section className="w-full h-screen flex flex-col items-center justify-center">
       <div style={{padding:"20px"}}>
            <label htmlFor="email">Enter name <small>{`(only if new user)`}</small>:</label>
            <br />
      <input type="text" name="email" value={email} onChange={changehandle}/>
      </div>
      <br />
     
      <div  style={{padding:"20px"}} className="flex flex-col justify-center items-center">
        <button
       
          className="block px-4 py-2 outline-none bg-blue-500 rounded text-white mb-2"
          onClick={email!=undefined&&handleRegister}
        >
          register
        </button>
        </div> 
        <div style={{padding:"20px"}} className="flex flex-col justify-center items-center">
<button

onClick={handleLogIn}>Log-in</button>
     </div>
    
    </section>
  )
}
    </div>
  );
}

export default App;