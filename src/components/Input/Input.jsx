import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { InputHelperText } from '../InputHelperText';
import { InputLabel } from '../InputLabel';
import {
    SuccessOutlinedIcon,
    ReportProblemOutlinedIcon,
    ErrorOutlineIcon,
} from '../Icons';

const defaultIconMapping = {
    success: <SuccessOutlinedIcon />,
    warning: <ReportProblemOutlinedIcon />,
    danger: <ErrorOutlineIcon />,
    normal: null,
};
const cn = _cn('input');

const Input = React.forwardRef(({
    className,
    placeholder,
    disabled,
    readOnly,
    required,
    error,
    fluid,
    id,
    name,
    label,
    onBlur,
    onChange,
    onClick,
    onKeyDown,
    onKeyUp,
    onFocus,
    type = 'text',
    value,
    view = 'normal',
    ...rest
}, ref) => {
    const inputRef = React.useRef();

    const handleFocus = (event) => {
        if (onFocus) {
            onFocus(event);
        }
    };

    const handleBlur = (event) => {
        if (onBlur) {
            onBlur(event);
        }
    };

    const handleChange = (event, ...args) => {
        if (onChange) {
            onChange(event, ...args);
        }
    };

    const handleClick = (event) => {
        if (inputRef.current && event.currentTarget === event.target) {
            inputRef.current.focus();
        }

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <div className={cx(cn(), className)}>
            {label && (
                <InputLabel
                    htmlFor={id}
                >
                    {label}
                </InputLabel>
            )}
            <div
                ref={ref}
                className={cn('inner', {
                    disabled,
                    fluid,
                    view: error ? 'danger' : view,
                })}
            >
                <input
                    {...rest}
                    className={cn('input', { view: error ? 'danger' : view })}
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onClick={handleClick}
                />
                {view && defaultIconMapping[view] && (
                    <div className={cn('icon')}>
                        {React.cloneElement(defaultIconMapping[view], {
                            size: 's',
                        })}
                    </div>
                )}
            </div>
            <InputHelperText
                disabled={disabled}
                error
            >
                {error}
            </InputHelperText>
        </div>
    );
});

Input.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
    ]),
    view: PropTypes.oneOf(['normal', 'danger', 'success', 'warning']),
};

export default Input;
