import React , {useState} from 'react'


export default function Textform(props) {    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
     }
     const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
     }
     const handleClearClick =()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared", "success");
     }
     const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
     }
     const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra sapces removed", "success");
     }
    
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#060b43'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#060b43' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#060b43'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read  </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"-->Enter something in the textbox above to preview it here...."}</p>
    </div>
    </>
  )
}
