import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { makeMaskDate } from './utils';

const cn = _cn('date-string');

const DateString = React.forwardRef(({
    className,
    date: dateProp,
    mask = 'dd.mm.yyyy HH:MM',
    ...rest
}, ref) => {
    const date = useMemo(() => makeMaskDate(mask)(dateProp), [dateProp, mask]);

    return (
        <span
            className={cx(cn(), className)}
            ref={ref}
            {...rest}
        >
            {date}
        </span>
    );
});

DateString.propTypes = {
    className: PropTypes.string,
    date: PropTypes.shape({}),
    mask: PropTypes.string,
};

export default DateString;
