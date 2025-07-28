import { useEffect, useRef, useState } from "react";



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


  useEffect(() => {
    // 1초마다 현재 시간 업데이트
    const time = setInterval(()=>{
      setToday(new Date ());
      
    },1000);

    // 타이머 제거
    return () => clearInterval(time); //하나도 모름
  },[]);

  const todayTime = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 
  ${today.getHours()}: ${today.getMinutes()}: ${today.getSeconds()}`; //절반만 앎


  const timer = (workTime) => {
    const timer = setInterval(()=>{
      secRef.current++; // 뭔가 이상함
    },1000)
  

  setTimeout(()=>{
    clearInterval(timer)
    alert('종료!')
    secRef.current = 0;  //90%앎

    if(exercisesNum < timeShow.schedule[selectedWeek].exercises.length -1)
      setExerciseNum(exercisesNum +1)
    else {
      setSetNum(setNum +1) //모르겠음
      setExerciseNum(0)
    }

  }, workTime * 1000)
}

  return(
    <>
     <div>
      <div>{todayTime}</div>

        <div>
          <label> 레벨  :</label> 

          {/* state값을 받아온 timeShow의 레벨을 표시해줌 */}
          <div className="levelName">{timeShow.level}</div> 
          
        </div>

        <label>요일 선택 : </label>

        <select onChange={(e)=>{
          setSelectedWeek(e.target.value)
          
           }}>

          {
            timeShow.schedule.map  ((sche,i)=>{
            
            return(
              <option value={i} key={i}>{sche.day}</option>
             )
            })
          }

        </select>

        <h1>{setNum}세트</h1>
        
        <div>
          {
            selectedWeek !== null && timeShow.schedule[selectedWeek].exercises[exercisesNum].name
            + '' + timeShow.schedule[selectedWeek].exercises[exercisesNum].reps + '회'
          }
        </div>  

        <p>{timeShow.schedule[selectedWeek].exercises[exercisesNum].workTime}초</p>

        <h1>{secRef.current}</h1>

        {
          setNum !== timeShow.sets +1 ?

          <div>
            <button onClick={()=>{ 
            timer(timeShow.schedule[selectedWeek].exercises[exercisesNum].workTime);
            }}>Start!</button>
          </div>

          :

          <h1>운동 끝</h1>
          
        }
       

        </div>
    </>
  )
}

export default Time;