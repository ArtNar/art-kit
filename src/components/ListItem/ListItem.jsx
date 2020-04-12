import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { ListItemIcon } from '../ListItemIcon';

const cn = _cn('list-item');

const ListItem = React.forwardRef(({
    children,
    className,
    selected,
    disabled,
    icon,
    button,
    ...rest
}, ref) => (
    <li
        {...rest}
        ref={ref}
        className={cx(cn({
            selected,
            disabled,
            button,
        }), className)}
    >
        <>
            {icon && (
                <ListItemIcon icon={icon} />
            )}
            <div className={cn('text')}>
                {children}
            </div>
        </>
    </li>
));

ListItem.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    button: PropTypes.bool,
};

export default ListItem;
