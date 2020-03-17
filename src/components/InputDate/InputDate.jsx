import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import './style.scss';

import { Input } from '../Input';
import { Calendar } from '../Calendar';
import { Popper } from '../Popper';
import { ClickAwayListener } from '../ClickAwayListener';

const cn = _cn('input-date');

const InputDate = ({
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
            onChange(date);
        }

        handleCloseCalendar();
    };

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
                value={value}
                readOnly
            />
            <ClickAwayListener onClickAway={handleCloseCalendar}>
                <Popper
                    anchorEl={inputEl}
                    placement={placement}
                    open={Boolean(inputEl)}
                    onClose={handleCloseCalendar}
                >
                    <Calendar
                        onDayClick={handleChange}
                        initialDate={value}
                    />
                </Popper>
            </ClickAwayListener>
        </div>
    );
};

InputDate.propTypes = {
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
};

export default InputDate;
