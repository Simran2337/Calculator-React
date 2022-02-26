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

  const handleChange1 = (e) => {
    setFirstNum(e.target.value);
  }
  const handleChange2 = (e) => {
    setSecondNum(e.target.value);
  }

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

  const clear = () => {
    setFirstNum("");
    setSecondNum("");
    setoutput("");
  }

  return (
    <>
      <CustomBackground />
      <h1 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '1%' }}>Calculator!</h1>
      <div className='calculator'>

        <input id="input_one" placeholder='First Input' type="number" value={firstNum} onChange={handleChange1}></input>
        <br />
        <br />
        <input id="input_two" type="number" placeholder='Second Input' value={secondNum} onChange={handleChange2}></input>
        <br />
        <br />

        <div>
          <button type="button" id="plus" className='btn btn-outline-warning' onClick={() => operation("+")}>+</button>
          <button type="button" id="minus" className='btn btn-outline-primary' onClick={() => operation("-")}>-</button>
          <button type="button" id="multiply" className='btn btn-outline-success' onClick={() => operation("*")}>&times;</button>
          <button type="button" id="divide" className='btn btn-outline-danger' onClick={() => operation("/")}>/</button>
        </div>

        <button type="button" id="clear" className='btn btn-outline-light' onClick={() => clear()}>Clear</button>
        <br />
        <br />
        <input id="output" placeholder='Output here...' value={output} readOnly></input>
      </div>

      <NotificationContainer />
    </>
  );
}

export default App;
