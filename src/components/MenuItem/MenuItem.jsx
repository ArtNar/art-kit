import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { ListItem } from '../ListItem';

const cn = _cn('menu-item');

const MenuItem = React.forwardRef(({
    className,
    selected,
    disabled,
    ...rest
}, ref) => (
    <ListItem
        {...rest}
        ref={ref}
        className={cx(cn(), className)}
        selected={selected}
        disabled={disabled}
        button
    />
));

MenuItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    role: PropTypes.string,
    selected: PropTypes.bool,
};

export default MenuItem;
