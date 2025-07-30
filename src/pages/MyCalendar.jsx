import React, { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Indicator, MantineProvider, useMantineTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  

  return (
  

      <Calendar
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
      />

    
    
  );
}


export default MyCalendar;