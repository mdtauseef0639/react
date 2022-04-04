import React from 'react'

export default function Days(props) {
  {
      const days=""
      const date = props.date
      props.days.map((i)=>{
        if(new Date(date.getFullYear(),date.getMonth(),i).getDay()==0 || new Date(date.getFullYear(),date.getMonth(),i).getDay()==6)
    {
        if(i===new Date().getDate() && date.getMonth() === new Date().getMonth())
    {
        
        days +=`<div class="today weekends">${i}</div>`;
        return days
    }
    else{
    days +=`<div class="weekends">${i}</div>`;
    return days
    }
    }
    else{
        if(i===new Date().getDate() && date.getMonth() === new Date().getMonth())
    {
        
        days +=`<div class="today">${i}</div>`;
        return days
    }
    else{
    days +=`<div>${i}</div>`;
    return days
    }
    }
      })
  }
}
