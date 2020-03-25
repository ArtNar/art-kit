import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import { SwitchBase } from '../SwitchBase';

import RadioButtonUncheckedIcon from '../Icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '../Icons/RadioButtonChecked';

const cn = _cn('radio');

const defaultCheckedIcon = <RadioButtonCheckedIcon />;
const defaultIcon = <RadioButtonUncheckedIcon />;

const Radio = React.forwardRef(({
    className,
    checked,
    name,
    label,
    onChange,
    ...rest
}, ref) => (
    <span className={cx(cn(), className)}>
        <SwitchBase
            type="radio"
            icon={defaultIcon}
            checkedIcon={defaultCheckedIcon}
            name={name}
            checked={checked}
            onChange={onChange}
            ref={ref}
            {...rest}
        />
        {
            label ? (
                <span className={cn('label')}>{label}</span>
            ) : null
        }
    </span>
));

Radio.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    checkedIcon: PropTypes.node,
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
};

export default Radio;
