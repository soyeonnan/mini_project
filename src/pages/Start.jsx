import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SecondHeader from "../components/SecondHeader";
import { routineTime } from "./Routine";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Button, Center, Flex } from "@mantine/core";


function Start() {
  const routineTimeShow = useLocation(); //경로
  const navigate = useNavigate();

  // 세컨드헤더 
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
      <SecondHeader show={show} />

      {/* 삼항연산자를 사용해서 주소가 /start일 때만 버튼들이 보이게 함 */}
      {routineTimeShow.pathname === '/start' && (

        // 라이브러리에서 지정 된 CSS 스타일 적용
        <Flex
          className="d-grid"
          mt={100}
          h="50vh"
          mih={50}
          gap="xs"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >

          {/* 라이브러리 적용 된 CSS를 설정하고 map을 사용해서 같은 주소가 나오면 경로를 onclick 이벤트로 적용함 */}
          {routineTime.map((time, i) => (
            <Button
              key={i}
              variant="filled"
              color="orange"
              size="xl"
              radius="lg"
              w={300}
              onClick={() => {
                navigate('/start/timer', { state: time });
              }}
            >
              {/* 레벨이 같으면 버튼 이름으로 지정 */}
              {time.level}
            </Button>
          ))}
        </Flex>
      )}

      <Outlet/>
    </>
  )
}

export default Start;