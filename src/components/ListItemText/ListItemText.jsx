import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('list-item-text');

const ListItemText = React.forwardRef(({
    className,
    children,
    inset = false,
    primary,
    secondary,
    ...rest
}, ref) => (
    <div
        className={cx(cn({
            inset,
        }), className)}
        ref={ref}
        {...rest}
    >
        {primary}
        {secondary}
    </div>
));

ListItemText.propTypes = {
    children: PropTypes.node,
    inset: PropTypes.bool,
    primary: PropTypes.node,
    secondary: PropTypes.node,
    className: PropTypes.string,
};

export default ListItemText;
