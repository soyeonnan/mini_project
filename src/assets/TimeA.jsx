// import { useEffect, useState } from "react";
// import { routineTime } from "../pages/Routine";


// function Time (){
//   const [start,setStart] = useState(false);

//   const [today, setToday] = useState(new Date());

//   const [exercisesNum, setExercisesNum] = useState(0);
//   const [flag, setFlag] = useState(1);

//   // 초보자 - 월요일
//   const arr = routineTime[0].schedule[0];
//   // console.log(arr)

//   useEffect(() => {
//     // 1초마다 현재 시간 업데이트
//     const time = setInterval(()=>{
//       setToday(new Date ());
      
//     },1000);

//     // 타이머 제거
//     return () => clearInterval(time);
//   },[]);

//   const todayTime = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 
//   ${today.getHours()}: ${today.getMinutes()}: ${today.getSeconds()}`;

//   function rest() {
//     setTimeout(() => {
//       if( exercisesNum < arr.exercises.length - 1 ) {
//         console.log('운동으로')
//         setExercisesNum( exercisesNum + 1);
//         setFlag(1)
//       } else if(exercisesNum === arr.exercises.length - 1) {
//         setExercisesNum( 0 );
//         setFlag(1)
//         setStart(true);
//       }
//     }, arr.restTimeBetweenSets * 100)
//   }

//   useEffect(() => {
//     if (!start) return;

//     const timer = setTimeout(() => {

//         console.log('휴식으로')
//         setFlag(0)
//         rest()
      
      
//     }, arr.exercises[exercisesNum].workTime * 100)
        
//     return () => clearTimeout(timer);
//   }, [exercisesNum,start])
  
//   return(
//     <>
//      <div>
//       <div>{todayTime}</div>

//         <div>
//           {!start && '시작버튼을 누르시오'}
//           {start && flag===1 && `${arr.exercises[exercisesNum].name}`}
//           {start && flag===0 && '휴식'}
//         </div>

//       <div><button onClick={()=>{ 
//         setStart(true);
//         setFlag(1);
//         setExercisesNum(0);


//       }}>Start!</button></div>

      
//      </div>
//     </>
//   )
// }

// export default Time;