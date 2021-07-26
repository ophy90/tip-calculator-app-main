import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './slot.styles.scss';

const Slot = () => {

    // const startHourValue = new Date();
    // const [date, setDate] = useState(0);
    const [startHour, setStartHour] = useState({letStart: new Date(2021-7-26)});
    const [endHour, setEndHour] = useState({letEnd: new Date(2021-7-27)});

    // useState((props) => {
    //     setDate(date ===  new Date());
    // },endHour);

    useState((props) => {
        setStartHour(startHour + 30);
        },startHour);

    useState((props) => {
        setEndHour(endHour + 30);
    },endHour);


    return (
        <>
            <div className={'hello'}>
                <button>Add a slot</button>
                {/*<h1>{date}</h1>*/}
                <h1>{startHour}</h1>
                <h1>{endHour}</h1>
                {/*<DatePicker*/}
                {/*    selected={startHour}*/}
                {/*    onChange={(date) => setDate(date)}*/}
                {/*    timeFormat="HH:mm"*/}
                {/*    timeIntervals={30}*/}
                {/*    timeCaption="time"*/}
                {/*    dateFormat="MM-dd-yyyy h:mm"*/}
                {/*/>*/}
            </div>
        </>
    );
}

export default Slot;
