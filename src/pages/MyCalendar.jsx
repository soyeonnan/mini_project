import React, { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Center, Indicator, MantineProvider, useMantineTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  

  let workoutDay = localStorage.getItem('startWorkTime') 
    // 로컬스토리지에 있는 운동 기록 가져옴
    workoutDay = workoutDay ? JSON.parse(workoutDay) : [];
    // 가져온게 문자열이라서 배열로 변환(오브젝트 형태)
   
  let data =  workoutDay[0].todayTime.replace(/[가-힣]/g, '')
  data = data.split(' ')
  let now = new Date(data[0], data[1], data[2])
  // now = now.replace(/[가-힣]/g, '-')
  //  let history = new Date(workoutDay[0].todayTime);


  
  let historyDay = workoutDay.map((history)=>{
    let data = history.todayTime.replace(/[가-힣]/g, '');
    data = data.split(' ')
    return (
      `${data[0]}-${data[1]}-${data[2]}`
    )
  });
  console.log(historyDay);


  

  return (

    <Center  >
      
      <Calendar 
      size="xl"
      mt={50}
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        const month = dayjs(date).month()+1;
        const year = dayjs(date).year();
        return (
          
          <Indicator size={6} color="green" offset={-2} disabled={!historyDay.includes(`${year}-${month}-${day}`)}>
            <div>{day}</div>
          </Indicator>
        );
      }}
      />

    </Center>
    
    
  );
}


export default MyCalendar;