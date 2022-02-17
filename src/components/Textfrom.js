import React, {useState} from 'react'
import '../App.css'

export default function Textfrom(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was click" + text);
    let newText =text.toUpperCase();
    setText(newText)
    props.showalert("converted to uppercase", "success")
  }
  const handleLoClick = ()=>{
    // console.log("uppercase was click" + text);
    let newText =text.toLowerCase();
    setText(newText)
    props.showalert("converted to Lowercase", "success")
  }
  const handleCapCase = ()=>{
    // console.log("uppercase was click" + text);
    let camelCaseText = text.split(' ')
    .map(function (word) {
      // First character upper case else lower case
      return word.charAt()
        .toUpperCase() + word.slice(1)
        .toLowerCase();
    })
    .join(' ');
  setText(camelCaseText);
  props.showalert("converted to capitalize", "success")
  }
    const handleOnChange = (event)=>{
      // console.log("on change");
      setText(event.target.value);
  }
  const handleRemoveText = ()=>{
    setText("");
    props.showalert("converted to Remove Text", "success")
  }
  const handleCopy = () => {
    var text =document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("converted to Copy text", "success")
  }
  const [text, setText] = useState('');
  // setText("new text");
  return (
    <> 
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
  <label htmlFor="emailText" className='form-label'>Example to uppercase :</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'#b54a57':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="6" placeholder="Enter text here"></textarea>
</div>
<button className='btn btn-one' onClick={handleUpClick}> convert to uppercase </button>
<button className='btn btn-one' onClick={handleLoClick}> convert to lowercase </button>
<button className='btn btn-one' onClick={handleCapCase}> convert to capitalizecase </button>
<button className='btn btn-one' onClick={handleCopy}> copy text </button>
<button className='btn btn-one' onClick={handleRemoveText}> Remove text </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>you text summary</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
