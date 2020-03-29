import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('list-item');

const ListItem = React.forwardRef(({
    children,
    className,
    selected,
    disabled,
    button,
    ...rest
}, ref) => (
    <li
        className={cx(cn({
            selected,
            disabled,
            button,
        }), className)}
        ref={ref}
        {...rest}
    >
        {children}
    </li>
));

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    button: PropTypes.bool,
};

export default ListItem;
