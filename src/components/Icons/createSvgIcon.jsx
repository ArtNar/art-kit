import React from 'react';
import { SvgIcon } from '../SvgIcon';

export default function createSvgIcon(path) {
    const Component = React.memo(
        React.forwardRef((props, ref) => (
            <SvgIcon
                {...props}
                ref={ref}
            >
                {path}
            </SvgIcon>
        )),
    );

    Component.muiName = SvgIcon.muiName;

    return Component;
}
