import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Test = () => {
    const marks = {
        9: '9',
        99: '99',
        999: '999',
        9999: '9999',
        99999: '99999',
    };

    const step = 1;
    const defaultValue = 99;

    const handleChange = (value) => {
        // You can perform any logic here when the value changes
        console.log(value);
    };

    const handleBeforeChange = (value) => {
        // Round the value to the nearest available mark
        const marksKeys = Object.keys(marks).map(Number);
        const roundedValue = marksKeys.reduce((acc, cur) => (
            Math.abs(cur - value) < Math.abs(acc - value) ? cur : acc
        ));

        return roundedValue;
    };

    return (
        <div className='p-20'>
            <Slider
                min={9}
                max={99999}
                step={step}
                marks={marks}
                defaultValue={defaultValue}
                onChange={handleChange}
                onBeforeChange={handleBeforeChange}
            />
        </div>
    );
};

export default Test;
