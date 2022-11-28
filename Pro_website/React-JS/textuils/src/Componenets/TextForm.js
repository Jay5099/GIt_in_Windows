/** @format */

import React, { useState } from 'react'

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('uppercase was clicked'+text );
    let newText=text.toUpperCase();
    setText(newText) 
  }
  const handleLoClick = () => {
    let newText=text.toLowerCase();
    setText(newText) 
  }
  const handlelearClick = () => {
    let newText='';
    setText(newText) 
  }
  const handlereverseclick=() => {
    let newText=reverseString(text); 
      setText(newText)
  }
  
  const handleOnChange = (event) => {
    // console.log('onchange');
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here'); 

  //text="new text"; //correct way
  //setText("new text"); //correct way
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-label' value={text} onChange={handleOnChange} id='myBox' cols={150} rows={12} ></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-1' onClick={handlelearClick}>Clear Text</button>
      <button className='btn btn-primary mx-1' onClick={handlereverseclick}>Reverse Text</button>
    </div>
    <div className="container">
      <h1>Your Text Summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
      </div>
    </>
  )

  }