const generatePassword = (opts) => {
  // stuff to generate password and return
  // randomChar(65, 90) // random uppercase letter
  // randomChar(97, 122) // random lowercase letter
  // randomChar(48, 57) // random number
  // randomSymbol(32, 126) // random symbol
  let complete_password = ''

  for (let i = 0; i < opts.length; i++) {
    const keys = Object.keys(opts.options).filter(
      (key) => opts.options[key] == true
    )
    const opt_choice = keys[Math.floor(Math.random() * keys.length)]

    switch (opt_choice) {
      case 'upper':
        const upper_char = String.fromCharCode(randomChar(65, 90))
        complete_password += upper_char
        break
      case 'lower':
        const lower_char = String.fromCharCode(randomChar(97, 122))
        complete_password += lower_char
        break
      case 'number':
        const number_char = String.fromCharCode(randomChar(48, 57))
        complete_password += number_char
        break
      case 'symbol':
        const symbol_char = String.fromCharCode(randomSymbol(32, 126))
        complete_password += symbol_char
        break
    }
  }

  return complete_password
}

// used to select a random char value according to ascii
// https://www.petefreitag.com/cheatsheets/ascii-codes/
const randomChar = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// select a random symbol but excluding letters and numbers
const randomSymbol = (min, max) => {
  const val = Math.floor(Math.random() * (max - min + 1)) + min
  return (val >= 48 && val <= 57) || // exclude numbers
  (val >= 65 && val <= 90) || // exclude uppercase letters
    (val >= 97 && val <= 122) // exclude lowercase letters
    ? randomSymbol(min, max)
    : val
}

export default generatePassword
