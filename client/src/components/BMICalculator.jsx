import { useState, useEffect } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBMI] = useState(-1);
    const [message, setMessage] = useState('');
    const [optimalWeight, setOptimalWeight] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const calculateBMI = () => {
        const heightSquared = (height / 100) * (height / 100);
        const bmiValue = weight / heightSquared;
        const low = Math.round(18.5 * heightSquared);
        const high = Math.round(24.99 * heightSquared);
        let message = '';
        if (bmiValue >= 18.5 && bmiValue <= 24.99) {
            message = 'in a healthy weight range';
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            message = 'Overweight';
        } else if (bmiValue >= 30) {
            message = 'obese';
        } else if (bmiValue < 18.5) {
            message = 'under weight';
        }
        setMessage(message);
        setOptimalWeight(`Your suggested weight range is between ${low} - ${high}`);
        setBMI(Math.round(bmiValue * 100) / 100);
    };

    const submitMe = (e) => {
        e.preventDefault();
        calculateBMI();
    };

    const heightchange = (e) => {
        setHeight(e.target.value);
    };

    const weightchange = (e) => {
        setWeight(e.target.value);
    };

    const change = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="BMI-container">
            <div className="BMI-header">
                <h2>BMI Calculator</h2>
            </div>
            {/* <form onSubmit={submitMe}>
                <label>
                    Please enter your name :
                    <input type="text" name="name" value={name} onChange={change} required />
                </label>
                <label>
                    Enter your height in cm :
                    <input type="number" name="height" value={height} onChange={heightchange} required />
                </label>
                <label>
                    Enter your weight in kg :
                    <input type="number" name="weight" value={weight} onChange={weightchange} required />
                </label>
                <button onClick={() => calculateBMI}>Submit</button>
            </form> */}

            {bmi > -1 ? (<div className="BMI-output">
                <label>Hello <span style={{ color: "#a10b1a", fontWeight: "500" }}>{name.toUpperCase()}</span></label>
                <label>Your BMI is <span style={{
                    color: bmi >= 18.5 && bmi <= 24.99 ? "green" :
                        bmi >= 25 && bmi <= 29.9 ? "orange" :
                            bmi >= 30 ? "red" :
                                bmi < 18.5 ? "blue" : "",
                    fontSize: "40px"
                }}>{bmi}</span></label>
                <label>You are <span style={{
                    color: bmi >= 18.5 && bmi <= 24.99 ? "green" :
                        bmi >= 25 && bmi <= 29.9 ? "orange" :
                            bmi >= 30 ? "red" :
                                bmi < 18.5 ? "blue" : "",
                    fontSize: "40px"
                }}>{message}</span></label>
                <label>{optimalWeight}</label>
            </div>) : (<>
                <form onSubmit={submitMe}>
                    <label>
                        Please enter your name :
                        <input type="text" name="name" value={name} onChange={change} required />
                    </label>
                    <label>
                        Enter your height in cm :
                        <input type="number" name="height" value={height} onChange={heightchange} required />
                    </label>
                    <label>
                        Enter your weight in kg :
                        <input type="number" name="weight" value={weight} onChange={weightchange} required />
                    </label>
                    <button onClick={() => calculateBMI}>Submit</button>
                </form></>)}
        </div>
    );
};

export default BMICalculator;
