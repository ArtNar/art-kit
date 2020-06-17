import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('tab');

const Tab = React.forwardRef(({
    className,
    children,
    selected,
    disabled,
    onClick,
}, ref) => (
    <div
        ref={ref}
        className={cx(cn({
            selected,
            disabled,
        }), className)}
        onClick={!disabled && onClick}
        onKeyPress={!disabled && onClick}
        role="button"
        tabIndex={0}
    >
        {children}
    </div>
));

Tab.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Tab;
