import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

function useLoaded({ src }) {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!src) {
            return undefined;
        }

        setLoaded(false);

        let active = true;
        const image = new Image();
        image.src = src;
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded('error');
        };

        return () => {
            active = false;
        };
    }, [src]);

    return loaded;
}

const cn = _cn('avatar');

const Avatar = React.forwardRef(({
    className,
    alt,
    sizes,
    src,
    ...rest
}, ref) => {
    let children = null;

    const loaded = useLoaded({ src });
    const hasImg = src;
    const hasImgNotFailing = hasImg && loaded !== 'error';

    if (hasImgNotFailing) {
        children = (
            <img
                alt={alt}
                src={src}
                sizes={sizes}
            />
        );
    } else if (hasImg && alt) {
        // eslint-disable-next-line prefer-destructuring
        children = alt[0];
    } else {
        children = '';
    }

    return (
        <div
            ref={ref}
            className={cx(cn(), className)}
            {...rest}
        >
            {children}
        </div>
    );
});

Avatar.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
};

export default Avatar;
