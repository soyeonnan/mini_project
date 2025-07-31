import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SecondHeader from "../components/SecondHeader";
import Button from 'react-bootstrap/Button';
import { routineTime } from "./Routine";
import { useEffect, useState } from "react";

function Start() {
  const routineTimeShow = useLocation();
  const navigate = useNavigate();

  let show = [
    {
      name:'선택',
      link:'/start'
    },
   
    {
      name:'개인설정',
      link:'/start/setting'
    },
  ]

 
  
  return(
    <>
      <SecondHeader show={show}/>

      {
        routineTimeShow.pathname === '/start' ? 
        
        routineTime.map((time,i)=>{
          
          return (
            <div className={`d-grid gap-${i}`} key={i}>
            <Button variant="primary" size="lg" onClick={()=> {

              navigate('/start/timer', {state : time})
            }}>
              {time.level}
              
            </Button>
          </div>
          )
        })
        
        :
        ''
      }



      <Outlet/>
    </>
  )
}

export default Start;