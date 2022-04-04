import React from 'react'

export default function Days(props) {
  return (
    <div className="days">       
            {
                props.prevDays.map((x)=>{
                    if(new Date(props.date.year,props.date.month-1,props.prevLastDay - x +1).getDay()===0 || new Date(props.date.year,props.date.month-1,props.prevLastDay - x +1).getDay()===6)
                    {
                        return <div class="prev-date weekends">{x}</div>
                    }
                    else{
                        return <div class="prev-date">{x}</div>
                    }
                    }
                )
            }
            {
                props.days.map((i)=>{
                    if(new Date(props.date.year,props.date.month,i).getDay()===0 || new Date(props.date.year,props.date.month,i).getDay()===6)
                    {
                        if(i===new Date().getDate() && props.date.month === new Date().getMonth())
                        {
        
                            return <div class="today weekends">{i}</div>
                        }
                        else{
                            return <div class="weekends">{i}</div>;
                        }
                    }
                    else{
                            if(i===new Date().getDate() && props.date.month === new Date().getMonth())
                            {
        
                                return <div class="today">{i}</div>
                            }
                            else{
                                return <div>{i}</div>
                            }
                        }
                })
            }

            {
                props.nextDays.map((j)=>{
                    if(new Date(props.date.year,props.date.month+1,j).getDay()===0 || new Date(props.date.year,props.date.month+1,j).getDay()===6)
                    {
                        return <div class="next-date weekends">{j}</div>;
                    }
                    else{
                        return <div class="next-date">{j}</div>;
                    }
                })
            }
                   
            </div>
  )
}

