import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import CheckedIcon from '../Icons/Checked';

const cn = _cn('checkbox');

const Checkbox = React.forwardRef(({
    checked: checkedProp = '',
    className,
    disabled,
    readOnly,
    required,
    id,
    label,
    onChange,
    value = '',
    inputProps,
    padded,
    ...rest
}, ref) => {
    const checkBoxRef = ref || useRef(null);

    const [checked, setChecked] = useState(checkedProp);

    const handleInputChange = (event) => {
        const newChecked = event.target.checked;

        setChecked(newChecked);

        if (onChange) {
            onChange(event, newChecked);
        }
    };

    return (
        <span className={cx(cn({ disabled, padded }), className)}>
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
    );
});

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    inputProps: PropTypes.shape({}),
    onChange: PropTypes.func,
    required: PropTypes.bool,
    padded: PropTypes.bool,
    value: PropTypes.string,
};

export default Checkbox;
