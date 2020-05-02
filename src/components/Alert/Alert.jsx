import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
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
    type = 'info',
    ...rest
}, ref) => (
    <div
        className={cx(cn({
            type,
        }), className)}
    >
        <Paper
            ref={ref}
            elevation={1}
            {...rest}
        >
            <div className={cn('content')}>
                {(icon || type) && (
                    <div className={cn('icon')}>
                        {icon || defaultIconMapping[type]}
                    </div>
                )}
                <div>{children}</div>
                {onClose && (
                    <div className={cn('action')}>
                        <Button
                            view="link"
                            color="white"
                            onClick={onClose}
                        >
                            <CloseIcon fontSize="small" />
                        </Button>
                    </div>
                )}
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
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default Alert;
