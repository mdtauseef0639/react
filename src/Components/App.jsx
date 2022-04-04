import React, { useState } from 'react'

export default function App() {
    
    const d = new Date()
   
    
    const months = [ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    
    const [date,setDate] = useState({
        month:d.getMonth(),
        year:d.getFullYear()
    }) 

    const lastDay =  new Date(date.year,date.month+1,0).getDate();

   const days = []

   for(let i=1;i<lastDay;i++)
   {
       days.push(i)
   }
   console.log(days)
    
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
            <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            {/* <div className="days">
            {
                days.map((i)=>{
                    if(new Date(date.getFullYear(),date.getMonth(),i).getDay()==0 || new Date(date.getFullYear(),date.getMonth(),i).getDay()==6)
                {
                    if(i===new Date().getDate() && date.getMonth() === new Date().getMonth())
                {
                    
                    <div class="today weekends">${i}</div>;
                    
                }
                else{
                    <div class="weekends">${i}</div>
                
                }
                }
                else{
                    if(i===new Date().getDate() && date.getMonth() === new Date().getMonth())
                {
                    
                       <div class="today">${i}</div>
            
                }
                else{
                <div>${i}</div>
                }
                }
                  })
              }
            
    </div> */}
        </div>
    </div>
  )



  
}
