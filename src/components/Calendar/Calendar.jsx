import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('calendar');

const Calendar = ({
    className,
    onDayClick,
    initialDate,
}) => {
    const [selectedDays, setSelectedDays] = useState(initialDate);

    const handleDayClick = (day, { selected }) => {
        if (selected) {
            // Unselect the day if already selected
            setSelectedDays(undefined);
            return;
        }
        setSelectedDays(day);

        if (onDayClick) {
            onDayClick(day);
        }
    };
    return (
        <DayPicker
            className={cx(cn(), className)}
            onDayClick={handleDayClick}
            selectedDays={selectedDays}
        />
    );
};

Calendar.propTypes = {
    initialDate: PropTypes.instanceOf(Date),
    className: PropTypes.string,
    onDayClick: PropTypes.func,
};

export default Calendar;
