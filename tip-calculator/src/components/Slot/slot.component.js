import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './slot.styles.scss';

const Slot = () => {

    let date = (new Date()).toLocaleString();
    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date(startHour.getTime()+ 1800000));

    // useState((props) => {
    //     setStartHour(startHour);
    //     }, startHour);
    //
    //
    // useState((props) => {
    //     setEndHour(new Date(startHour.getHours() + 2));
    //     setEndHour(startHour.getTime() + (30));
        // setEndHour(startHour.setMinutes(startHour.getMinutes() + 30));
        // console.log(endHour)
    // },startHour, endHour);


    return (
        <>
            <div className={'hello'}>
                <button>Add a slot</button>
                {/*<h1>{date}</h1>*/}
                <h1>{startHour.toLocaleString()}</h1>
                <h1>{endHour.toLocaleString()}</h1>
                {/*<h4>{`${dateTime}`}</h4>*/}
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
