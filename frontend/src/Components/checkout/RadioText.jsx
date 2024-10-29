import React from 'react';
import './radiotext.css';

function RadioText({text = 'Option'}) {
  return (
    <div className='radioText-container'>
      <input height={40} checked={true} type="radio" name="payOption" id="" />
      <label for="payOption">{text}</label>
    </div>
  )
}

export default RadioText
