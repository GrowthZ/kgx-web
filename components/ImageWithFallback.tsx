import { useState, FC, ImgHTMLAttributes, ReactNode } from 'react';
import logoKgx from '../src/media/logo-kgx.png';
import { useLightbox } from '../src/contexts/LightboxContext';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    isBackground?: boolean;
    children?: React.ReactNode;
    showLightbox?: boolean;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
    src,
    alt,
    className,
    fallbackSrc = logoKgx,
    isBackground = false,
    children,
    showLightbox = false,
    onClick,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [error, setError] = useState(false);
    const { openLightbox } = useLightbox();

    const handleError = () => {
        if (!error) {
            setImgSrc(fallbackSrc);
            setError(true);
        }
    };

    const handleClick = (e: React.MouseEvent<any>) => {
        if (showLightbox && (imgSrc || src)) {
            openLightbox([imgSrc || src!]);
        }
        if (onClick) onClick(e);
    };

    const commonProps = {
        className: `${className} ${showLightbox ? 'cursor-pointer' : ''}`,
        onClick: handleClick,
        ...props
    };

    if (isBackground) {
        return (
            <div
                {...commonProps as any}
                style={{
                    backgroundImage: `url('${imgSrc || fallbackSrc}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...props.style
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <img
            src={imgSrc || fallbackSrc}
            alt={alt}
            onError={handleError}
            {...commonProps}
        />
    );
};

export default ImageWithFallback;
