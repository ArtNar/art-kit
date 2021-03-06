import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { InputHelperText } from '../InputHelperText';
import CheckedIcon from '../Icons/Checked';

const cn = _cn('checkbox');

const Checkbox = React.forwardRef(({
    className,
    disabled,
    error,
    readOnly,
    required,
    id,
    label,
    onChange,
    value = false,
    inputProps,
    ...rest
}, ref) => {
    const checkBoxRef = ref || useRef(null);

    const [checked, setChecked] = useState(value);

    const handleInputChange = (event) => {
        const newChecked = event.target.checked;

        setChecked(newChecked);

        if (onChange) {
            onChange(event, newChecked);
        }
    };

    return (
        <div className={cx(cn(), className)}>
            <span className={cn('content', { disabled })}>
                <div
                    key="icon"
                    className={cn('icon', { disabled, checked })}
                >
                    <input
                        className={cn('input')}
                        checked={checked}
                        disabled={disabled}
                        id={id}
                        onChange={handleInputChange}
                        readOnly={readOnly}
                        ref={checkBoxRef}
                        required={required}
                        type="checkbox"
                        value={value}
                        {...inputProps}
                        {...rest}
                    />
                    {checked && <CheckedIcon />}
                </div>
                {label && (
                    <span className={cn('label', { disabled })}>
                        {label}
                    </span>
                )}
            </span>
            <InputHelperText
                disabled={disabled}
                error
            >
                {error}
            </InputHelperText>
        </div>
    );
});

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    readOnly: PropTypes.bool,
    label: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    inputProps: PropTypes.shape({}),
    onChange: PropTypes.func,
    required: PropTypes.bool,
    padded: PropTypes.bool,
    value: PropTypes.bool,
};

export default Checkbox;
