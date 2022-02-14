import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Assets/CSS/About.css';

function About() {
    const [selectedDate, setSelectedDate ] = useState(null)

    return (
        <div className="date-picker-container">
            <DatePicker 
            selected={selectedDate } 
            onChange={date => setSelectedDate(date) } 
            dateFormat='dd.MM.yyyy'
            // minDate={new Date()}
            // maxDate={new Date()}
            filterDate={ date => date.getDay() !== 6 && date.getDay() !== 0} 
            // filterDate te izslēdz sestdienas un svētdienas
            isClearable

            showYearDropdown
            scrollableMonthYearDropdown

            
            />
        </div>
    )
}

export default About;