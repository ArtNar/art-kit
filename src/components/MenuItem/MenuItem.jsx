import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../ListItem';

const MenuItem = React.forwardRef(({
    component = 'li',
    selected,
    disabled,
    ...other
}, ref) => (
    <ListItem
        component={component}
        selected={selected}
        disabled={disabled}
        ref={ref}
        {...other}
        button
    />
));

MenuItem.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    disabled: PropTypes.bool,
    role: PropTypes.string,
    selected: PropTypes.bool,
};

export default MenuItem;
