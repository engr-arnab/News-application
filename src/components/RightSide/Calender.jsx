// import React from 'react'
import './Calender.css'
import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';



const Calender = () => {
  const [value, setValue] = React.useState(dayjs());
  return (
    <div className='Calender'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            day: (ownerState) => ({
              className: ownerState.selected ? 'selected-day' : '',
            }),
          }}
        />
      </LocalizationProvider>
    </div>
  )
}

export default Calender
