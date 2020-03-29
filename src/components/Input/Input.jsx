import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

import { InputHelperText } from '../InputHelperText';
import { InputLabel } from '../InputLabel';

const cn = _cn('input');

const Input = React.forwardRef(({
    className,
    color,
    disabled,
    required,
    error,
    fluid = false,
    id,
    name,
    label,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    outlined,
    readOnly,
    type = 'text',
    value,
    ...rest
}, ref) => {
    const inputRef = React.useRef();

    const [focused, setFocused] = React.useState(false);

    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    React.useEffect(() => {
        if (disabled && focused) {
            setFocused(false);

            if (onBlur) {
                onBlur();
            }
        }
    }, [disabled, focused, onBlur]);

    const handleFocus = (event) => {
        if (onFocus) {
            onFocus(event);
        }

        setFocused(true);
    };

    const handleBlur = (event) => {
        if (onBlur) {
            onBlur(event);
        }

        setFocused(false);
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
                    focused={focused}
                    shrink={!!value}
                >
                    {label}
                </InputLabel>
            )}
            <div
                className={cn('inner', {
                    disabled,
                    outlined,
                    focused,
                    fluid,
                    error,
                })}
                ref={ref}
                {...rest}
            >
                <input
                    className={cn('input', {
                        disabled,
                        focused,
                        outlined,
                        fluid,
                        error,
                    })}
                    disabled={disabled}
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    required={required}
                    value={value}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onClick={handleClick}
                />
            </div>
            <InputHelperText
                error={error}
                disabled={disabled}
            />
        </div>
    );
});

Input.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    fluid: PropTypes.bool,
    outlined: PropTypes.bool,
    id: PropTypes.string,
    multiline: PropTypes.bool,
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
};

export default Input;
