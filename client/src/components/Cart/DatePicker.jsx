import React, { useState } from 'react';
import { CaptionProps, DayPicker, useNavigation } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format, isBefore } from 'date-fns';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const CustomCaption = ({ CaptionProps, displayMonth }) => {
    const { goToMonth, nextMonth, previousMonth } = useNavigation();

    return (
        <div className='flex items-center justify-between'>
            <button
                disabled={!previousMonth}
                onClick={() => previousMonth && goToMonth(previousMonth)}
            >
                <AiFillCaretLeft className='text-b3' />
            </button>
            <span className='text-[#212121] font-semibold'>
                {format(displayMonth, 'MMMM yyy')}
            </span>
            <button
                disabled={!nextMonth}
                onClick={() => nextMonth && goToMonth(nextMonth)}
            >
                <AiFillCaretRight className='text-b3' />
            </button>
        </div>
    )

}

const DatePIcker = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDayClick = (date) => {
        // if (isBefore(date, new Date())) {
        //     // Disable selection of previous dates
        //     return;
        // }
        setSelectedDate(date);
    };

    const disabledDays = {
        before: new Date()
    };
    return (
        <DayPicker
            selected={selectedDate}
            onDayClick={handleDayClick}
            disabledDays={disabledDays}
            components={{
                Caption: CustomCaption
            }}
        />
    )
}

export default DatePIcker