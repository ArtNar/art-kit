import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { Divider } from '../Divider';

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
            <>
                <span className={cn('title')}>
                    {title}
                </span>
                <Divider fullWidth />
            </>
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
