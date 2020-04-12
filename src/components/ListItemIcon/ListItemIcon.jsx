import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('list-item-icon');

const ListItemIcon = React.forwardRef(({
    className,
    icon,
    ...rest
}, ref) => (
    <div
        {...rest}
        ref={ref}
        className={cx(cn(), className)}
    >
        {icon}
    </div>
));

ListItemIcon.propTypes = {
    icon: PropTypes.node,
    className: PropTypes.string,
};

export default ListItemIcon;
