import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';

const cn = _cn('list-item-icon');

const ListItemIcon = React.forwardRef(({
    className,
    children,
    ...rest
}, ref) => (
    <div
        className={cx(cn(), className)}
        ref={ref}
        {...rest}
    >
        {children}
    </div>
));

ListItemIcon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default ListItemIcon;
