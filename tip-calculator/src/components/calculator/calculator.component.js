import React, {useEffect, useState} from "react";

import './calculator.styles.scss';


const Calculator = (props) => {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [amountPeople, setAmountPeople] = useState(1);
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
                    <div className = "touches-bill">
                        <label>Bill</label>
                        <div className = "touches-bill-icon">
                            <i className="fas fa-dollar-sign"/>
                            <input value={bill} onChange={handleChange(setBill)}/>
                        </div>
                    </div>
                    <div className = "touches-tip">
                        <label>Select Tip %</label>
                        <div className = "touches-choose-tip">
                            <button>5%</button>
                            <button>10%</button>
                            <button>15%</button>
                            <button>25%</button>
                            <button>50%</button>
                            <input placeholder = "Custom" value={tipPercent} onChange={handleChange(setTipPercent)}/>
                        </div>
                    </div>
                    <div className = "touches-amount-people">
                        <label>Number of People</label>
                        <div className="touches-people-icon">
                            <i className="fas fa-user"/>
                            <input type= "number" value={amountPeople} onChange={handleChange(setAmountPeople) }/>
                        </div>
                    </div>
                </div>
                <div className = "screen">
                    <div className = "screen-tip">
                        <div className = "screen-description-tip">
                            <p>Tip Amount</p>
                            <p>/person</p>
                        </div>
                        <div className = "screen-amount-tip">
                            <h1 >$ {tipAmount}</h1>
                        </div>
                    </div>
                    <div className = "screen-total">
                        <div className = "screen-description-total">
                            <p>Total</p>
                            <p>/person</p>
                        </div>
                        <div className = "amount-total">
                            <h1>$ {total}</h1>
                        </div>
                    </div>
                    <div>
                        <button className="reset">RESET</button>
                    </div>

                </div>
            </div>
            <div className="container">
            </div>
        </>
    );
}

export default Calculator;