import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';

const cn = _cn('switch-base');

const SwitchBase = React.forwardRef(({
    className,
    checked = '',
    checkedIcon,
    disabled,
    icon,
    id,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    type,
    value = '',
    ...rest
}, ref) => {
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

    const handleInputChange = (event) => {
        const newChecked = event.target.checked;

        if (onChange) {
            onChange(event, newChecked);
        }
    };

    return (
        <div
            className={cx(cn({
                disabled,
                checked,
            }), className)}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            checked={checked}
            ref={ref}
            {...rest}
        >
            <input
                className={cn('input')}
                checked={checked}
                disabled={disabled}
                id={id}
                name={name}
                onChange={handleInputChange}
                readOnly={readOnly}
                required={required}
                type={type}
                value={value}
            />
            {checked ? checkedIcon : icon}
        </div>
    );
});

SwitchBase.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    checkedIcon: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    icon: PropTypes.node.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
};

export default SwitchBase;
