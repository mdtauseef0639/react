import React, { useState } from 'react'
import Days from './Days';

export default function App() {
    
    // d.setDate(1);
    const months = [ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    const [date,setDate] = useState(new Date()); 

    const lastDay =  new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const days = [];
    for(let i=1;i<=lastDay;i++)
    {
        days.push(i)
    }
    function handleLeft()
    {
        setDate(date.setMonth()-1)
        
    }

    function handleRight()
    {
        setDate(date.setMonth()+1)

    }


    return (
      
    <div className="container">
        <div className="calendar">
            <div className="month">
                {/* <i className="fas fa-angle-left prev" onClick={handleLeft}></i> */}
                <button onClick={handleLeft}>{"<"}</button>
                <div className="date">
                    <h1>{months[date.getMonth()]}</h1>
                    <p>{date.toDateString()}</p>
                </div>
                <i className="fas fa-angle-right next" onClick={handleRight}></i>
            </div>
            <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className="days">
        <Days date ={date}days={days}/>
    </div>
        </div>
    </div>
  )
}
