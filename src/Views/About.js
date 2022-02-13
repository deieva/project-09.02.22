import React, { useState } from "react";
import DatePicker from 'react-datepicker';

function About() {
    const [selectedDate, setSelectedDate ] = useState(null)

    return (
        <div>
            <DatePicker selected={selectedDate } onChange={date => setSelectedDate(date) } />
        </div>
    )
}

export default About;