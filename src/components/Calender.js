import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


// import SimpleReactCalendar from 'simple-react-calendar'

function Calender(props) {
    const onChange = data =>{
        setValue(data)
        console.log(data)
    }
    const [value, setValue] = useState(new Date());
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
            {/* <SimpleReactCalendar activeMonth={new Date()} /> */}
        </div>
    );
}

export default Calender;