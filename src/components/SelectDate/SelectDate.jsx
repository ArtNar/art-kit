import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { resetTime } from '../../utils/date';

import { Input } from '../Input';
import { Calendar } from '../Calendar';
import { Popper } from '../Popper';
import { Paper } from '../Paper';
import { ClickAwayListener } from '../ClickAwayListener';
import { makeMaskDate } from '../DateString';

const cn = _cn('select-date');

const SelectDate = ({
    className,
    disabled,
    required,
    fluid,
    id,
    error,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    onClose,
    placement,
    placeholder,
    value,
    type = 'text',
    mask = 'dd.mm.yyyy',
}) => {
    const [inputEl, setInputEl] = useState();

    const handleClickInput = (event) => {
        setInputEl(inputEl ? null : event.currentTarget);
    };

    const handleCloseCalendar = () => {
        setInputEl(null);

        if (onClose) {
            onClose();
        }
    };

    const handleChange = (date) => {
        if (onChange) {
            onChange(resetTime(date));
        }

        handleCloseCalendar();
    };

    const dateString = useMemo(() => makeMaskDate(mask)(value), [value, mask]);

    return (
        <div className={cx(cn(), className)}>
            <Input
                id={id}
                disabled={disabled}
                required={required}
                fluid={fluid}
                error={error}
                label={label}
                name={name}
                onBlur={onBlur}
                onClick={handleClickInput}
                onFocus={onFocus}
                placeholder={placeholder}
                type={type}
                value={dateString || ''}
                readOnly
            />
            <ClickAwayListener onClickAway={handleCloseCalendar}>
                <Popper
                    anchorEl={inputEl}
                    placement={placement}
                    open={Boolean(inputEl)}
                    onClose={handleCloseCalendar}
                >
                    <Paper elevation={1} padded={false}>
                        <Calendar
                            onDayClick={handleChange}
                            initialDate={value}
                        />
                    </Paper>
                </Popper>
            </ClickAwayListener>
        </div>
    );
};

SelectDate.propTypes = {
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    fluid: PropTypes.bool,
    error: PropTypes.node,
    label: PropTypes.node,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    placement: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    type: PropTypes.string,
    mask: PropTypes.string,
};

export default SelectDate;
