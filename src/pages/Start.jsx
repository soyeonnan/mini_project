import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SecondHeader from "../components/SecondHeader";
import { routineTime } from "./Routine";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Button, Center, Flex } from "@mantine/core";
import './Start.css';

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
      
        <Flex 
                
          className={`d-grid `}
          mt={100}
          h="50vh"
          mih={50}
          gap="xs"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          >
            
        {
          routineTimeShow.pathname === '/start' ? 
          
          routineTime.map((time,i)=>{
            
            return (
            
                

                  <Button variant="filled" color="orange" size="xl" radius="lg" w={300} onClick={()=> {

                    navigate('/start/timer', {state : time})
                    }}>
                    {time.level}
                    
                  </Button>

              
            )
          })
          
          :
          ''
        }


        </Flex>

      <Outlet/>
    </>
  )
}

export default Start;