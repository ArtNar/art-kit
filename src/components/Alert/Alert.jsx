import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { Button } from '../Button';
import { Paper } from '../Paper';
import { AlertActions } from '../AlertActions';
import {
    CloseIcon,
    SuccessOutlinedIcon,
    ReportProblemOutlinedIcon,
    ErrorOutlineIcon,
    InfoOutlinedIcon,
} from '../Icons';

const cn = _cn('alert');

const buttonTypeMapping = {
    info: 'primary',
    success: 'success',
    warning: 'warning',
    error: 'danger',
};

const defaultIconMapping = {
    success: <SuccessOutlinedIcon />,
    warning: <ReportProblemOutlinedIcon />,
    error: <ErrorOutlineIcon />,
    info: <InfoOutlinedIcon />,
};

const Alert = React.forwardRef(({
    actions,
    className,
    children,
    icon,
    size = 's',
    onClose,
    type = 'info',
}, ref) => (
    <div
        className={cx(cn({
            type,
        }), className)}
    >
        <Paper
            ref={ref}
            className={cn('content')}
            elevation={1}
            fluid
        >
            {(icon || type) && (
                <div className={cn('icon')}>
                    {React.cloneElement(icon || defaultIconMapping[type], {
                        size: icon?.props.size || size,
                    })}
                </div>
            )}
            <div className={cn('text', { size })}>{children}</div>
            {onClose && (
                <Button
                    className={cn('close-button')}
                    type={buttonTypeMapping[type] || 'primary'}
                    onClick={onClose}
                    size={size}
                    onlyIcon
                >
                    <CloseIcon size={size} />
                </Button>
            )}
            {actions && (
                <AlertActions
                    actions={actions}
                    size={size}
                    type={buttonTypeMapping[type] || 'primary'}
                />
            )}
        </Paper>
    </div>
));

Alert.propTypes = {
    className: PropTypes.string,
    actions: PropTypes.node,
    children: PropTypes.node,
    icon: PropTypes.node,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default Alert;
