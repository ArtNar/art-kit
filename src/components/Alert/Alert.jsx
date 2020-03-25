import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import { Button } from '../Button';
import { Paper } from '../Paper';
import {
    CloseIcon,
    SuccessOutlinedIcon,
    ReportProblemOutlinedIcon,
    ErrorOutlineIcon,
    InfoOutlinedIcon,
} from '../Icons';

const cn = _cn('alert');

const defaultIconMapping = {
    success: <SuccessOutlinedIcon />,
    warning: <ReportProblemOutlinedIcon />,
    error: <ErrorOutlineIcon />,
    info: <InfoOutlinedIcon />,
};

const Alert = React.forwardRef(({
    action,
    className,
    children,
    icon,
    onClose,
    role = 'alert',
    type = 'info',
    variant,
    ...rest
}, ref) => (
    <div
        className={cx(cn({
            type,
            role,
        }), className)}
    >
        <Paper
            ref={ref}
            variant={variant}
            {...rest}
        >
            <div className={cn('content')}>
                {!action && (
                    <div className={cn('icon')}>
                        {icon !== false ? (
                            <div>
                                {icon || defaultIconMapping[type]}
                            </div>
                        ) : null}
                    </div>
                )}
                <div>{children}</div>
                {!action && onClose ? (
                    <div className={cn('action')}>
                        <Button
                            view="link"
                            color="white"
                            onClick={onClose}
                        >
                            <CloseIcon fontSize="small" />
                        </Button>
                    </div>
                ) : null}
            </div>
            {action && (
                <div className={cn('actions')}>
                    {action}
                </div>
            )}
        </Paper>
    </div>
));

Alert.propTypes = {
    className: PropTypes.string,
    action: PropTypes.node,
    children: PropTypes.node,
    icon: PropTypes.node,
    onClose: PropTypes.func,
    role: PropTypes.string,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
    variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default Alert;
