import React, { useState } from 'react'


export default function Text(props) {


  // convert to uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Convert to UpperCase!","success")
  }

  // convert to lowercase
  const handlelowerClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Convert to LowerCase!","success")
  }

  // click for clear text
  const handleclearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = ("");
    setText(newtext)
    props.showAlert("Cleared","success")
  }

  // click to manage extra space
   const handleExtraSpace = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.split(/[ ]+ /);
    setText(newtext.join(" "))
    props.showAlert("Extra spaces removed","success")
  }

  // click to copy text
  const handleCopy = () => {
      navigator.clipboard.writeText(text);
       props.showAlert("Copied to clipboard","success")
    }

  const handleOnchange = (event) => {
    // console.log("ONchange");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"style = {{color: props.mode === 'dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} 
          style = {{backgroundColor: props.mode === 'dark'?'grey':'white',
           color:props.mode === 'dark'?'white':'black' }}  id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button> 
        <button type="button" className="btn btn-primary mx-2" onClick={handlelowerClick}>convert to lowercase</button> 
        <button type="button" className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button> 
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button> 
        <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> 
      </div>
      <div className="container my-3"style = {{color: props.mode === 'dark'?'white':'black'}} >
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Enter in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}