import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('list');

const List = React.forwardRef(({
    children,
    className,
    subHeader,
    padded,
    ...rest
}, ref) => (
    <ul
        className={cx(cn({
            padded,
        }), className)}
        ref={ref}
        {...rest}
    >
        <span>
            {subHeader}
        </span>
        {children}
    </ul>
));

List.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    subHeader: PropTypes.node,
    padded: PropTypes.bool,
    className: PropTypes.string,
};

export default List;
