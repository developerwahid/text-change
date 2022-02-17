import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar  from './components/Navbar';
import Textfrom from './components/Textfrom';
// import Error from './components/Error';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
  const showalert =(message, type)=>{
    setalert({
    msg : message,
    type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const [mode, setmode] = useState('light');
  const togglemode = ()=>{
    if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#b54a57'
    showalert("Dark mode has been enable", "success");
  }else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showalert("Light mode has been enable", "success");
  }
}
  return (
  <>  
  {/* <Router> */}
{/* <Navbar title="Navbar" AboutText="AboutUs" /> */}
{/* <Navbar /> */}
<Navbar title="Text-Change" AboutText="AboutUs" mode={mode} togglemode={togglemode} />
<div className="container my-3">
<Alert alert={alert}/>
<Textfrom heading="my first from" showalert={showalert}  mode={mode}/>
{/* <About />
<Error /> */}
{/* <Routes>

<Route path="/" element={
<Textfrom heading="my first from" showalert={showalert}  mode={mode}/>}/>
<Route path="/About" element={<About />}/>
<Route path="/About/Error" element={<Error />}/>
</Routes>
</div>
</Router> */}
</div>
</> 
 ); 
}
export default App; 