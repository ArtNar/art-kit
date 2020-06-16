import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('list');

const List = React.forwardRef(({
    children,
    className,
    title,
    ...rest
}, ref) => (
    <div
        {...rest}
        ref={ref}
        className={cx(cn(), className)}
    >
        {title && (
            <div className={cn('title')}>
                {title}
            </div>
        )}
        <ul className={cn('content')}>
            {children}
        </ul>
    </div>
));

List.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    title: PropTypes.node,
    className: PropTypes.string,
};

export default List;
