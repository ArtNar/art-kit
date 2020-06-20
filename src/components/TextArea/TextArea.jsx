import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('text-area');

const TextArea = React.forwardRef(({
    className,
    disabled,
    error,
    minHeight = 1,
    maxHeight,
    maxLength,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    required,
    value: valueProp,
}, ref) => {
    const inputRef = useRef(null);
    const shadowRef = useRef(null);

    const handleFocus = (event) => onFocus && onFocus(event);

    const handleBlur = (event) => onBlur && onBlur(event);

    const handleChange = (event) => onChange && onChange(event);

    const updateHeight = () => {
        if (!inputRef || !shadowRef) {
            return;
        }

        const { style } = inputRef.current;
        const { scrollHeight } = shadowRef.current;

        const height = maxHeight
            ? Math.min(scrollHeight, maxHeight)
            : scrollHeight;

        style.height = `${Math.max(height + 6, minHeight)}px`;
    };

    useEffect(() => {
        updateHeight();
    }, [valueProp]);

    const value = valueProp || '';

    return (
        <div
            ref={ref}
            className={cx(cn(), className)}
        >
            <textarea
                ref={inputRef}
                name={name}
                value={value}
                disabled={disabled}
                required={required}
                maxLength={maxLength}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
            />
            <textarea
                ref={shadowRef}
                className={cn('hidden')}
                value={value}
                tabIndex={-1}
                readOnly
                aria-hidden
            />
        </div>
    );
});

TextArea.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    maxLength: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
};

export default TextArea;
