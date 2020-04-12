import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../ListItem';

const MenuItem = React.forwardRef(({
    selected,
    disabled,
    ...rest
}, ref) => (
    <ListItem
        {...rest}
        ref={ref}
        selected={selected}
        disabled={disabled}
        button
    />
));

MenuItem.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    role: PropTypes.string,
    selected: PropTypes.bool,
};

export default MenuItem;
