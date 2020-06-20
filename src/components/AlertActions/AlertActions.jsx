import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import { Button } from '../Button';

const cn = _cn('alert-actions');

const AlertActions = ({
    actions,
    type,
    size,
}) => (
    <div className={cn()}>
        {actions && actions.map(({
            id,
            label,
            onClick,
            outlined,
        }) => (
            <Button
                key={id}
                className={cn('button')}
                color={type}
                size={size}
                onClick={onClick}
                outlined={outlined}
            >
                {label}
            </Button>
        ))}
    </div>
);

AlertActions.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
    size: PropTypes.oneOf(['s', 'm', 'l']),
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'link',
    ]),
};

export default AlertActions;
