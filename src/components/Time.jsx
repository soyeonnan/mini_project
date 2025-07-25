import { useEffect, useState } from "react";


function Time (){
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간 업데이트
    const time = setInterval(()=>{
      setToday(new Date ());
    },1000);

    // 다른 페이지 가면 타이머 제거
    return () => clearInterval(time);
  },[]);

  const todayTime = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 
  ${today.getHours()}: ${today.getMinutes()}: ${today.getSeconds()}`;


  

  return(
    <>
     <div>
      {todayTime}
     </div>
    </>
  )
}

export default Time;