import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import './style.scss';

import { SwitchBase } from '../SwitchBase';

const cn = _cn('switch');

const Switch = React.forwardRef(({
    className,
    color = 'secondary',
    disabled,
    checked,
    ...rest
}, ref) => {
    const icon = <span className={cn('thumb')} />;

    return (
        <span
            className={cx(cn({
                color,
                disabled,
                checked,
            }), className)}
        >
            <SwitchBase
                type="checkbox"
                icon={icon}
                checkedIcon={icon}
                disabled={disabled}
                checked={checked}
                ref={ref}
                {...rest}
            />
            <span
                className={cn('track', {
                    disabled,
                    checked,
                })}
                disabled={disabled}
                checked={checked}
            />
        </span>
    );
});

Switch.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    checkedIcon: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'secondary', 'default']),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    id: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default Switch;
