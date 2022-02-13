import React, { useState } from "react";
import DatePicker from 'react-datepicker';

function About() {
    const [selectedDate, setSelectedDate ] = useState(null)

    return (
        <div>
            <DatePicker 
            selected={selectedDate } 
            onChange={date => setSelectedDate(date) } 
            dateFormat='dd.MM.yyyy'
            // minDate={new Date()}
            // maxDate={new Date()}
            filterDate={ date => date.getDay() !== 6 && date.getDay() !== 0} 
            // filterDate te izslēdz sestdienas un svētdienas
            />
        </div>
    )
}

export default About;