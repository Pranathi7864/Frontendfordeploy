import { useState } from 'react';
import './App.css';

function App() {
     const [msg,setmsg]=useState("");
    const handlemessage=()=>{
    fetch("https://railway.app")
    .then(res=>res.text())
    .then((m)=>setmsg(m));}
   
    return (
        <div>
            <h1>This is frontend</h1>
            <button onClick={handlemessage}>Click to see the backend message</button>
            <p>{msg}</p>
        </div>
    );
}

export default App;
