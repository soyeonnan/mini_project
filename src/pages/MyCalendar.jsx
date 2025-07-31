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
    workoutDay = JSON.parse(workoutDay)
    // 가져온게 문자열이라서 배열로 변환(오브젝트 형태)
   
    let historyDay = workoutDay.map((history)=>history.todayTime)
    console.log(historyDay);

  return (

    <Center  >
      
      <Calendar 
      size="xl"
      mt={50}
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        return (
          
          <Indicator size={6} color="red" offset={-2} disabled={day !== 20}>
            <div>{day}</div>
          </Indicator>
        );
      }}
      />

    </Center>
    
    
  );
}


export default MyCalendar;