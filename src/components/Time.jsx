import { current } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import './Time.css'



function Time ( {timeShow} ){ //timer에 state값을 받아옴
  

  const [today, setToday] = useState(new Date());

  // 선택한 요일 저장
  const [selectedWeek, setSelectedWeek] = useState(0);

  // 해당 요일에 운동번호
  const [exercisesNum, setExerciseNum] = useState(0);

  // 세트 수
  const [setNum, setSetNum] = useState(1);

  // 현재 시간 (초)
  const secRef = useRef(0);

  // 여기다가 REf을 사용해서 타이머 제거, 하나 더 뭔가 제거했음 그걸 만들어 둘거임 (왜냐면 계속 값을 저장해야되고 다른곳에서도 쓸 수 있게 변수로 뺄거임)
 const interval = useRef(); 
 const timeOut = useRef(); // 타이머가 종료되면 랜더링종료,set 초기화

 const clear = ()=>{
  clearInterval(interval.current);
  clearTimeout(interval.current);
  secRef.current=0;
 };


  useEffect(() => {
    // 1초마다 현재 시간 업데이트
    const time = setInterval(()=>{
      setToday(new Date ());
      
    },1000);

    // 타이머 제거
    return () => clearInterval(time); //하나도 모름 -> 다른 페이지로 나갔을 때 진행이 되지 않게끔 클리어작업
  },[]);

  const todayTime = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`; //절반만 앎


  const timer = (workTime) => {
    clear();
    interval.current = setInterval(()=>{
      secRef.current++; // 뭔가 이상함
    },1000)
  
  
  
   timeOut.current = setTimeout(()=>{
     alert('종료!')
     clear();
      secRef.current =0;  //90%앎 -> 초를 0으로 초기화

      if(exercisesNum < timeShow.schedule[selectedWeek].exercises.length -1)
              setExerciseNum(exercisesNum +1)
      else {
        setSetNum(setNum +1) //모르겠음
        setExerciseNum(0)
      }

  },workTime*1000);
  }
      

   
 



  return(
    <>
     <div>
      <div className="time">{todayTime}</div>

        <div>
          <label> 레벨  :</label> 

          {/* state값을 받아온 timeShow의 레벨을 표시해줌 */}
          <div className="levelName">{timeShow.level}</div> 
          
        </div>

        <label>요일 선택 : </label>

        <select onChange={(e)=>{
          setSelectedWeek(e.target.value)
          clear();
          setExerciseNum(0);
           }}>

          {
            timeShow.schedule.map  ((sche,i)=>{
            
            return(
              <option value={i} key={i}>{sche.day}</option>
              
             )
            })
          }
        </select>

          {
            setNum <= timeShow.sets  ?
  
            <div>
              <button  onClick={()=>{ 
                clear();
              timer(timeShow.schedule[selectedWeek].exercises[exercisesNum].workTime);
              
              let history = localStorage.getItem('startWorkTime') //로컬스토리지에 있는 데이터를 꺼내옴
              
              if (history === null){
  
                    localStorage.setItem('startWorkTime',JSON.stringify([
                      { 
                        history : dayjs(),
                        todayTime : todayTime,
                        level : timeShow.level,
                        name : timeShow.schedule[selectedWeek].exercises[exercisesNum].name,
                        workTime : timeShow.schedule[selectedWeek].exercises[exercisesNum].workTime,
                        sets : timeShow.schedule[selectedWeek].exercises[exercisesNum].sets,
                      } 
                    ]));
  
                }else {
                  
                  history = JSON.parse(history); //문자열 형태로 넣었으니 배열로 변환
    
                  let newHistory = {
    
                    history : dayjs(),
                    todayTime : todayTime,
                      level : timeShow.level,
                      name : timeShow.schedule[selectedWeek].exercises[exercisesNum].name,
                      workTime : timeShow.schedule[selectedWeek].exercises[exercisesNum].workTime,
                      sets : timeShow.schedule[selectedWeek].exercises[exercisesNum].sets,
    
                  }
  
                  history.push(newHistory); //if로 null인 상태의 값을 입력을 안 하면 꺼내올 데이터가 없어서 여기서 push가 안됨
    
                  localStorage.setItem('startWorkTime',JSON.stringify(history)); //문자열을 오브젝트로 변환해서 저장
                }
                
                
  
              }}>Start!</button>
            </div>
  
            :
  
            <h1>운동 끝</h1>
            
          }

        

        <h1>{setNum}세트</h1>
        
        <div>
          {
            selectedWeek !== null && timeShow.schedule[selectedWeek].exercises[exercisesNum].name
            + '' + timeShow.schedule[selectedWeek].exercises[exercisesNum].reps + '회'
          }
        </div>  

        <p>{timeShow.schedule[selectedWeek].exercises[exercisesNum].workTime}초</p>

        <h1>{secRef.current}</h1>
       

        </div>
      
    </>
    
  )
}

export default Time;