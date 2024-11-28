import React,{useState} from 'react'
import './Form.css'

const Form = () => {
    const [text,setText]=useState('Type here');
    function onchangeclick(e)
    {
        setText(e.target.value);
    }
    function clickchange()
    {
        let val=text.toUpperCase();
        setText(val);

    }
  return (
    <div className='Container'>
    <div className="form-group">
    <textarea className="form-control" value={text} onChange={onchangeclick} id="exampleFormControlTextarea1" rows="8" cols="10"></textarea>
    <button className="btn" onClick={clickchange}>Convert to UpperCASE</button>
  </div>
  </div>
  )
}

export default Form
