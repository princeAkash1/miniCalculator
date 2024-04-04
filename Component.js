import React, { useEffect, useState } from 'react';

function Component(props) {
    const [time, setTime] = useState(0);
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [operation, setOperation] = useState();
    const [result, setResult] = useState();

    const handleClick = () => {
        setTime(time => time + 1);
    };

    useEffect(() => {
        console.log("Component re-rendered");
    });

    function handleOperation() {
        if (operation === "+") {
            setResult(num1 + num2);
        } else if (operation === "-") {
            setResult(num1 - num2);
        } else if (operation === "*") {
            setResult(num1 * num2);
        } else if (operation === "/") {
            setResult(num1 / num2);
        } else {
            alert("Invalid Operation");
        }
    }

    return (
        <div>
            <div>
                My Name is {props.name}
                <h1>Time is {time} PM</h1>
                <button onClick={handleClick}>Click Me</button>
            </div>
            <div>
                <input onChange={(e) => { setNum1(parseInt(e.target.value)) }} />
                <select onChange={(e) => setOperation(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input onChange={(e) => { setNum2(parseInt(e.target.value)) }} />
                <button onClick={handleOperation}>Calculate</button>
            </div>
            <h1>The result is {result}</h1>
        </div>
    );
}

export default Component;
