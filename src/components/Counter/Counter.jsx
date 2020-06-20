import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { Button } from '../Button';

const cn = _cn('counter');

const Counter = React.forwardRef(({
    className,
    count: countProp,
    children,
    max = 99,
    showZero,
    ...rest
}, ref) => {
    const count = countProp > max ? `${max}+` : countProp;

    const content = useMemo(() => ((count || showZero)
        ? count
        : children
    ), [count, showZero, children]);

    return (
        <span
            ref={ref}
            className={cx(cn(), className)}
            {...rest}
        >
            <Button
                shape="circle"
                color={count ? 'danger' : 'primary'}
                icon
            >
                {content}
            </Button>
        </span>
    );
});

Counter.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    children: PropTypes.node,
    max: PropTypes.number,
    showZero: PropTypes.bool,
};

export default Counter;
