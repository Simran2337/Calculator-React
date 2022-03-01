import { useState } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import CustomBackground from './CustomBackground';
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';

function App() {
  const [output, setoutput] = useState('');
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');

  /* Function to handle change in first input box */
  const handleChange1 = (e) => {
    setFirstNum(e.target.value);
  }

  /* Function to handle changes in second input box */
  const handleChange2 = (e) => {
    setSecondNum(e.target.value);
  }

  /* Method for handling the operations and checking for validations */
  const operation = (operator) => {
    if (firstNum === '' || secondNum === '')
      NotificationManager.error("Input Fields Cannot be empty!");

    else {
      let result = 0;
      switch (operator) {
        case "+": result = (Number(firstNum) + Number(secondNum));
          break;
        case "-": result = (Number(firstNum) - Number(secondNum));
          break;
        case "*": result = (Number(firstNum) * Number(secondNum));
          break;
        case "/": result = (Number(firstNum) / Number(secondNum));
          break;
      }

      if (result > 99999 && result % 100000 === 0)
        result = result.toExponential();
      setoutput(result);
    }
  }

  /* Function to clear all the fields on click of clear button */
  const clear = () => {
    setFirstNum("");
    setSecondNum("");
    setoutput("");
  }

  return (
    <>
      {/* Animated Background addition */}
      <CustomBackground />
      <h1 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '1%' }}>Calculator!</h1>
      <div className='calculator'>

        {/* Input Field 1 */}
        <input id="input_one" placeholder='First Input' type="number" value={firstNum} onChange={handleChange1}></input>
        <br />
        <br />

        {/* Input Field 2 */}
        <input id="input_two" type="number" placeholder='Second Input' value={secondNum} onChange={handleChange2}></input>
        <br />
        <br />

        {/* Available Operators */}
        <div>
          <button type="button" id="plus" className='btn btn-outline-warning' onClick={() => operation("+")}>+</button>
          <button type="button" id="minus" className='btn btn-outline-primary' onClick={() => operation("-")}>-</button>
          <button type="button" id="multiply" className='btn btn-outline-success' onClick={() => operation("*")}>&times;</button>
          <button type="button" id="divide" className='btn btn-outline-danger' onClick={() => operation("/")}>/</button>
        </div>

        {/* Clear Button */}
        <button type="button" id="clear" className='btn btn-outline-light' onClick={() => clear()}>Clear</button>
        <br />
        <br />

        {/* Output Section */}
        <input id="output" placeholder='Output here...' value={output} readOnly></input>
      </div>

      {/* Container to allow Notifications  */}
      <NotificationContainer />
    </>
  );
}

export default App;
