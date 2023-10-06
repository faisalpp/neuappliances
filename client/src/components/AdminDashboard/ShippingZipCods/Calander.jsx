import React,{useState,useEffect} from 'react'
import {startOfMonth, endOfMonth, eachDayOfInterval, format} from 'date-fns'

const Calander = () => {

    const [selectedDates, setSelectedDates] = useState([]);
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    // Generate an array of dates for the current month
    const calendarDatas = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
    const [calendarData, setCalendarData] = useState([...calendarDatas]);

  
    const handleDateClick = (date) => {
      const updatedSelectedDates = [...selectedDates];
      const dateIndex = updatedSelectedDates.indexOf(date);
  
      if (dateIndex === -1) {
        updatedSelectedDates.push(date);
      } else {
        updatedSelectedDates.splice(dateIndex, 1);
      }
  
      setSelectedDates(updatedSelectedDates);
    };
  
    const saveSelectedDates = () => {
      localStorage.setItem('selectedDates', JSON.stringify(selectedDates));
    };

  return (
    <div className='w-full' >
      <h4 className='text-sm font-semibold mb-1'  >Set Calander Dates</h4>
      <div className='grid grid-cols-5 gap-x-2 gap-y-2 border-[1px] border-b6 rounded-lg px-2 py-2' >
        {calendarData.map((date) => (
          <div
            key={date}
            onClick={() => handleDateClick(date)}
            style={{
              cursor: 'pointer',
              backgroundColor: selectedDates.includes(date) ? 'blue' : 'white',
            }}
            className='flex items-center justify-center rounded-md border-[1px] bg-b5 shadow-lg cursor-pointer '
          >
            {format(date, 'dd')}
          </div>
        ))}
      </div>
      {/* <button onClick={saveSelectedDates}>Save Selected Dates</button> */}
    </div>
  )
}

export default Calander