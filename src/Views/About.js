import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Assets/CSS/About.css';

function About() {
    const [selectedDate, setSelectedDate] = useState(new Date())  //vai arī iekavās new Date vietā - null, ja negrib datumu jau defaultā


    return (
        <div className="date-picker-container">
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd.MM.yyyy'
                // minDate={new Date()}
                // maxDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                // filterDate te izslēdz sestdienas un svētdienas
                isClearable

                showYearDropdown
                scrollableMonthYearDropdown

                placeholderText="Pick a date!"
                closeOnScroll={(e) => e.target === document}  //calender closes by starting to scroll the page
                showTimeSelect
                // inline  //shows the calender

                // timeInputLabel="Time:"
                // dateFormat="MM/dd/yyyy h:mm aa"
                // showTimeInput

            />
        </div>
    )
}

export default About;