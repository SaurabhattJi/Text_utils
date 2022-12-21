import React,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,

//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";



function App() {
  const[mode, setMode]= useState('light');
  const [alert ,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }

 let toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
     document.body.style.backgroundColor = '#060b43'
     showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable","success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
