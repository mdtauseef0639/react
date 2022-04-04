import React, { useState } from 'react'
import Days from "./Days"
import Weekdays from './Weekdays';

export default function Calendar() {
    
    const d = new Date()
    

   
    
    const months = [ "January" ,"February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    
    const [date,setDate] = useState({
        month:d.getMonth(),
        year:d.getFullYear()
    })
    
    const firstDayIndex=new Date(date.year,date.month,1).getDay()
    console.log(firstDayIndex)
    const lastDay =  new Date(date.year,date.month+1,0).getDate();
    const prevLastDay = new Date(date.year,date.month,0).getDate();
    const lastDayIndex = new Date(date.year,date.month+1,0).getDay();

    const nextDay = 7-lastDayIndex-1;
    


    const prevDays = []
    const days = []
    const nextDays = []


   

    for(let x = firstDayIndex;x>0;x--)
    {
        prevDays.push(" ")
    }

   for(let i=1;i<lastDay+1;i++)
   {
       days.push(i)
   }

   
   
    
    function handleLeft()
    {
        setDate(prevValue=>{
            if(prevValue.month===0)
            {
                return{
                    month:11,
                    year:prevValue.year-1
                }
            }
            else
            {
                return{
                    month:prevValue.month-1,
                    year:prevValue.year
                }
            }
        })
        
    }

    function handleRight()
    {
        setDate(prevValue=>{
            if(prevValue.month===11)
            {
                return{
                    month:0,
                    year:prevValue.year+1
                }
            }
            else
            {
                return{
                    month:prevValue.month+1,
                    year:prevValue.year
                }
            }
        })

    }


    return (
      
    <div className="container">
        <div className="calendar">
            <div className="month">
                <i className="fas fa-angle-left prev" onClick={handleLeft}></i>
                <div className="date">
                    <h1>{months[date.month]}</h1>
                    <p>{new Date(date.year,date.month,d.getDate()).toDateString()}</p>
                </div>
                <i className="fas fa-angle-right next" onClick={handleRight}></i>
            </div>
            <Weekdays/>
            <Days prevDays={prevDays} days={days} nextDays={nextDays} date={date}/>

        </div>
    </div>
  )



  
}
