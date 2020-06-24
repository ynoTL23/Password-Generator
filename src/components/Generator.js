import React from "react";

import '../css/generator.css'

class Generator extends React.Component {
  constructor() {
    super()

    this.state = {
      generated_password: '',
    }
  }

  render() {
    return (
      <div className='generator'>
        <div className='results-container'>
          <span id='result'>{this.state.generated_password}</span>
        </div>

        <div className='options'>
          <div className='option'>
            <label htmlFor='opts_length'>Password Length</label>
            <input type='number' id='opts_length' name='opts_length' min='1' max='20' />
          </div>
          <div className='option'>
            <label htmlFor='opts_upper'>Include Uppercase</label>
            <input type='checkbox' id='opts_upper' name='opts_upper' />
          </div>
          <div className='option'>
            <label htmlFor='opts_lower'>Include Lowercase</label>
            <input type='checkbox' id='opts_lower' name='opts_lower' />
          </div>
          <div className='option'>
            <label htmlFor='opts_numbers'>Include Numbers</label>
            <input type='checkbox' id='opts_numbers' name='opts_numbers' />
          </div>
          <div className='option'>
            <label htmlFor='opts_symbols'>Include Symbols</label>
            <input type='checkbox' id='opts_symbols' name='opts_symbols' />
          </div>
        </div>

        <button id='btn_generate' onClick={alert}>
          Generate
        </button>
      </div>
    )
  }
}

export default Generator
