import React from 'react'
import generatePassword from '../utils/Generator_Functions.js'

import '../css/generator.css'

class Generator extends React.Component {
  constructor() {
    super()

    this.state = {
      generated_password: '',
      length: 8,
      options: {
        upper: true,
        lower: true,
        number: true,
        symbol: true,
      },
    }

    this.handlePasswordGen = this.handlePasswordGen.bind(this)
    this.handleOptsToggle = this.handleOptsToggle.bind(this)
  }

  handlePasswordGen = (opts) => {
    const password = generatePassword(opts)
    this.setState({
      generated_password: password,
    })
  }

  handleLengthChange = (e) => {
    const length =
      e.target.value > 20 || e.target.value < 1 ? 20 : e.target.value
    this.setState({
      length: length,
    })
  }

  handleOptsToggle = (e) => {
    const opt = e.target.name
    this.setState({
      options: {
        upper: this.state.options.upper,
        lower: this.state.options.lower,
        number: this.state.options.number,
        symbol: this.state.options.symbol,
        [opt]: e.target.checked,
      },
    })
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
            <input
              type='number'
              id='opts_length'
              name='length'
              min='1'
              max='20'
              defaultValue={this.state.length}
              onChange={this.handleLengthChange}
            />
          </div>
          <div className='option'>
            <label htmlFor='opts_upper'>Include Uppercase</label>
            <input
              type='checkbox'
              id='opts_upper'
              name='upper'
              defaultChecked={this.state.options.upper}
              onClick={this.handleOptsToggle}
            />
          </div>
          <div className='option'>
            <label htmlFor='opts_lower'>Include Lowercase</label>
            <input
              type='checkbox'
              id='opts_lower'
              name='lower'
              defaultChecked={this.state.options.lower}
              onChange={this.handleOptsToggle}
            />
          </div>
          <div className='option'>
            <label htmlFor='opts_numbers'>Include Numbers</label>
            <input
              type='checkbox'
              id='opts_numbers'
              name='number'
              defaultChecked={this.state.options.number}
              onChange={this.handleOptsToggle}
            />
          </div>
          <div className='option'>
            <label htmlFor='opts_symbols'>Include Symbols</label>
            <input
              type='checkbox'
              id='opts_symbols'
              name='symbol'
              defaultChecked={this.state.options.symbol}
              onChange={this.handleOptsToggle}
            />
          </div>
        </div>

        <button
          id='btn_generate'
          onClick={() => this.handlePasswordGen(this.state)}>
          Generate
        </button>
      </div>
    )
  }
}

export default Generator
