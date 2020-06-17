import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('tabs');

const Tabs = React.forwardRef(({
    className,
    children,
    value: valueProp,
    defaultTab = 0,
    onChange,
}, ref) => {
    const handleTabClick = (idx) => () => onChange && valueProp !== idx && onChange(idx);

    const value = Number.isInteger(valueProp) ? valueProp : defaultTab;

    return (
        <div
            ref={ref}
            className={cx(cn(), className)}
        >
            {React.Children.map(children, (child, idx) => {
                if (!React.isValidElement(child)) {
                    return null;
                }

                return React.cloneElement(child, {
                    ...child.props,
                    selected: value === idx,
                    onClick: handleTabClick(idx),
                });
            })}
        </div>
    );
});

Tabs.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    defaultTab: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
};

export default Tabs;
