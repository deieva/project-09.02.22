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
            minDate={new Date()}
            />
        </div>
    )
}

export default About;