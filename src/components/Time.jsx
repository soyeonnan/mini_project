import { useEffect, useState } from "react";
import { routineTime } from "../pages/Routine";


function Time ( {timeShow} ){ //timer에 state값을 받아옴
  const [level,setLevel] = useState();
  const [start,setStart] = useState(false);

  const [today, setToday] = useState(new Date());

 

  // 초보자 - 월요일
  const arr = routineTime[0].schedule[0];
  // console.log(arr)

  useEffect(() => {
    // 1초마다 현재 시간 업데이트
    const time = setInterval(()=>{
      setToday(new Date ());
      
    },1000);

    // 타이머 제거
    return () => clearInterval(time);
  },[]);

  const todayTime = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 
  ${today.getHours()}: ${today.getMinutes()}: ${today.getSeconds()}`;

 

 
        
  
  
  return(
    <>
     <div>
      <div>{todayTime}</div>

        <div>
          <label> 레벨  :</label>
          <div>{timeShow.level}</div>
        </div>

        {
          timeShow.map = ((time,i)=>{
            
            <div>
            <label>요일 선택 : 
              
              <select>{time.schedule[i].day[i]}
                <option value="">{time.schedule[i]}</option>
              </select>
            </label>
          </div>

          })
        }

      <div><button onClick={()=>{ 
        setStart(true);
       

      }}>Start!</button></div>

      
     </div>
    </>
  )
}

export default Time;