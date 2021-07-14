import React, {useEffect, useState} from "react";

import './calculator.styles.scss';

const Calculator = (props) => {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [amountPeople, setAmountPeople] = useState(0);
    const [total, setTotal] = useState(0)


    useEffect((props) => {
        // compute...
        setTipAmount((bill * tipPercent) / 100);
    }, [bill, tipPercent])

    useEffect((props) => {
        // compute...
        setTotal((bill + tipAmount) / amountPeople);
    }, [bill, tipAmount, amountPeople])


    const handleChange = (setter) => (e) => {
        let value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setter(value);
        } else {
            setter(0)
        }
    }

    return (
        <>
            <div className="title">
                <div className="first-line">
                    SPLI
                </div>
                <div className="second-line">
                    TTER
                </div>
            </div>

            <div className = "calculator">
                <div className = "touches">
                    <label>Bill</label>
                    <input value={bill} onChange={handleChange(setBill)}/>
                </div>
                <div>
                    <label>Select Tip</label>
                    <div>
                        <button>5%</button>
                        <button>10%</button>
                        <button>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <input placeholder = "Custom" value={tipPercent} onChange={handleChange(setTipPercent)}/>
                    </div>
                </div>
                <div>
                    <label>Number of People</label>
                    <input type= "number" value={amountPeople} onChange={handleChange(setAmountPeople) }/>
                </div>
                <div className = "screen">
                    <p>Tip Amount</p>
                    <p>/person</p>
                    <h1>$ {tipAmount}</h1>
                    <p>Total</p>
                    <p>/person</p>
                    <h1>$ {total}</h1>
                </div>
            </div>
            <div className="container">
            </div>
        </>
    );
}

export default Calculator;